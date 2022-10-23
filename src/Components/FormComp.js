import React, { useState } from "react";

const FormComp = () => {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    selectedCar: "",
    isActive: false
  });

  const onInputChange = (event) => {
    console.log(event.target.name)
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <h1>Form</h1>
      FirstName - {user.firstName} <br />
      LastName - {user.lastName}
      <form>
        <input
          type="text"
          placeholder="First Name"
          value={user.firstName}
          name="firstName"
          onChange={(event) => onInputChange(event)}
        />{" "}
        <br />
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={user.lastName}
          onChange={(event) => onInputChange(event)}
        />
        <input
          type="email"
          placeholder="Email"
          value={user.email}
          name="email"
          onChange={(event) => onInputChange(event)}
        />{" "}
        <br />
        <input
          type="password"
          placeholder="Password"
          value={user.password}
          name="password"
          onChange={(event) => onInputChange(event)}
        />{" "}
        <br />
        <div style={{ marginTop: "20px" }}>
          <select onChange={(event) => onInputChange(event)} name="selectedCar">
            <option value="none"> None</option>
            <option value="BMW"> BMW</option>
            <option value="Audi"> Audi</option>
            <option value="Jeep"> Jeep</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default FormComp;
