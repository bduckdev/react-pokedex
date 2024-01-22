function Stats({ pokemon }) {
    return (
        <section className="bg-nord3 mx-auto w-1/3 rounded-lg px-5 py-5 my-7 max-h-96">
            <h2 className="text-nord4 text-xl font-bold pb-1">
                Stats:
            </h2>
            <hr className="my-0 pb-3"/>
            <ul>
                {pokemon.stats.map((stat) => {
                    return (
                        <li
                            key={stat.stat.url}
                            className="flex flex-row justify-between py-1"
                        >
                            <p className="text-sm text-nord4 uppercase">
                                {stat.stat.name}:
                            </p>
                            <div className="bg-nord2 w-3/5 rounded-full">
                                <div
                                    style={{
                                        width: `${(stat.base_stat / 180) * 100}%`,
                                        transition: "width 0.5s",
                                    }}
                                    className="bg-nord9 rounded-full"
                                >
                                    <p className="text-right text-nord1 pr-2">
                                        {stat.base_stat}
                                    </p>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
}
export default Stats;
