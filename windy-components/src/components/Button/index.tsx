import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

const Button: React.FC<ButtonProps> = ({ children, variant = "primary" }) => {
  const buttonClass =
    variant === "primary"
      ? "bg-green-500 text-white px-6 py-2 rounded hover:bg-green-400 active:shadow-lg"
      : "bg-gray-500 text-white px-4 py-2 rounded";

  return <button className={buttonClass}>Click me</button>;
};

export default Button;
