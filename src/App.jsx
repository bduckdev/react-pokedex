import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import Pokemon from "./Pokemon.jsx";
import SearchBar from "./SearchBar.jsx";

function getRandomNumber() {
  const multiplier = Math.floor(Math.random() * 1000);
  const randomNumber = Math.floor(Math.random() * multiplier);
  if (randomNumber < 500 && randomNumber !== 0) {
    return randomNumber;
  } else {
    return getRandomNumber();
  }
}
function App() {
  const [name, setName] = useState("pikachu");

  return (
    <>
      <Header />
      <SearchBar setName={setName} />
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
