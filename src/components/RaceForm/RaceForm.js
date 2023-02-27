import React, { useState } from "react";
import { useInput } from "../../hooks/useInput";

const RaceForm = ({ handleSubmit, tournaments, racers }) => {
  const { value: tournament, handleInputChange: handleTournamentChange } =
    useInput("");
  const { value: place, handleInputChange: handlePlaceChange } = useInput("");
  const { value: date, handleInputChange: handleDateChange } = useInput("");
  const { value: racerId, handleInputChange: handleRacerIdChange } =
    useInput("");
  const { value: position, handleInputChange: handlePositionChange } =
    useInput("");

  const [placementsAttr, setPlacementsAttr] = useState([]);

  const handlePlacement = () => {
    const updatedPlacementAttr = [
      ...placementsAttr,
      {
        racer_id: racerId,
        position: position,
      },
    ];
    setPlacementsAttr(updatedPlacementAttr);
  };
  return (
    <div>
      <h2>Race Form</h2>
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit({
            tournament_id: tournament,
            place: place,
            date: date,
            placements_attributes: placementsAttr,
          });
        }}
      >
        <label htmlFor="tournament">
          Tournament
          <select
            className="form__input"
            name="tournament"
            id="tournament"
            onChange={handleTournamentChange}
          >
             <option value={""}>----------</option>
            {tournaments.map((tournament) => {
              return <option value={tournament.id}>{tournament.name}</option>;
            })}
          </select>
        </label>
        <label htmlFor="place">
          Race Place
          <input
            className="form__input"
            type="text"
            name="place"
            id="place"
            value={place}
            onChange={handlePlaceChange}
          />
        </label>
        <label htmlFor="date">
          Date
          <input
            className="form__input"
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={handleDateChange}
          />
        </label>
        <div>
          <label htmlFor="racerId">
            Racers
            <select
              className="form__input"
              name="racerId"
              id="racerId"
              onChange={handleRacerIdChange}
            > 
              <option value={""}>----------</option>
              {racers.map((racer) => {
                return <option value={racer.id}>{racer.name}</option>;
              })}
            </select>
          </label>
          <label htmlFor="position">
            Position
            <select
              className="form__input"
              name="position"
              id="position"
              onChange={handlePositionChange}
            >
              <option value={""}>----------</option>
              {racers.map((racer, index) => {
                return <option value={index+1}>{index + 1}º</option>;
              })}
            </select>
          </label>
          <button className="form__button" onClick={()=>{handlePlacement()}}>
            Confirm racer placement
          </button>
        </div>
        <button className="form__button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default RaceForm;
