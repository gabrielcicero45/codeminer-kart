import React from "react";
import Racer from "../Racer/Racer";

const RacersList = ({ racers }) => {
  return (
    <>        
      {racers.map((racer) => {
        const bornAt = racer.born_at.split('-')
        return (
          <Racer key={racer.id} name={racer.name} bornAt={`${bornAt[2]}/${bornAt[1]}/${bornAt[0]}`} imageUrl={racer.image_url} />
        );
      })}
    </>
  );
};

export default RacersList;
