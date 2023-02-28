import { useEffect, useState } from "react";
import RaceForm from "./components/RaceForm/RaceForm";
import RacerForm from "./components/RacerForm/RacerForm";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import TournamentForm from "./components/TournamentForm/TournamentForm";
import "./App.css";
import {
  getRacerData,
  setRacerData,
  getTournamentData,
  setTournamentData,
  getRaceData,
  setRaceData
} from "./api";
import RacersList from "./components/RacersList/RacersList";

function App() {
  const tabsList = ["Racer Form", "Tournament Form", "Race Form"];
  const [racers, setRacers] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [races, setRaces] = useState([]);
  const [activeTab, setActiveTab] = useState("Racer Form");

  const renderTab = (tabId) => {
    setActiveTab(tabId);
  };

  const fetchRacers = async () => {
    try {
      const data = await getRacerData();
      setRacers(data);
    } catch (error) {
      console.log("fetchRacers error:", error);
    }
  };

  useEffect(() => {
    fetchRacers();
  }, []);

  const fetchTournaments = async () => {
    try {
      const data = await getTournamentData();
      setTournaments(data);
    } catch (error) {
      console.log("fetchTournaments error:", error);
    }
  };

  useEffect(() => {
    fetchTournaments();
  }, []);

  const fetchRaces = async () => {
    try {
      const data = await getRaceData();
      setRaces(data);
    } catch (error) {
      console.log("fetchRaces error:", error);
    }
  };

  useEffect(() => {
    fetchRaces();
  }, []);

  const handleRacerSubmit = (racer) => {
    const racersUpdated = [...racers, racer];
    setRacers(racersUpdated);
    setRacerData(racer);
  };

  const handleTournamentSubmit = (tournament) => {
    setTournamentData(tournament);
  };
  const handleRaceSubmit = (race) => {
    setRaceData(race);
  };
  return (
    <div className="app">
      <TabNavigation tabs={tabsList} renderTab={renderTab} />
      {activeTab === "Racer Form" && (
        <>
          <RacerForm handleSubmit={handleRacerSubmit} />
          <RacersList racers={racers} />
        </>
      )}
      {activeTab === "Tournament Form" && (
        <TournamentForm handleSubmit={handleTournamentSubmit} />
      )}
      {activeTab === "Race Form" && (
        <RaceForm
          handleSubmit={handleRaceSubmit}
          racers={racers}
          tournaments={tournaments}
        />
      )}
    </div>
  );
}

export default App;
