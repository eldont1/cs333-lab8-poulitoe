import "./App.css";
import Contact from "./Contact.jsx";
import contacts from "./contacts.js";

function App() {
  console.log(contacts);
  return (
    <div>
      <h1>My Contacts</h1>
      <Contact
        name={contacts[0].name}
        phoneNumber={contacts[0].phoneNumber}
        email={contacts[0].email}
        avatar={contacts[0].avatar}
      />
      <Contact
        name={contacts[1].name}
        phoneNumber={contacts[1].phoneNumber}
        email={contacts[1].email}
        avatar={contacts[1].avatar}
      />
      <Contact
        name={contacts[2].name}
        phoneNumber={contacts[2].phoneNumber}
        email={contacts[2].email}
        avatar={contacts[2].avatar}
      />
    </div>
  );
}

export default App;