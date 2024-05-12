import ContactElement from "./components/contactElement/contactElement";
// import SearchFilter from "./components/searchFilter/searchFilter";
// import AddContact from "./components/addContact/addContact";
import ContactList from "./components/contactList/contactList";
import { useEffect } from "react";
import { fetchAll } from "./components/redux/operations";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  //

  // const addNewContact = (contactObj) => {
  //   const dubble = contacts.find(
  //     (element) =>
  //       element.name.toLowerCase().trim() ===
  //       contactObj.name.toLowerCase().trim()
  //   );

  //   dubble ? alert("есть такое имя") : setContacts([...contacts, contactObj]);
  // };

  // const handleFind = (event) => {
  //   const { value } = event.target;
  //   setFilter(value);
  // };

  // const deleteContact = (id) => {
  //   setContacts(contacts.filter((el) => el.id !== id));
  // };

  return (
    <div>
      <h1>PhoneBook</h1>
      {/* <AddContact addNewContact={addNewContact} /> */}
      <h2>Contacts</h2>
      {/* <SearchFilter filter={filter} handleFind={handleFind} /> */}
      <ContactList>
        <ContactElement
          // deleteContact={deleteContact}
          contacts={contacts}
          // filter={filter}
        />
      </ContactList>
    </div>
  );
};

export default App;

// import { Component } from "react";
// import ContactElement from "./components/contactElement/contactElement";
// import SearchFilter from "./components/searchFilter/searchFilter";
// import AddContact from "./components/addContact/addContact";
// import ContactList from "./components/contactList/contactList";

// // import Select from "./components/Select/Select";
// // import Reduce from "./components/Reduce/Reduce";
// const data = [
//   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// ];

// class App extends Component {
//   state = {
//     contacts: [],
//     filter: "",
//   };

//   componentDidMount() {
//     JSON.parse(localStorage.getItem("buba")) &&
//     JSON.parse(localStorage.getItem("buba")).length > 0
//       ? this.setState({ contacts: JSON.parse(localStorage.getItem("buba")) })
//       : this.setState({ contacts: data });
//   }

//   componentDidUpdate(_, prevState) {
//     prevState.contacts !== this.state.contacts &&
//       localStorage.setItem("buba", JSON.stringify(this.state.contacts));
//   }

//   addNewContact = (contactObj) => {
//     const { contacts } = this.state;
//     const dubble = contacts.find(
//       (element) =>
//         element.name.toLowerCase().trim() ===
//         contactObj.name.toLowerCase().trim()
//     );

//     dubble
//       ? alert("есть такое имя")
//       : this.setState({ contacts: [...this.state.contacts, contactObj] });
//   };

//   handleFind = (event) => {
//     const { value } = event.target;
//     this.setState({ filter: value });
//   };

//   deleteContact = (id) => {
//     this.setState((prev) => ({
//       contacts: prev.contacts.filter((el) => el.id !== id),
//     }));
//   };

//   render() {
//     const { contacts, filter } = this.state;
//     const { addNewContact, handleFind, deleteContact } = this;
//     return (
//       <div>
//         <h1>PhoneBook</h1>
//         <AddContact addNewContact={addNewContact} />
//         <h2>Contacts</h2>
//         <SearchFilter filter={filter} handleFind={handleFind} />
//         <ContactList>
//           <ContactElement
//             deleteContact={deleteContact}
//             contacts={contacts}
//             filter={filter}
//           />
//         </ContactList>
//       </div>
//     );
//   }
// }

// export default App;
