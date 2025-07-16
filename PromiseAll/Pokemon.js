import React, { useState, useEffect } from 'react';
const INITIAL_MAPPING_OBJ = {}; //ability2 : ["","","",""]

function Pokemon() {
  const [mappingObj, setMappingObj] = useState(INITIAL_MAPPING_OBJ);
  const [abilities, setAbilities] = useState([]);

  async function fetchData(url) {
    try {
      const resp = await fetch(url);
      if (!resp.ok) {
        throw new Error('Fetching data failed from : ' + url);
      }
      const data = await resp.json();
      return data;
    } catch (err) {
      console.error(err);
    }
  }

  const dropdownChangeHandler = (e) => {
    const selName = e.target.value;
    // console.log(selName);
    setAbilities(mappingObj[selName]);
  };
  // console.log('Pokemon');

  useEffect(() => {
    async function fetchAll() {
      const namesResp = await fetchData(
        'https://pokeapi.co/api/v2/pokemon?limit=10'
      );
      const obj = await buildAbilityMap(namesResp.results);
      setMappingObj(obj);
      const ability = Object.keys(obj);
      console.log(obj[ability[0]]);
      setAbilities(obj[ability[0]]);
    }

    async function buildAbilityMap(pokemons) {
      const map = {};
      const promises = pokemons.map(async (el) => {
        const pName = el.name;
        const abilitiesResp = await fetchData(el.url);
        const abilities = abilitiesResp.abilities;

        abilities.forEach((item) => {
          const { name: abilityName, url } = item.ability;
          if (map?.[abilityName]) {
            map[abilityName].indexOf(pName) < 0 && map[abilityName].push(pName);
          } else {
            map[abilityName] = [pName];
          }
        });
      });
      console.log(map);
      await Promise.all(promises);
      console.log(map);

      return map;
    }

    fetchAll();
  }, []);

  const dropdownNames = Object.keys(mappingObj).map((el) => (
    <option key={el} value={el}>
      {el}
    </option>
  ));
  return (
    <>
      <select onChange={dropdownChangeHandler}>{dropdownNames} </select>
      <input
        className="text--ablities"
        value={abilities.join(' || ')}
        readOnly
      />
    </>
  );
}

export default Pokemon;
