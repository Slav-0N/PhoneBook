import { Component } from "react";
import { nanoid } from "nanoid";

class AddContact extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (event) => {
    // const { value } = event.target;
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    const { addNewContact } = this.props;
    evt.preventDefault();
    const contactObj = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    addNewContact(contactObj);
    this.setState({ name: " ", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name1">Name:</label>
        <input
          type="text"
          name="name"
          id="name1"
          onChange={this.handleChange}
          value={this.state.name}
          required
        />
        <label htmlFor="phone">Pnone number</label>
        <input
          type="tel"
          name="number"
          id="phone"
          onChange={this.handleChange}
          value={this.state.number}
          required
        ></input>
        <button type="submit">Add contact </button>
      </form>
    );
  }
}

export default AddContact;
