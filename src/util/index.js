/**Shorten address */
export const shortenAddress = (address) => {
  return `${address.slice(0, 8)}...${address.slice(address.length - 4)}`;
};
