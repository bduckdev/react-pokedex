import { useState, useEffect } from "react";
import Sprite from "./Sprite.jsx";
import PokemonInfo from "./PokemonInfo.jsx";
import Stats from "./Stats.jsx";
import * as pokemonData from "./pokemonData.js";

async function fetchPokemon(name) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
    if (res.ok) {
      return res.json();
    } else if (res.status === 404) {
      return alert(`Pokemon not found! Try a different name.`);
    }
    return console.error(`Oops! Error ${res.status}. Pokemon not found!`);
  });
}

function Pokemon({ name }) {
  const [pokemon, setPokemon] = useState(pokemonData.pikachu);

  useEffect(() => {
    fetchPokemon(name).then((data) => {
      if (data.id === undefined) {
        return setPokemon(pokemonData.pikachu);
      }
      return setPokemon(data);
    });
  }, [name]);

  return (
    <>
      <section className="bg-nord3 mx-auto w-2/3 flex lg:flex-row flex-col items-center rounded-lg justify-center py-5">
        <PokemonInfo pokemon={pokemon} />
        <Sprite pokemon={pokemon} />
      </section>
      <Stats pokemon={pokemon} />
    </>
  );
}
export default Pokemon;
