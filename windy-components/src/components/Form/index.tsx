import React from "react";

type FormProps = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      <input
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
        type="text"
        placeholder="Your Name"
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

export default Form;
