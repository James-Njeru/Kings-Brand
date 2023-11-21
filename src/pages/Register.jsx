import React, { useState } from "react";
import registerImg from "../assets/Girl-and-boy-sitting-with-laptop.svg";
import logo from "../assets/logo.svg";
import FormInputs from "../components/FormInputs";

function Register() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "firstname",
      type: "text",
      placeholder: "First Name",
      errorMessage: "It should be a valid name",
      label: "First Name",
      required: true,
    },
    {
      id: 2,
      name: "lastname",
      type: "text",
      placeholder: "Last Name",
      errorMessage: "It should be a valid name",
      label: "Last Name",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email",
      label: "Email",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "phone",
      placeholder: "Phone Number",
      errorMessage: "It should be a valid phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 5,
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
    {
      id: 6,
      name: "confirmpassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      label: "Confirm Password",
      pattern: values.password,
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
        <img src={registerImg} alt="img" />
      </div>

      <div className="flex flex-col p-[25px] items-center">
        <img src={logo} alt="logo" className="w-[165px] h-[165px] mb-4" />
        <h1 className="mb-4">Welcome to King’s Brand</h1>
        <p className="mb-4">
          Sign up with us, Next time you shop with us, log in for faster
          checkout
        </p>

        <form onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <FormInputs
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <button
            type="submit"
            className="bg-magenta p-2 my-4 rounded-md text-white"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-row justify-between">
          <p>Already have an Account?</p>
          <a href="">Log In</a>
        </div>
      </div>
    </div>
  );
}

export default Register;
