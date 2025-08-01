import ListOfPlayers from "./ListOfPlayers";
import { allPlayerList } from "./AllPlayers";

const oddPlayers = [];
const evenPlayers = [];

allPlayerList.forEach((player, index) => {
  if ((index + 1) % 2 === 1) {
    oddPlayers.push(player);
  } else {
    evenPlayers.push(player);
  }
});

function OddEvenPlayers() {
  return (
    <>
      <h2>List of Odd Players</h2>
      <ListOfPlayers playerList={oddPlayers} />
      <hr/>
      <h2>List of Even Players</h2>
      <ListOfPlayers playerList={evenPlayers} />
    </>
  );
}
export default OddEvenPlayers
