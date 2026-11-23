import "./App.css";
import Contact from "./Contact.jsx";
import contacts from "./contacts.js";

function createContact(contact) {
  return (
    <Contact
      key={contact.id}
      name={contact.name}
      phoneNumber={contact.phoneNumber}
      email={contact.email}
      avatar={contact.avatar}
    />
  );
}

function App() {
  const names = contacts.map(function (contact) {
    return contact.name;
  });
  console.log("NAMES: " + names);
  console.log(contacts);
  return (
    <div>
      <h1>My Contacts</h1>
      {contacts.map(createContact)}
    </div>
  );
}

export default App;