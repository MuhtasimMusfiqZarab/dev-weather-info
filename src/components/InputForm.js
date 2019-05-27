import React from "react";

const InputForm = props => (
  // <form action="" onSubmit={props.fetchWeather}>
  //   <input type="text" name="city" placeholder="Enter City .." />
  //   <input type="text" name="country" placeholder="Enter Country .." />
  //   <button>Fetch Weather</button>
  // </form>
  // < !--create dropdown -->
  <div>
    <label>Select City: </label>
    <select id="filter-by" className="dropdown" onChange={props.fetchWeather}>
      <option value="dhaka">Dhaka</option>
      <option value="chittagong">Chittagong</option>
      <option value="sylhet">Sylhet</option>
      <option value="rajshahi">Rajshahi</option>
      <option value="barishal">Barishal</option>
    </select>
  </div>
);
export default InputForm;
