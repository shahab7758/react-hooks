import React, { useState } from "react";
const HookForm = () => {
  const [name, setname] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <form
        onClick={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          value={name.firstName}
          placeholder="first name"
          onChange={(e) => setname({ ...name, firstName: e.target.value })}
        />
        <input
          type="text"
          value={name.lastName}
          placeholder="last name"
          onChange={(e) => setname({ ...name, lastName: e.target.value })}
        />

        <button type="submit">Submit</button>
        <h2>first name - {name.firstName}</h2>
        <h2>last name - {name.lastName} </h2>
        <h4>{JSON.stringify(name)}</h4>
      </form>
    </div>
  );
};

export default HookForm;
