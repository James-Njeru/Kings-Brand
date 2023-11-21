import React, { useState } from "react";
import loginImg from "../assets/Girl-and-boy-sitting-with-laptop.svg";
import logo from "../assets/logo.svg";
import FormInputs from "../components/FormInputs";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern:
        "^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex">
      <div className="bg-bgcolor">
        <p className="text-[37px] text-magenta">You Order,</p>
        <p className="text-[37px] text-magenta">We Deliver</p>
        <img src={loginImg} alt="img" />
      </div>

      <div className="flex flex-col p-[25px] items-center">
        <img src={logo} alt="logo" className="w-[165px] h-[165px] mb-4" />
        <h1 className="mb-4">Welcome Back,</h1>
        <p className="mb-4">Sign in to continue to King’s Brand Shop</p>

        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <div className="flex flex-row justify-between">
            <input type="checkbox" />
            Remember Me
            <a href="">Forgot Password?</a>
          </div>

          <button
            type="submit"
            className="bg-magenta p-2 my-4 rounded-md text-white"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-row justify-between">
          <p>Don’t have an Account?</p>
          <a href="">Create Account</a>
        </div>
      </div>
    </div>
  );
}

export default Login;
