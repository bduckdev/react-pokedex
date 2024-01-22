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
        <div className="flex flex-col justify">
            {defaultView ? (
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            ) : (
                <img src={pokemon.sprites.back_default} alt={pokemon.name} />
            )}
            <button
                onClick={() => {
                    switchView();
                }}
                className="bg-nord4 rounded-full px-5"
            >
                Switch View
            </button>
        </div>
    );
}
export default Sprite;
