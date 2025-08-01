import ListOfPlayers from "./ListOfPlayers";
import { allPlayerList } from "./AllPlayers";

function PlayersBelow70() {
  let players70 = [];
  return (
    <>
      {allPlayerList.map((item) => {
        if (item.score <= 70) {
          players70.push(item);
        }
      })}
      <ListOfPlayers playerList={players70} />
    </>
  );
}

export default PlayersBelow70;
