import { getConfigData } from "../redux/blockchain/util";

export const getNftTokens = async (ownerAddress) => {
  const CONFIG = await getConfigData();

  const res = fetch(
    `https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&asset_contract_address=${CONFIG.CONTRACT_ADDRESS}&order_direction=desc&offset=0&limit=50&collection=nfpx-2-v2`,
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ assets }) => {
    return assets;
  }).catch(function(error) {
    console.log('Request failed', error)
    return [];
});

  return res;
}
 