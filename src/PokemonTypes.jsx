function PokemonTypes({ pokemon }) {
    if (pokemon.types.length === 2) {
        return (
            <>
            <h3 className="capitalize text-xl text-nord4 font-bold">
                {pokemon.types.length === 1
                    ? `Type: ${pokemon.types[0].type.name}`
                    : "Types:"}
            </h3>
                <hr />
                <ul className="w-1/2 justify-between flex flex-col list-disc">
                    {pokemon.types.map((type) => {
                        return (
                            <li key={type.slot}>
                                <p className="capitalize text-xl text-medium text-nord4">
                                    {type.type.name}
                                </p>
                            </li>
                        );
                    })}
                </ul>
            </>
        );
    } else {
        return (
            <h3 className="capitalize text-xl text-nord4 font-bold">
                {pokemon.types.length === 1
                    ? `Type: ${pokemon.types[0].type.name}`
                    : "Types:"}
            </h3>
        );
    }
}
export default PokemonTypes;
