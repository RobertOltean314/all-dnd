import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './DungeonMasterEncounters.css';
import AddMonsterModal from './AddMonsterModal';

// Components for different sections
const MonsterCard = ({ monster, onUpdate, onDelete }) => {
  return (
    <div className="monster-card">
      <div className="monster-header">
        <h3>{monster.name}</h3>
        {monster.isLegendary && <span className="legendary-badge">Legendary</span>}
      </div>
      <div className="monster-stats">
        <div className="stat">
          <label>HP:</label>
          <input 
            type="number" 
            value={monster.hp} 
            onChange={(e) => onUpdate({ ...monster, hp: parseInt(e.target.value) })}
          />
        </div>
        <div className="stat">
          <label>AC:</label>
          <span>{monster.ac}</span>
        </div>
        <div className="stat">
          <label>Initiative:</label>
          <span>{monster.initiative}</span>
        </div>
      </div>
      <div className="monster-abilities">
        <h4>Abilities</h4>
        <ul>
          {monster.abilities.map((ability, index) => (
            <li key={index}>{ability}</li>
          ))}
        </ul>
      </div>
      {monster.isLegendary && (
        <div className="legendary-actions">
          <h4>Legendary Actions</h4>
          <ul>
            {monster.legendaryActions.map((action, index) => (
              <li key={index}>{action}</li>
            ))}
          </ul>
        </div>
      )}
      <button className="delete-btn" onClick={() => onDelete(monster.id)}>Remove</button>
    </div>
  );
};

MonsterCard.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    hp: PropTypes.number.isRequired,
    ac: PropTypes.number.isRequired,
    initiative: PropTypes.number.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.string).isRequired,
    isLegendary: PropTypes.bool.isRequired,
    legendaryActions: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

const PlayerCard = ({ player, onUpdate }) => {
  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <div className="player-stats">
        <div className="stat">
          <label>HP:</label>
          <input 
            type="number" 
            value={player.currentHp} 
            onChange={(e) => onUpdate({ ...player, currentHp: parseInt(e.target.value) })}
          />
          <span>/ {player.maxHp}</span>
        </div>
        <div className="stat">
          <label>AC:</label>
          <span>{player.ac}</span>
        </div>
        <div className="stat">
          <label>Initiative:</label>
          <span>{player.initiative}</span>
        </div>
      </div>
    </div>
  );
};

PlayerCard.propTypes = {
  player: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    currentHp: PropTypes.number.isRequired,
    maxHp: PropTypes.number.isRequired,
    ac: PropTypes.number.isRequired,
    initiative: PropTypes.number.isRequired
  }).isRequired,
  onUpdate: PropTypes.func.isRequired
};

const DungeonMasterEncounters = () => {
  const [encounter, setEncounter] = useState({
    monsters: [],
    players: []
  });

  const [initiativeOrder, setInitiativeOrder] = useState([]);
  const [currentTurn, setCurrentTurn] = useState(0);
  const [isAddMonsterModalOpen, setIsAddMonsterModalOpen] = useState(false);

  const addMonster = (newMonster) => {
    setEncounter(prev => ({
      ...prev,
      monsters: [...prev.monsters, newMonster]
    }));
  };

  const updateMonster = (updatedMonster) => {
    setEncounter(prev => ({
      ...prev,
      monsters: prev.monsters.map(monster => 
        monster.id === updatedMonster.id ? updatedMonster : monster
      )
    }));
  };

  const deleteMonster = (monsterId) => {
    setEncounter(prev => ({
      ...prev,
      monsters: prev.monsters.filter(monster => monster.id !== monsterId)
    }));
  };

  const updatePlayer = (updatedPlayer) => {
    setEncounter(prev => ({
      ...prev,
      players: prev.players.map(player => 
        player.id === updatedPlayer.id ? updatedPlayer : player
      )
    }));
  };

  const startCombat = () => {
    const allParticipants = [
      ...encounter.monsters,
      ...encounter.players
    ].sort((a, b) => b.initiative - a.initiative);
    
    setInitiativeOrder(allParticipants);
    setCurrentTurn(0);
  };

  const nextTurn = () => {
    setCurrentTurn((prev) => (prev + 1) % initiativeOrder.length);
  };

  return (
    <div className="encounters-page">
      <div className="encounters-header">
        <h1>Combat Encounter</h1>
        <button onClick={startCombat}>Start Combat</button>
      </div>

      <div className="encounter-grid">
        <div className="monsters-section">
          <h2>Monsters</h2>
          <button 
            className="add-monster-btn" 
            onClick={() => setIsAddMonsterModalOpen(true)}
          >
            Add Monster
          </button>
          <div className="monsters-list">
            {encounter.monsters.map(monster => (
              <MonsterCard
                key={monster.id}
                monster={monster}
                onUpdate={updateMonster}
                onDelete={deleteMonster}
              />
            ))}
          </div>
        </div>

        <div className="players-section">
          <h2>Players</h2>
          <div className="players-list">
            {encounter.players.map(player => (
              <PlayerCard
                key={player.id}
                player={player}
                onUpdate={updatePlayer}
              />
            ))}
          </div>
        </div>
      </div>

      {initiativeOrder.length > 0 && (
        <div className="initiative-tracker">
          <h2>Initiative Order</h2>
          <div className="initiative-list">
            {initiativeOrder.map((participant, index) => (
              <div 
                key={participant.id} 
                className={`initiative-item ${index === currentTurn ? 'current-turn' : ''}`}
              >
                {participant.name} (Initiative: {participant.initiative})
              </div>
            ))}
          </div>
          <button onClick={nextTurn}>Next Turn</button>
        </div>
      )}
      <AddMonsterModal
        isOpen={isAddMonsterModalOpen}
        onClose={() => setIsAddMonsterModalOpen(false)}
        onAdd={addMonster}
      />
    </div>
  );
};

export default DungeonMasterEncounters;
