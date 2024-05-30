import { useState } from "react";
import { nanoid } from "nanoid";

const AddContact = ({ addNewContact }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        alert("Hello, I am -default case-");
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contactObj = {
      id: nanoid(),
      name,
      number,
    };
    addNewContact(contactObj);
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name1">Name:</label>
      <input
        type="text"
        name="name"
        id="name1"
        onChange={handleChange}
        value={name}
        required
      />
      <label htmlFor="phone">Pnone number</label>
      <input
        type="tel"
        name="number"
        id="phone"
        onChange={handleChange}
        value={number}
        required
      ></input>
      <button type="submit">Add contact </button>
    </form>
  );
};

export default AddContact;
