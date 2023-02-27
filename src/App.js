import { useEffect, useState } from "react";
import RacerForm from "./components/RacerForm/RacerForm";
import TabNavigation from "./components/TabNavigation/TabNavigation";
import "./App.css";
import toad from "./assets/toad.png";
import { getRacerData, setRacerData } from "./api";


function App() {
  const tabsList = ["Racer Form", "Tournament Form", "Race Form"];
  const [racers, setRacers] = useState([]);
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

  const handleRacerSubmit = (racer) => {
    const racersUpdated = [...racers, racer];
    setRacers(racersUpdated);
    setRacerData(racer);
  };
  return (
    <div className="App">
      <img className="App__image" src={toad} alt="Toad in a kart" />
      <TabNavigation tabs={tabsList} renderTab={renderTab} />
      {activeTab === "Racer Form" && (
        <RacerForm handleSubmit={handleRacerSubmit} />
      )}
    </div>
  );
}

export default App;
