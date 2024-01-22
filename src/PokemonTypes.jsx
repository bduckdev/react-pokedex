import "./types.css";

function PokemonTypes({ pokemon }) {
        return (
            <>
                <h3 className="capitalize text-xl text-nord4 font-bold">
                    {pokemon.types.length === 1
                        ? "Type: "
                        : "Types: "}
                    {pokemon.types.map((type) => {
                        return (
                <span key={type.slot} className={`type ${type.type.name}`}></span>
                        );
                    })}
                </h3>
            </>
        );
    }
export default PokemonTypes;
