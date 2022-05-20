export const getNftTokens = async (ownerAddress) => {
  fetch(
    `https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&order_direction=desc&offset=0&limit=30`,
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ assets }) => {
    return assets;
  })
}
 
export const getTopOwnerShips = async (contractAddress, tokenId) => {
  fetch(
    `https://testnets-api.opensea.io/api/v1/asset/${contractAddress}/${tokenId}/`,
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ top_ownerships }) => {
    return top_ownerships;
  })
}
 