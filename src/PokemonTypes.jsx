import "./types.css";

function PokemonTypes({ pokemon }) {
        return (
            <>
                <div className="capitalize flex gap-1 text-m text-nord4 font-semibold">
                    {pokemon.types.map((type) => {
                        return (
                <span key={type.slot} className={`type ${type.type.name}`}></span>
                        );
                    })}
                </div>
            </>
        );
    }
export default PokemonTypes;
