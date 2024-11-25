import { useState } from 'react';

const useEncounterManager = () => {
    const [monsters, setMonsters] = useState([]);
    const [activeEncounter, setActiveEncounter] = useState(null);

    const addMonster = (monster) => {
        const newMonster = {
            id: Date.now(), // temporary ID solution
            ...monster,
            currentHP: monster.maxHP,
            initiative: 0,
            conditions: [], // status effects like poisoned, stunned, etc.
            notes: '', // for DM notes about this specific monster
        };
        setMonsters(prev => [...prev, newMonster]);
    };

    const updateMonsterStat = (monsterId, stat, value) => {
        setMonsters(prev => prev.map(monster => 
            monster.id === monsterId 
                ? { ...monster, [stat]: value }
                : monster
        ));
    };

    const removeMonster = (monsterId) => {
        setMonsters(prev => prev.filter(monster => monster.id !== monsterId));
    };

    const setInitiative = (monsterId, initiative) => {
        updateMonsterStat(monsterId, 'initiative', initiative);
    };

    const sortByInitiative = () => {
        setMonsters(prev => [...prev].sort((a, b) => b.initiative - a.initiative));
    };

    const addCondition = (monsterId, condition) => {
        setMonsters(prev => prev.map(monster => 
            monster.id === monsterId 
                ? { ...monster, conditions: [...monster.conditions, condition] }
                : monster
        ));
    };

    const removeCondition = (monsterId, conditionToRemove) => {
        setMonsters(prev => prev.map(monster => 
            monster.id === monsterId 
                ? { 
                    ...monster, 
                    conditions: monster.conditions.filter(c => c !== conditionToRemove)
                }
                : monster
        ));
    };

    const updateNotes = (monsterId, notes) => {
        updateMonsterStat(monsterId, 'notes', notes);
    };

    return {
        monsters,
        activeEncounter,
        addMonster,
        updateMonsterStat,
        removeMonster,
        setInitiative,
        sortByInitiative,
        addCondition,
        removeCondition,
        updateNotes,
    };
};

export default useEncounterManager;
