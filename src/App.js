import ContactElement from "./components/contactElement/contactElement";
import SearchFilter from "./components/searchFilter/searchFilter";
import AddContact from "./components/addContact/addContact";
import ContactList from "./components/contactList/contactList";
import { useEffect } from "react";
import { fetchAll } from "./components/redux/operations";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "./components/redux/filterSlice";
import { deleteOneContact, addOneContact } from "./components/redux/operations";

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter);
  const isLoading = useSelector((state) => state.contacts.isLoading);
  const error = useSelector((state) => state.contacts.error);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  //

  const addNewContact = (contactObj) => {
    const dubble = contacts.find(
      (element) =>
        element.name.toLowerCase().trim() ===
        contactObj.name.toLowerCase().trim()
    );

    dubble ? alert("есть такое имя") : dispatch(addOneContact(contactObj));
  };

  const handleFind = (event) => {
    const { value } = event.target;
    dispatch(addFilter(value));
  };

  const deleteContact = (id) => {
    dispatch(deleteOneContact(id));
  };

  return (
    <div>
      <h1>PhoneBook</h1>
      <AddContact addNewContact={addNewContact} />
      <h2>Contacts</h2>
      <SearchFilter filter={filter} handleFind={handleFind} />

      <ContactList>
        {isLoading && !error && <div>Loading...</div>}
        <ContactElement
          deleteContact={deleteContact}
          contacts={contacts}
          filter={filter}
        />
      </ContactList>
    </div>
  );
};

export default App;
