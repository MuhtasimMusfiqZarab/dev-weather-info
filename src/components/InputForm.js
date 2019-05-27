import React from "react";

const InputForm = props => (
  <div>
    <label>Select City: </label>
    <select id="filter-by" className="dropdown" onChange={props.fetchWeather}>
      <option selected disabled>
        Cities
      </option>
      <option value="dhaka">Dhaka</option>
      <option value="chittagong">Chittagong</option>
      <option value="sylhet">Sylhet</option>
      <option value="rajshahi">Rajshahi</option>
      <option value="barishal">Barishal</option>
    </select>
  </div>
);
export default InputForm;
