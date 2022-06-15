import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
import { getConfigData, getABI } from "../redux/blockchain/util";
import { resolveEnsName } from ".";

/**Get the all address that hold an NFT in collection */
export const getEvents = async () => {
  Web3EthContract.setProvider('https://rpc-mainnet.maticvigil.com');

  const CONFIG = await getConfigData();
  const  contractAbi = await getABI();
  const contractAddress = CONFIG.CONTRACT_ADDRESS;

  const contract = new Web3EthContract(contractAbi, contractAddress)

  
  const { events, errors } = await getPastEvents();

  if (events.length === 0) {
    console.log(errors);
    return [];
  }

  const holders = [...new Set(events.map((event) => event.returnValues.to))];

  if (holders) {
    let allHolders = await Promise.all(holders?.map(async (address) => {
      const piecesOwned = await contract.methods.balanceOf(address).call();
      const ensName = await resolveEnsName(address);

      return {
        "address": address,
        "ens_name": ensName,
        "pieces_owned": Number(piecesOwned)
      };

    }));

    return allHolders.sort(function (a, b) { return b.pieces_owned - a.pieces_owned });

  } else {
    return [];
  }
}

const getPastEvents = async () => {

  const CONFIG = await getConfigData();

  const contractAbi = await getABI();
  const event = 'Transfer';
  const contractAddress = CONFIG.CONTRACT_ADDRESS;
  let fromBlock = 0;
  let toBlock = 'latest';
  let chunkLimit = 0;
  
  try {
    Web3EthContract.setProvider('https://rpc-mainnet.maticvigil.com');
    const web3 = new Web3('https://rpc-mainnet.maticvigil.com');
    const contract = new Web3EthContract(contractAbi, contractAddress);

    const fromBlockNumber = +fromBlock
    const toBlockNumber = toBlock === "latest" ? +(await web3.eth.getBlockNumber()) : +toBlock
    const totalBlocks = toBlockNumber - fromBlockNumber
    const chunks = []

    if (chunkLimit > 0 && totalBlocks > chunkLimit) {
      const count = Math.ceil(totalBlocks / chunkLimit)
      let startingBlock = fromBlockNumber

      for (let index = 0; index < count; index++) {
        const fromRangeBlock = startingBlock
        const toRangeBlock = index === count - 1 ? toBlockNumber : startingBlock + chunkLimit
        startingBlock = toRangeBlock + 1
        //console.log(count, 'Looping')
        chunks.push({ fromBlock: fromRangeBlock, toBlock: toRangeBlock })
      }
    } else {
      chunks.push({ fromBlock: fromBlockNumber, toBlock: toBlockNumber })
    }

    const events = []
    const errors = []
    for (const chunk of chunks) {
      await contract.getPastEvents(
        event,
        {
          fromBlock: chunk.fromBlock,
          toBlock: chunk.toBlock
        },
        async function (error, chunkEvents) {
          if (chunkEvents?.length > 0) {
            events.push(...chunkEvents)
          }

          if (error) errors.push(error)
        }
      )
    }

    return { events, errors, lastBlock: toBlockNumber }
  } catch (error) {
    return { events: [], errors: [error], lastBlock: null }
  }
}