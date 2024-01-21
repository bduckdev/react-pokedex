function Header() {
    return (
        <header className="text-center my-10">
            <h1 className="font-extrabold text-3xl text-nord4">
                React Pokedex
            </h1>
            <a
                className="font-semibold hover:underline hover:text-nord-3 text-nord4 text-l"
                href="https://github.com/bduckdev/react-pokedex"
            >
                GitHub Project
            </a>
        </header>
    );
}
export default Header;