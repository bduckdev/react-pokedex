import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Pokemon from "./Pokemon.jsx";

function getRandomNumber() {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 1500 && randomNumber !== 0) {
        return randomNumber;
    } else {
        getRandomNumber();
    }
}
function App() {
    const [name, setName] = useState(getRandomNumber());

    return (
        <>
            <Header />
            <nav className="flex justify-center my-8">
                <button
                    className="bg-nord4 rounded-full px-3"
                    onClick={() => {
                        setName(getRandomNumber);
                    }}
                >
                    Random Pokemon
                </button>
            </nav>
            <Pokemon name={name} />
        </>
    );
}

export default App;
