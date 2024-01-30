import "./types.css";

function PokemonTypes({ pokemon }) {
    return (
        <>
            <div className="max-w 52 w-1/2 pl-5 flex flex-col justify-between">
                <p className="text-center lg:text-left uppercase text-xl pb-0 text-nord4 font-mono">
                    ID: {pokemon.id}
                </p>
                <p className="text-center lg:text-left capitalize text-3xl pb-5 text-nord5 font-bold">
                    {pokemon.name}
                </p>
                <div className="justify-center lg:justify-start capitalize flex gap-1 text-m text-nord4 font-semibold">
                    {pokemon.types.map((type) => {
                        return (
                            <span
                                key={type.slot}
                                className={`tex-xs lg:text-lg type ${type.type.name}`}
                            ></span>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
export default PokemonTypes;
