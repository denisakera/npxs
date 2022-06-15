import { getConfigData, getSmartContractInstance } from "../redux/blockchain/util";


export const getNftTokens = async (walletAddress) => {
  
  const CONFIG = await getConfigData();
  const contractAddress = CONFIG.CONTRACT_ADDRESS;
  const contract = await getSmartContractInstance();

  const npxsBalance = await contract.methods.balanceOf(walletAddress).call();
  const npxsIds = await contract.methods.walletOfOwner(walletAddress).call();
  
  let assets = [];
  
  if (npxsIds.length === 0) return assets;

  for(let i = 0; i < npxsBalance; i++) {
    const tokenId = await contract.methods.tokenOfOwnerByIndex(walletAddress, i).call()

    let tokenMetadataURI = await contract.methods.tokenURI(tokenId).call()

    if (tokenMetadataURI.startsWith("ipfs://")) {
      tokenMetadataURI = `https://ipfs.io/ipfs/${tokenMetadataURI.split("ipfs://")[1]}`
    }

    const tokenMetadata = await fetch(tokenMetadataURI).then((response) => response.json());

    let metadataObj = {
      name: tokenMetadata["name"], 
      image_preview_url: `https://ipfs.io/ipfs/${tokenMetadata["image"].split("ipfs://")[1]}`, 
      token_id: tokenId,
      permalink: `https://opensea.io/assets/${contractAddress}/${tokenId}`,
    }

    assets.push(metadataObj);

  }

  return assets;

}
