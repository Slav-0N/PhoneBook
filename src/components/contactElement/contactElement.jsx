const ContactElement = ({ contacts, filter, deleteContact }) => {
  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    contacts.length > 0 &&
    filteredContacts().map((element) => (
      <li key={element.id}>
        <span>{element.name}</span> <span>{element.number}</span>
        <button onClick={() => deleteContact(element.id)}>Delete</button>
      </li>
    ))
  );
};

export default ContactElement;
