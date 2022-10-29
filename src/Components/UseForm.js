import React from "react";
import { useForm } from "../utils/customHooks";

const UseForm = () => {
  const { values, onHandleChange, onHandleSubmit } = useForm();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={values.firstName}
          name="firstName"
          onChange={(event) => onHandleChange(event)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={values.lastName}
          onChange={(event) => onHandleChange(event)}
        />
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          name="email"
          onChange={(event) => onHandleChange(event)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={values.password}
          name="password"
          onChange={(event) => onHandleChange(event)}
        />{" "}
        <br />
      </form>
      <button onClick={()=> onHandleSubmit('signup')}> Submit</button>
    </div>
  );
};

export default UseForm;
