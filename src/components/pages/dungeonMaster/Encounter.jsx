import React, { useState } from "react";

function Encounter({ name, details, monsters }) {
  const [showDetails, setShowDetails] = useState(false);
  const [monsterList, setMonsterList] = useState(monsters);
  const [newMonster, setNewMonster] = useState({ name: "", hp: "", ac: "" });

  const handleButtonClick = () => {
    setShowDetails(!showDetails);
  };

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
    setMonsterList([...monsterList, newMonster]);
    setNewMonster({ name: "", hp: "", ac: "" });
  };

  return (
    <div>
      <h1>{name}</h1>
      <button onClick={handleButtonClick}>
        {showDetails ? "Hide Encounter" : "View Encounter"}
      </button>
      {showDetails && (
        <div className="encounter-details">
          <p>{details}</p>
          <h2>Monsters</h2>
          <ul>
            {monsterList.map((monster, index) => (
              <li key={index}>
                {monster.name} - HP:{" "}
                <input
                  type="number"
                  value={monster.hp}
                  onChange={(e) =>
                    handleMonsterChange(index, "hp", e.target.value)
                  }
                />
                , AC:{" "}
                <input
                  type="number"
                  value={monster.ac}
                  onChange={(e) =>
                    handleMonsterChange(index, "ac", e.target.value)
                  }
                />
              </li>
            ))}
          </ul>
          <h3>Add New Monster</h3>
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
          <button onClick={addMonster}>Add Monster</button>
        </div>
      )}
    </div>
  );
}

export default Encounter;
