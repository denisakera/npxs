export const getEvents = async () => {
  const url = 'https://cryptopintxos.github.io/leaderboard.json';

  const holdersData = await fetch(url + '?'+(new Date()).getTime(), {
    headers: {
      'Cache-Control': 'no-cache'
    }}).then((response) => response.json());
  
  return holdersData["holders"];
}