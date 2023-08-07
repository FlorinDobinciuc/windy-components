import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Form from "./components/Form";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Button variant="primary">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Card title="Card Title" content="This is some content for the card." />
      <Form
        onSubmit={(event) => {
          event.preventDefault();
          // Handle form submission here...
        }}
      />
      <ContactForm />
    </div>
  );
}

export default App;
