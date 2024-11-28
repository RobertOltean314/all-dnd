import React, { useState, useEffect } from "react";
import { FaDiceD20, FaSkull, FaPlay, FaCheck } from 'react-icons/fa';

function Encounter({ 
  id, 
  name, 
  details, 
  monsters, 
  status,
  difficulty,
  totalXP,
  initiative,
  onUpdate,
  onDelete,
  onStart,
  onComplete
}) {
  const [showDetails, setShowDetails] = useState(false);
  const [monsterList, setMonsterList] = useState(monsters);
  const [initiativeOrder, setInitiativeOrder] = useState(initiative);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [newMonster, setNewMonster] = useState({ 
    name: "", 
    hp: "", 
    maxHp: "",
    ac: "",
    initiative: "",
    xp: "",
    condition: "",
  });

  useEffect(() => {
    onUpdate({ monsters: monsterList, initiative: initiativeOrder });
  }, [monsterList, initiativeOrder]);

  const handleMonsterChange = (index, field, value) => {
    const updatedMonsters = monsterList.map((monster, i) =>
      i === index ? { ...monster, [field]: value } : monster
    );
    setMonsterList(updatedMonsters);
  };

  const handleNewMonsterChange = (field, value) => {
    setNewMonster({ ...newMonster, [field]: value });
  };

  const addMonster = () => {
    const monsterWithId = {
      ...newMonster,
      id: Date.now(),
      maxHp: newMonster.hp,
      condition: "",
    };
    setMonsterList([...monsterList, monsterWithId]);
    setNewMonster({ 
      name: "", 
      hp: "", 
      maxHp: "",
      ac: "",
      initiative: "",
      xp: "",
      condition: "",
    });
  };

  const removeMonster = (monsterId) => {
    setMonsterList(monsterList.filter(m => m.id !== monsterId));
    setInitiativeOrder(initiativeOrder.filter(i => i.id !== monsterId));
  };

  const rollInitiative = () => {
    const order = monsterList.map(monster => ({
      id: monster.id,
      name: monster.name,
      initiative: monster.initiative || Math.floor(Math.random() * 20) + 1
    })).sort((a, b) => b.initiative - a.initiative);
    
    setInitiativeOrder(order);
    setCurrentTurn(0);
  };

  const nextTurn = () => {
    setCurrentTurn((currentTurn + 1) % initiativeOrder.length);
  };

  const conditions = [
    "",
    "Blinded",
    "Charmed",
    "Deafened",
    "Frightened",
    "Grappled",
    "Incapacitated",
    "Invisible",
    "Paralyzed",
    "Petrified",
    "Poisoned",
    "Prone",
    "Restrained",
    "Stunned",
    "Unconscious"
  ];

  return (
    <div className="encounter-container">
      <div className="encounter-header">
        <h2>{name}</h2>
        <div className="encounter-stats">
          <span className={`difficulty ${difficulty}`}>{difficulty}</span>
          <span className="xp">XP: {totalXP}</span>
        </div>
        <div className="encounter-actions">
          {status === "planning" && (
            <button onClick={onStart} className="btn btn-success">
              <FaPlay /> Start
            </button>
          )}
          {status === "active" && (
            <button onClick={onComplete} className="btn btn-primary">
              <FaCheck /> Complete
            </button>
          )}
          <button onClick={() => setShowDetails(!showDetails)} className="btn btn-info">
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          <button onClick={onDelete} className="btn btn-danger">
            <FaSkull /> Delete
          </button>
        </div>
      </div>

      {showDetails && (
        <div className="encounter-details">
          <p className="encounter-description">{details}</p>
          
          {status === "active" && (
            <div className="initiative-tracker">
              <h3>Initiative Order</h3>
              <button onClick={rollInitiative} className="btn btn-primary">
                <FaDiceD20 /> Roll Initiative
              </button>
              {initiativeOrder.length > 0 && (
                <>
                  <button onClick={nextTurn} className="btn btn-secondary">
                    Next Turn
                  </button>
                  <div className="initiative-list">
                    {initiativeOrder.map((entry, index) => (
                      <div 
                        key={entry.id}
                        className={`initiative-entry ${index === currentTurn ? 'current-turn' : ''}`}
                      >
                        <span className="initiative-roll">{entry.initiative}</span>
                        <span className="initiative-name">{entry.name}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          <div className="monsters-section">
            <h3>Monsters</h3>
            <div className="monster-list">
              {monsterList.map((monster, index) => (
                <div key={monster.id} className="monster-card">
                  <div className="monster-header">
                    <h4>{monster.name}</h4>
                    <button 
                      onClick={() => removeMonster(monster.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="monster-stats">
                    <div className="stat-group">
                      <label>HP:</label>
                      <input
                        type="number"
                        value={monster.hp}
                        onChange={(e) => handleMonsterChange(index, "hp", e.target.value)}
                        className={`hp-input ${parseInt(monster.hp) <= parseInt(monster.maxHp) / 2 ? 'low-hp' : ''}`}
                      />
                      /{monster.maxHp}
                    </div>
                    <div className="stat-group">
                      <label>AC:</label>
                      <input
                        type="number"
                        value={monster.ac}
                        onChange={(e) => handleMonsterChange(index, "ac", e.target.value)}
                      />
                    </div>
                    <div className="stat-group">
                      <label>Initiative:</label>
                      <input
                        type="number"
                        value={monster.initiative}
                        onChange={(e) => handleMonsterChange(index, "initiative", e.target.value)}
                      />
                    </div>
                    <div className="stat-group">
                      <label>Condition:</label>
                      <select
                        value={monster.condition || ""}
                        onChange={(e) => handleMonsterChange(index, "condition", e.target.value)}
                        className={`condition-select ${monster.condition ? 'has-condition' : ''}`}
                      >
                        {conditions.map(condition => (
                          <option key={condition} value={condition}>
                            {condition || "None"}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="add-monster-form">
              <h4>Add Monster</h4>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  value={newMonster.name}
                  onChange={(e) => handleNewMonsterChange("name", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="HP"
                  value={newMonster.hp}
                  onChange={(e) => handleNewMonsterChange("hp", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="AC"
                  value={newMonster.ac}
                  onChange={(e) => handleNewMonsterChange("ac", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Initiative"
                  value={newMonster.initiative}
                  onChange={(e) => handleNewMonsterChange("initiative", e.target.value)}
                />
                <input
                  type="number"
                  placeholder="XP"
                  value={newMonster.xp}
                  onChange={(e) => handleNewMonsterChange("xp", e.target.value)}
                />
                <button 
                  onClick={addMonster}
                  disabled={!newMonster.name || !newMonster.hp}
                  className="btn btn-primary"
                >
                  Add Monster
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Encounter;
