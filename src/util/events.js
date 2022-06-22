export const getEvents = async () => {
  const url = 'http://35.209.23.31/data/leaderboard.json';



  const holdersData = await fetch(url).then((response) => response.json());


  
  return holdersData["holders"];
}