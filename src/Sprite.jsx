import { useState } from "react";
function Sprite({ pokemon }) {
    const [defaultView, setView] = useState(true);

    function switchView() {
        if (defaultView) {
            setView(false);
        } else {
            setView(true);
        }
    }
    return (
        <div className="flex flex-col justify mx-0 max-w-52">
            {defaultView ? (
                <img
                    className="w-full mx-auto"
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
            ) : (
                <img
                    className="w-full mx-auto"
                    src={pokemon.sprites.back_default}
                    alt={pokemon.name}
                />
            )}
            <button
                onClick={() => {
                    switchView();
                }}
                className="bg-nord4 rounded-full text-xs sm:text-lg px-5"
            >
                Switch View
            </button>
        </div>
    );
}
export default Sprite;
