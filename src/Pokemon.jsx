import { useState, useEffect } from "react";
import Sprite from "./Sprite.jsx";
import PokemonTypes from "./PokemonTypes.jsx";
import Stats from "./Stats.jsx";
import * as pokemonData from "./pokemonData.js";

async function fetchPokemon(name) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return alert(`Oops! Error in promise: ${res.status}`);
    });
}

function Pokemon({ name }) {
    const [pokemon, setPokemon] = useState(pokemonData.pikachu);

    useEffect(() => {
        try {
            fetchPokemon(name).then((data) => {
                console.log(data);
                return setPokemon(data);
            });
        } catch {
            return setPokemon(pokemonData.pikachu);
        }
    }, [name]);

    return (
        <>
        <section className="bg-nord3 mx-auto w-1/2 flex items-center rounded-lg justify-evenly py-10">
            <div className="w-1/2 pl-5 flex flex-col justify-between">
                <h2 className="capitalize text-3xl pb-5 text-nord5 font-bold">
                    {pokemon.name}
                </h2>
                <PokemonTypes pokemon={pokemon} />
            </div>
            <Sprite pokemon={pokemon} />
        </section>
            <Stats pokemon={pokemon} />
        </>
    );
}
export default Pokemon;
