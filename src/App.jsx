import "./App.css";
import Header from "./Header.jsx";
import Pokemon from "./Pokemon.jsx";

function App() {
    return (
        <>
            <Header />
            <Pokemon
                name="Chimchar"
                image="https://archives.bulbagarden.net/media/upload/thumb/9/91/0390Chimchar.png/250px-0390Chimchar.png"
                description="It is very agile. Before going to sleep, it extinguishes the flame on its tail to prevent fires."
            />
        </>
    );
}

export default App;
