
function ListOfPlayers({playerList}) {
  return playerList.map((item) => {
    return (
      <div>
        <li>
          Mr. {item.name}
          <span> <b>{item.score} </b></span>
        </li>
      </div>
    );
  });
}

export default ListOfPlayers;
