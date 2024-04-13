import { Component } from "react";

class ContactElement extends Component {
  filteredContacts = () => {
    const { contacts, filter } = this.props;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { contacts, deleteContact } = this.props;

    return (
      contacts.length > 0 &&
      this.filteredContacts().map((element) => (
        <li key={element.id}>
          <span>{element.name}</span> <span>{element.number}</span>
          <button onClick={() => deleteContact(element.id)}>Delete</button>
        </li>
      ))
    );
  }
}

export default ContactElement;
