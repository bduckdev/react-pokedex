function Pokemon(props) {
    return (
        <section className="bg-nord3 mx-auto w-1/2 flex items-center rounded-lg justify-evenly py-10">
            <div className="w-1/2 pl-5">
                <h2 className="text-3xl pb-5 text-nord5 font-bold">{props.name}</h2>
                <p className="text-xl text-medium text-nord4">{props.description}</p>
            </div>
            <img className="w-1/2" src={props.image} alt={props.name} />
        </section>
    );
}
export default Pokemon;
