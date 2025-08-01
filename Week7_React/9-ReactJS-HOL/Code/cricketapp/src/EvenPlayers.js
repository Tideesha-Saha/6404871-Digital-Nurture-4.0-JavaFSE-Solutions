export default function OddPlayers({ players: [, second, , fourth, , sixth, , eighth, , tenth] }) {
  return (
    <div>
      <ul>
        <li>Second: {second.name}</li>
        <li>Fourth: {fourth.name}</li>
        <li>Sixth: {sixth.name}</li>
        {/* <li>seventh: {seventh.name}</li> */}
        <li>Eighth: {eighth.name}</li>
        <li>Tenth: {tenth.name}</li>
      </ul>
    </div>
  );
}
