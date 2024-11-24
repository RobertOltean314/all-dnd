import React, { useState } from "react";
import Encounter from "../pages/dungeonMaster/Encounter";

function EncountersSection() {
  const [encounters, setEncounters] = useState([]);
  const [newEncounter, setNewEncounter] = useState({
    name: "",
    details: "",
    monsters: [],
  });

  const handleNewEncounterChange = (field, value) => {
    setNewEncounter({ ...newEncounter, [field]: value });
  };

  const addEncounter = () => {
    setEncounters([...encounters, newEncounter]);
    setNewEncounter({ name: "", details: "", monsters: [] });
  };

  return (
    <div>
      <h1>Encounters Section</h1>
      <h3>Create a new Encounter</h3>
      <input
        type="text"
        placeholder="Name"
        value={newEncounter.name}
        onChange={(e) => handleNewEncounterChange("name", e.target.value)}
      />
      <input
        type="text"
        placeholder="Details"
        value={newEncounter.details}
        onChange={(e) => handleNewEncounterChange("details", e.target.value)}
      />
      <button onClick={addEncounter}>Add Encounter</button>
      <ul>
        {encounters.map((encounter, index) => (
          <li key={index}>
            <Encounter
              name={encounter.name}
              details={encounter.details}
              monsters={encounter.monsters}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EncountersSection;
