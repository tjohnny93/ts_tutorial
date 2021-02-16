import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AllReducerType } from "./store";
import { fetchPokemonData } from "./actions/Pokemon";

function App() {
  const pokemonReducer = useSelector(
    (state: AllReducerType) => state.PokemonReducer
  );
  const [pokemonName, setPokemonName] = useState("");
  const dispatch = useDispatch();

  const handlePokemonName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPokemonName(event.target.value);

  const searchButton = () => {
    dispatch(fetchPokemonData(pokemonName));
  };

  return (
    <div>
      <input value={pokemonName} onChange={handlePokemonName} />
      <button onClick={searchButton}>포켓몬찾기</button>
      {pokemonReducer.success && (
        <div>
          <p>{pokemonName}</p>
          {pokemonReducer.pokemon?.abilities?.map((ability, idx: number) => {
            return (
              <div key={idx}>
                <p>{ability.ability.name}</p>
                <p>{ability.slot}</p>
              </div>
            );
          })}
          <img
            src={pokemonReducer.pokemon?.sprites?.front_default}
            alt={pokemonName}
          />
        </div>
      )}
    </div>
  );
}

export default App;
