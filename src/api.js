const baseUrl = "http://localhost:3000/";

export const getRacerData = async () => {
  try {
    const response = await fetch(`${baseUrl}racers`);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const setRacerData = async (racer) => {
  console.log(JSON.stringify(racer));

  fetch(`${baseUrl}racers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(racer),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("error: ", error));
};

export const getTournamentData = async () => {
  try {
    const response = await fetch(`${baseUrl}tournaments`);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const setTournamentData = async (tournament) => {
  console.log(JSON.stringify(tournament));

  fetch(`${baseUrl}tournaments`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tournament),
  })
    .then((response) => response.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.log("error: ", error));
};

export const getRaceData = async () => {
  try {
    const response = await fetch(`${baseUrl}races`);
    return await response.json();
  } catch (error) {
    console.log("error: ", error);
  }
};

export const setRaceData = async (race) => {
  console.log(JSON.stringify(race));

  fetch(`${baseUrl}races`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(race),
  })
    .then((response) => response.json())
    .then((data) => console.log("data", data))
    .catch((error) => console.log("error: ", error));
};
