import { Component } from "react";
import ContactElement from "./components/contactElement/contactElement";
import SearchFilter from "./components/searchFilter/searchFilter";
import AddContact from "./components/addContact/addContact";
import ContactList from "./components/contactList/contactList";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (contactObj) => {
    const { contacts } = this.state;
    const dubble = contacts.find(
      (element) =>
        element.name.toLowerCase().trim() ===
        contactObj.name.toLowerCase().trim()
    );

    dubble
      ? alert("есть такое имя")
      : this.setState({ contacts: [...this.state.contacts, contactObj] });
  };

  handleFind = (event) => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  deleteContact = (id) => {
    this.setState((prev) => ({
      contacts: prev.contacts.filter((el) => el.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <div>
        <h1>PhoneBook</h1>
        <AddContact addNewContact={this.addNewContact} />
        <h2>Contacts</h2>
        <SearchFilter filter={filter} handleFind={this.handleFind} />
        <ContactList>
          <ContactElement
            deleteContact={this.deleteContact}
            contacts={contacts}
            filter={filter}
          />
        </ContactList>
      </div>
    );
  }
}

export default App;
