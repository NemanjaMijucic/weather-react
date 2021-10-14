import React, {useState} from "react";

const CityScrool = (props) => {
    const [cityChange, setCityChange] = useState('')


  const cityChangeHandler = (e) => {
      e.preventDefault();

      
     let selectedCity = cityChange;
     props.onSaveCity(selectedCity);
     setCityChange('')
  };

  const getCityName = (e)=> {
    e.preventDefault();

    setCityChange(e.target.value);
  }



  return (
    <div>
      <form  onSubmit={cityChangeHandler}>
        <input type="text" onChange={getCityName} value={cityChange} placeholder='enter city name'></input>
        <button type="submit">
          submit
        </button>
      </form>
    </div>
  );
};

export default CityScrool;
