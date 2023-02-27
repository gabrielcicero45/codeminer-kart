import React from "react";
import { useInput } from "../../hooks/useInput";

const TournamentForm = ({ handleSubmit }) => {
  const { value: name, handleInputChange: handleNameChange } = useInput("");
  return (
    <>
      <h2>Tournament Form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name: name,
          });
        }}
      >
        <label htmlFor="name">
          Name
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TournamentForm;
