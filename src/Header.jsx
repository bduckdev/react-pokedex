function Header() {
    return (
        <header className="text-center my-10">
            <h1 className="font-extrabold text-3xl text-nord4">React Pokedex</h1>
            <h2 className="font-thin text-xl text-nord4">
                most useful and productive application since the invention of the
                internet
            </h2>
            <a
                className="font-semibold underline-offset-2 underline hover:text-nord-3 text-nord4 text-l"
                href="https://github.com/bduckdev/react-pokedex"
            >
                GitHub Project
            </a>
        </header>
    );
}
export default Header;
