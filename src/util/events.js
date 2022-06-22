export const getEvents = async () => {
  const url = 'https://cryptopintxos.github.io/leaderboard.json';



  const holdersData = await fetch(url).then((response) => response.json());


  
  return holdersData["holders"];
}