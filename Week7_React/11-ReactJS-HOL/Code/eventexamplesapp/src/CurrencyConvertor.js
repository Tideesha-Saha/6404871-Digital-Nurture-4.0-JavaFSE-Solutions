import { useState } from "react";

function CurrencyConvertor() {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("");
  const [converted, setConverted] = useState(null);

  const conversionRate = 90.5;

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isNaN(amount) || amount.trim() === "") {
      alert("Please enter a valid number in euro or inr.");
      return;
    }

    if (currency.trim().toLowerCase() === "euro") {
      const result = parseFloat(amount) * conversionRate;
      setConverted(`₹ ${result.toFixed(2)}`);
      alert(`${amount} Euro is ${result.toFixed(2)} INR`);
    } 

    else if (currency.trim().toLowerCase() === "inr") {
      const result = parseFloat(amount) / conversionRate;
      setConverted(`₹ ${result.toFixed(2)}`);
      alert(`${amount} INR is ${result.toFixed(2)} Euro`);
    } 

    else {
      alert("Please enter Euro or inr only");
      setConverted(null);
      return;
    }
  };
  return (
    <>
      <h1 style={{ color: "green" }}>Currency Convertor!</h1>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="text"
          placeholder="Enter the Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <br />
        <label>Currency:</label>
        <input
          type="text"
          placeholder="Enter the Currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <br />
        <button type="submit">
          Convert
          {currency.trim().toLowerCase() === "euro" ? " to INR" : " to Euro"}
        </button>
      </form>
    </>
  );
}
export default CurrencyConvertor;
