import React from "react";
import "./App.css";
import officeImg from "./assets/OfficeSpaceImage.jpg";

function App() {
  const element = "Office Space";

  const jsxatt = (
    <img src={officeImg} width="50%" height="25%" alt="Office Space" />
  );

  const officeList = [
    { name: "DBS", rent: 50000, address: "Chennai" },
    { name: "Office Space 2", rent: 70000, address: "Kolkata" },
    { name: "Office Space 3", rent: 45000, address: "Hyderabad" },
    { name: "Office Space 4", rent: 85000, address: "Mumbai" },
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}

      <div className="officeSpaces">
        {officeList.map((office, index) => {
          const textColor = office.rent <= 60000 ? "textRed" : "textGreen";

          return (
            <div key={index} className="officeCard">
              <h2>Name: {office.name}</h2>
              <h3 className={textColor}>Rent: Rs. {office.rent}</h3>
              <h4>Address: {office.address}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
