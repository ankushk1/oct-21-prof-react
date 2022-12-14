import React from "react";
import { useForm } from "../utils/customHooks";
import ComponentB from "./ComponentB";

const ComponentA = ({ message }) => {
  const { values, onHandleChange, onHandleSubmit } = useForm();

  return (
    <div style={{marginTop: '60px'}}>
      <h2>Component A</h2>
      <form>
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
    </div>
  );
};

export default ComponentA;
