export default function EvenPlayers({ players: [first, , third, , fifth, , seventh, , ninth, , eleventh] }) {
  return (
    <div>
      <ul>
        <li>First: {first.name}</li>
        <li>Third: {third.name}</li>
        <li>Fifth: {fifth.name}</li>
        <li>Seventh: {seventh.name}</li>
        <li>Ninth: {ninth.name}</li>
        <li>Eleventh: {eleventh.name}</li>
      </ul>
    </div>
  );
}
