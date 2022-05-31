import { ethers } from "ethers";
const provider = new ethers.providers.Web3Provider(window.ethereum);

export const resolveEnsName = (address) => {
  provider.lookupAddress(address).then((resolvedName) => {
    return resolvedName ?? address;
  });
}

export const shortenAddress = (address) => {
  return `${address.slice(0, 7)}...${address.slice(address.length - 6)}`;
};