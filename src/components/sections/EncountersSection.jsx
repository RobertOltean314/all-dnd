import React, { useState, useEffect } from "react";
import Encounter from "../pages/dungeonMaster/Encounter";

function EncountersSection() {
  const [encounters, setEncounters] = useState([]);
  const [newEncounter, setNewEncounter] = useState({
    name: "",
    details: "",
    difficulty: "medium",
    totalXP: 0,
    status: "planning", // planning, active, completed
    monsters: [],
    initiative: [],
  });

  // Load encounters from localStorage on component mount
  useEffect(() => {
    const savedEncounters = localStorage.getItem('encounters');
    if (savedEncounters) {
      setEncounters(JSON.parse(savedEncounters));
    }
  }, []);

  // Save encounters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('encounters', JSON.stringify(encounters));
  }, [encounters]);

  const handleNewEncounterChange = (field, value) => {
    setNewEncounter({ ...newEncounter, [field]: value });
  };

  const calculateEncounterDifficulty = (monsters) => {
    const totalXP = monsters.reduce((sum, monster) => sum + (monster.xp || 0), 0);
    let difficulty = "easy";
    
    // Basic difficulty thresholds (can be adjusted based on party level)
    if (totalXP > 2000) difficulty = "deadly";
    else if (totalXP > 1200) difficulty = "hard";
    else if (totalXP > 600) difficulty = "medium";

    return { difficulty, totalXP };
  };

  const addEncounter = () => {
    const { difficulty, totalXP } = calculateEncounterDifficulty(newEncounter.monsters);
    const encounterWithDetails = {
      ...newEncounter,
      id: Date.now(),
      difficulty,
      totalXP,
      dateCreated: new Date().toISOString(),
    };
    
    setEncounters([...encounters, encounterWithDetails]);
    setNewEncounter({
      name: "",
      details: "",
      difficulty: "medium",
      totalXP: 0,
      status: "planning",
      monsters: [],
      initiative: [],
    });
  };

  const deleteEncounter = (encounterId) => {
    setEncounters(encounters.filter(enc => enc.id !== encounterId));
  };

  const updateEncounter = (encounterId, updatedData) => {
    setEncounters(encounters.map(enc => 
      enc.id === encounterId ? { ...enc, ...updatedData } : enc
    ));
  };

  const startEncounter = (encounterId) => {
    updateEncounter(encounterId, { status: "active" });
  };

  const completeEncounter = (encounterId) => {
    updateEncounter(encounterId, { status: "completed" });
  };

  return (
    <div className="encounters-section">
      <h1>Encounters</h1>
      <div className="encounter-creation">
        <h3>Create a new Encounter</h3>
        <div className="form-group">
          <input
            type="text"
            placeholder="Name"
            value={newEncounter.name}
            onChange={(e) => handleNewEncounterChange("name", e.target.value)}
            className="form-control"
          />
          <textarea
            placeholder="Details"
            value={newEncounter.details}
            onChange={(e) => handleNewEncounterChange("details", e.target.value)}
            className="form-control"
          />
          <button 
            onClick={addEncounter}
            disabled={!newEncounter.name}
            className="btn btn-primary"
          >
            Add Encounter
          </button>
        </div>
      </div>

      <div className="encounters-list">
        {encounters.map((encounter) => (
          <div key={encounter.id} className={`encounter-card ${encounter.status}`}>
            <Encounter
              {...encounter}
              onUpdate={(updatedData) => updateEncounter(encounter.id, updatedData)}
              onDelete={() => deleteEncounter(encounter.id)}
              onStart={() => startEncounter(encounter.id)}
              onComplete={() => completeEncounter(encounter.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default EncountersSection;
