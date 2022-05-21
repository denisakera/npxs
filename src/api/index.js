import axios from "axios";

export const getNftTokens = async (ownerAddress) => {
  fetch(
    `https://api.opensea.io/api/v1/assets?owner=${ownerAddress}&order_direction=desc&offset=0&limit=30`,
    { method: "GET", headers: { Accept: "application/json" } }
  ).then(response => response.json()).then(({ assets }) => {
    return assets;
  })
}

export const getTopOwnerShips = async () => {
  axios.get("https://vrdust.org.uk/cache/leaderboard.json")
    .then(({ data }) => {
      return data;
    })
}
