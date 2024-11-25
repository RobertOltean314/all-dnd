import React, { useState, useEffect } from "react";
import Encounter from "../pages/dungeonMaster/Encounter";
import { FaPlus, FaArrowLeft } from "react-icons/fa";

function EncountersSection() {
  const [encounters, setEncounters] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [newEncounter, setNewEncounter] = useState({
    name: "",
    details: "",
    difficulty: "medium",
    totalXP: 0,
    status: "planning",
    monsters: [],
    initiative: [],
  });

  // Load encounters from localStorage on component mount
  useEffect(() => {
    const savedEncounters = localStorage.getItem("encounters");
    if (savedEncounters) {
      setEncounters(JSON.parse(savedEncounters));
    }
  }, []);

  // Save encounters to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("encounters", JSON.stringify(encounters));
  }, [encounters]);

  const handleNewEncounterChange = (field, value) => {
    setNewEncounter({ ...newEncounter, [field]: value });
  };

  const calculateEncounterDifficulty = (monsters) => {
    const totalXP = monsters.reduce(
      (sum, monster) => sum + (monster.xp || 0),
      0
    );
    let difficulty = "easy";

    // Basic difficulty thresholds (can be adjusted based on party level)
    if (totalXP > 2000) difficulty = "deadly";
    else if (totalXP > 1200) difficulty = "hard";
    else if (totalXP > 600) difficulty = "medium";

    return { difficulty, totalXP };
  };

  const addEncounter = () => {
    const { difficulty, totalXP } = calculateEncounterDifficulty(
      newEncounter.monsters
    );
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
    setIsCreating(false);
  };

  const deleteEncounter = (encounterId) => {
    setEncounters(encounters.filter((enc) => enc.id !== encounterId));
  };

  const updateEncounter = (encounterId, updatedData) => {
    setEncounters(
      encounters.map((enc) =>
        enc.id === encounterId ? { ...enc, ...updatedData } : enc
      )
    );
  };

  const startEncounter = (encounterId) => {
    updateEncounter(encounterId, { status: "active" });
  };

  const completeEncounter = (encounterId) => {
    updateEncounter(encounterId, { status: "completed" });
  };

  const renderEncountersList = () => (
    <>
      <div className="encounters-header">
        <h1>Encounters</h1>
        <button onClick={() => setIsCreating(true)} className="btn btn-primary">
          <FaPlus /> Create New Encounter
        </button>
      </div>
      <div className="encounters-list">
        {encounters.map((encounter) => (
          <div
            key={encounter.id}
            className={`encounter-card ${encounter.status}`}
          >
            <Encounter
              {...encounter}
              onUpdate={(updatedData) =>
                updateEncounter(encounter.id, updatedData)
              }
              onDelete={() => deleteEncounter(encounter.id)}
              onStart={() => startEncounter(encounter.id)}
              onComplete={() => completeEncounter(encounter.id)}
            />
          </div>
        ))}
      </div>
    </>
  );

  const renderEncounterCreation = () => (
    <>
      <div className="encounters-header">
        <button
          onClick={() => setIsCreating(false)}
          className="btn btn-secondary"
        >
          <FaArrowLeft /> Back to Encounters
        </button>
        <h1>Create New Encounter</h1>
      </div>
      <div className="encounter-creation">
        <div className="form-group">
          <input
            type="text"
            placeholder="Encounter Name"
            value={newEncounter.name}
            onChange={(e) => handleNewEncounterChange("name", e.target.value)}
            className="form-control"
          />
          <textarea
            placeholder="Encounter Details"
            value={newEncounter.details}
            onChange={(e) =>
              handleNewEncounterChange("details", e.target.value)
            }
            className="form-control"
          />
          <button
            onClick={addEncounter}
            disabled={!newEncounter.name}
            className="btn btn-primary"
          >
            Create Encounter
          </button>
        </div>
      </div>
    </>
  );

  return (
    <div className="encounters-section">
      {isCreating ? renderEncounterCreation() : renderEncountersList()}
    </div>
  );
}

export default EncountersSection;
