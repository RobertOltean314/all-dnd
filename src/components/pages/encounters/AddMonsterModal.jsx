import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './AddMonsterModal.css';

const AddMonsterModal = ({ isOpen, onClose, onAdd }) => {
  const [monster, setMonster] = useState({
    name: '',
    hp: 0,
    ac: 0,
    initiative: 0,
    abilities: [''],
    isLegendary: false,
    legendaryActions: ['']
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMonster = {
      ...monster,
      id: `monster-${Date.now()}`,
      abilities: monster.abilities.filter(ability => ability.trim() !== ''),
      legendaryActions: monster.isLegendary 
        ? monster.legendaryActions.filter(action => action.trim() !== '')
        : []
    };
    onAdd(newMonster);
    onClose();
  };

  const addAbility = () => {
    setMonster(prev => ({
      ...prev,
      abilities: [...prev.abilities, '']
    }));
  };

  const updateAbility = (index, value) => {
    setMonster(prev => ({
      ...prev,
      abilities: prev.abilities.map((ability, i) => 
        i === index ? value : ability
      )
    }));
  };

  const addLegendaryAction = () => {
    setMonster(prev => ({
      ...prev,
      legendaryActions: [...prev.legendaryActions, '']
    }));
  };

  const updateLegendaryAction = (index, value) => {
    setMonster(prev => ({
      ...prev,
      legendaryActions: prev.legendaryActions.map((action, i) => 
        i === index ? value : action
      )
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Add New Monster</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={monster.name}
              onChange={(e) => setMonster(prev => ({ ...prev, name: e.target.value }))}
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>HP:</label>
              <input
                type="number"
                value={monster.hp}
                onChange={(e) => setMonster(prev => ({ ...prev, hp: parseInt(e.target.value) }))}
                required
              />
            </div>

            <div className="form-group">
              <label>AC:</label>
              <input
                type="number"
                value={monster.ac}
                onChange={(e) => setMonster(prev => ({ ...prev, ac: parseInt(e.target.value) }))}
                required
              />
            </div>

            <div className="form-group">
              <label>Initiative:</label>
              <input
                type="number"
                value={monster.initiative}
                onChange={(e) => setMonster(prev => ({ ...prev, initiative: parseInt(e.target.value) }))}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Abilities:</label>
            {monster.abilities.map((ability, index) => (
              <div key={index} className="ability-input">
                <input
                  type="text"
                  value={ability}
                  onChange={(e) => updateAbility(index, e.target.value)}
                  placeholder="Enter ability"
                />
                {index === monster.abilities.length - 1 && (
                  <button type="button" onClick={addAbility} className="add-btn">
                    +
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="form-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={monster.isLegendary}
                onChange={(e) => setMonster(prev => ({ ...prev, isLegendary: e.target.checked }))}
              />
              Legendary Monster
            </label>
          </div>

          {monster.isLegendary && (
            <div className="form-group">
              <label>Legendary Actions:</label>
              {monster.legendaryActions.map((action, index) => (
                <div key={index} className="ability-input">
                  <input
                    type="text"
                    value={action}
                    onChange={(e) => updateLegendaryAction(index, e.target.value)}
                    placeholder="Enter legendary action"
                  />
                  {index === monster.legendaryActions.length - 1 && (
                    <button type="button" onClick={addLegendaryAction} className="add-btn">
                      +
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="modal-actions">
            <button type="submit">Add Monster</button>
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddMonsterModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired
};

export default AddMonsterModal;
