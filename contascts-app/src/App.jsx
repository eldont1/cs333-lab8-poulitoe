import "./App.css";
import Contact from "./Contact.jsx";

function App() {
  return (
    <div>
      <h1>My Contacts</h1>
      <Contact name="Luke Kennard" phoneNumber="541-555-0101" email="lukekennard@example.com" avatar="https://i.pravatar.cc/150?img=4" />
      <Contact name="Gopher Thompson" phoneNumber="513-623-0054" email="gophert@example.com" avatar="https://i.pravatar.cc/150?img=3" />
      <Contact name="Bob Cobson" phoneNumber="672-011-8891" email="bobbycobby@example.com" avatar="https://i.pravatar.cc/150?img=1" />
    </div>
  );
}

export default App;