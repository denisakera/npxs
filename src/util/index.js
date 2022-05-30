import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);

export const resolveEnsName = async (address) => {
  const ensname = await provider.lookupAddress(address);

  return ensname;
}

export const shortenAddress = (address) => {
  return `${address.slice(0, 7)}...${address.slice(address.length - 6)}`;
};