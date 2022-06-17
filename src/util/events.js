export const getEvents = async () => {
  const url = 'https://npxs.herokuapp.com/data/leaderboard.json';

  const holdersData = await fetch(url + '?'+(new Date()).getTime(), {
    headers: {
      'Cache-Control': 'no-cache'
    }}).then((response) => response.json());
  
  return holdersData["holders"];
}