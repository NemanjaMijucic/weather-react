import React from "react";
import CityScrool from "./CityScrool";

const Header = (props) => {
    const saveCityDataHandler = (selectedCity) => {
      const enteredCity = selectedCity;
  
      props.onAddCity(enteredCity);
    };
  
    return (
      <div>
        <h1>Weather App</h1>
  
        <CityScrool onSaveCity={saveCityDataHandler}></CityScrool>
      </div>
    );
  };
  
  export default Header;
  