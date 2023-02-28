import React from "react";
import { useInput } from "../../hooks/useInput";

const RacerForm = ({ handleSubmit }) => {
  const { value: name, handleInputChange: handleNameChange } = useInput("");
  const { value: bornAt, handleInputChange: handleBornAtChange } = useInput("");
  const { value: imageUrl, handleInputChange: handleImageUrlChange } =
    useInput("");

  return (
    <>
      <h2>Racer Form</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            name: name,
            born_at: bornAt,
            image_url: imageUrl,
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
        <label htmlFor="born_at">
          Birth date
          <input
            className="form__input"
            type="date"
            name="born_at"
            id="born_at"
            value={bornAt}
            onChange={handleBornAtChange}
          />
        </label>
        <label htmlFor="image_url">
          Image Url
          <input
            className="form__input"
            type="text"
            name="image_url"
            id="image_url"
            value={imageUrl}
            onChange={handleImageUrlChange}
          />
        </label>
        <button className="form__button" type="submit">Submit</button>
      </form>
    </>
    
  );
};

export default RacerForm;
