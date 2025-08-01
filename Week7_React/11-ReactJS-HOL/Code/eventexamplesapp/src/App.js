import logo from "./logo.svg";
import "./App.css";
import Counter from "./Counter";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  return (
    <div className="App">
      <div className="component">
        <Counter />
      </div>
      <div className="component">
      <CurrencyConvertor />
      </div>
    </div>
  );
}

export default App;
