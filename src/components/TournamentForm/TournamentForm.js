import React from "react";
import { useInput } from "../../hooks/useInput";

const TournamentForm = ({ handleSubmit }) => {
  const { value: name, handleInputChange: handleNameChange } = useInput("");
  return (
    <>
      <h2>Tournament Form</h2>
      <form
        className="form"
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
            className="form__input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <button className="form__button" type="submit">Submit</button>
      </form>
    </>
  );
};

export default TournamentForm;
