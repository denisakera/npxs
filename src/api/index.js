import axios from "axios";

export const getNftTokens = async (ownerAddress) => {
  const res = fetch(
    `https://testnets-api.opensea.io/api/v1/assets?owner=${ownerAddress}&asset_contract_address=0xBCC081Df56f3130E720cf54f6c95bE79fFf5A7f9&order_direction=desc&offset=0&limit=50&collection=nfpx-2-v2`,
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ assets }) => {
    return assets;
  })

  return res;
}

export const getTopOwnerShips = async () => {
  const res = fetch(
    'https://testnets-api.opensea.io/api/v1/asset/0xBCC081Df56f3130E720cf54f6c95bE79fFf5A7f9/1/',
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ top_ownerships }) => {
    return top_ownerships;
  })

  return res;
}
