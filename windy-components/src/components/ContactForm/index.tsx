import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here...
    console.log({ name, email, message });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        type="text"
        placeholder="Your Name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        type="email"
        placeholder="Your Email"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        placeholder="Your Message"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-400 active:shadow-lg w-full"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
