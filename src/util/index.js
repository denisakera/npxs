export const shortenAddress = (address) => {
    return `Wallet Address: ${address.slice(0, 5)}...${address.slice(address.length - 4)}`;
  };