import React, { useState, useEffect } from "react";
import "./App.css";
import Stat from "./Stat";
import Header from "./Header";
import Card from "./UI/Card";
import axios from "axios";

function App(longi, lati, props) {
  const [country, setCountry] = useState("Loading...");
  const [temp, setTemp] = useState("0");
  const [descr, setDescr] = useState("Loading...");
  const [main, setMain] = useState("Loading...");
  const [city, setCity] = useState("Loading...");
  const [icon, setIcon] = useState("Loading...")


  //curent location weather info
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        let longi = position.coords.longitude;
        let lati = position.coords.latitude;

        console.log(longi, lati);

        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${longi}&appid=2c4ae810fb0582e5bfd2d6d93d8e708d`
          )
          .then((res) => {
            setCountry(res.data.sys.country);
            setTemp(res.data.main.temp);
            setCity(res.data.name);
            setDescr(res.data.weather[0].description);
            setMain(res.data.weather[0].main);
            setIcon(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)

            console.log(res.data);
          });
      });
    }
  }, [longi, lati]);

  // For entered city weather info

  const addCityName = (selectedCity) => {
    axios
      .get(
        ` https://api.openweathermap.org/data/2.5/weather?q=${selectedCity}&appid=99da379ec37837415169a989511bccc0`
      )
      .then((res) => {
        setCountry(res.data.sys.country);
        setTemp(res.data.main.temp);
        setCity(res.data.name);
        setDescr(res.data.weather[0].description);
        setMain(res.data.weather[0].main);
      });
  };

  return (
    <div className="wrapper">
      <Card>
        <Header onAddCity={addCityName}></Header>
      </Card>
      <Card>
        <Stat
          temp={temp}
          country={country}
          city={city}
          descr={descr}
          main={main}
          icon={icon}
        ></Stat>
      </Card>
    </div>
  );
}

export default App;
