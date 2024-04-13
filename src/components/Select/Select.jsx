import React, { Component } from "react";

export default class Select extends Component {
  handleChange = () => {};
  render() {
    return (
      <>
        <div>Select</div>
        <label>
          options
          <select name="" id="">
            <option value="">...</option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
      </>
    );
  }
}
