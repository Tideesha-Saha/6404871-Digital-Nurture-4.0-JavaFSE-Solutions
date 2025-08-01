import "./App.css";
import { allPlayerList } from "./AllPlayers";
import ListOfPlayers from "./ListOfPlayers";
import PlayersBelow70 from "./PlayersBelow70";
import OddPlayers from "./OddPlayers";
import EvenPlayers from "./EvenPlayers";
import { IndianPlayers } from "./AllPlayers";
import ListofIndianPlayers from "./ListOfIndianPlayers";

function App() {
  const flag = false;

  if (flag) {
    return (
      <div className="App">
        <h3>Flag is: {flag.toString()}</h3>
        <h2>List Of Players</h2>
        <ListOfPlayers playerList={allPlayerList} />
        <hr />

        <h2>List Of Players Having Scores less than 70</h2>
        <PlayersBelow70 />
      </div>
    );
  } else {
    return (
      <div className="App">
        <h3>Flag is: {flag.toString()}</h3>
        <h2>List of Odd Players</h2>
        <OddPlayers players={allPlayerList} />
        <hr />

        <h2>List of Even Players</h2>
        <EvenPlayers players={allPlayerList} />
        <hr />

        <h2>List of Indian Players Merged</h2>
        <ListofIndianPlayers IndianPlayers={IndianPlayers} />
      </div>
    );
  }
}

export default App;
