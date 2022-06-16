export const getEvents = async () => {
  const url = 'https://npxs.herokuapp.com/data/leaderboard.json';

  const holdersData = await fetch(url).then((response) => response.json());
  
  return holdersData["holders"];
}