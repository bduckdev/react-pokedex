function Stats({ pokemon }) {
    return (
        <section className="bg-nord3 mx-auto w-5/6 rounded-lg px-5 py-10 my-7">
            <h2 className="text-center text-nord4 text-3xl font-bold pb-5">
                BASE STATS
            </h2>
            <hr />
            <ul>
                {pokemon.stats.map((stat) => {
                    return (
                        <li
                            key={stat.stat.url}
                            className="flex flex-row justify-between py-5"
                        >
                            <p className="text-nord4 uppercase">
                                {stat.stat.name}
                            </p>
                            <div className="bg-nord2 w-56 rounded-full">
                                <div
                                    style={{
                                        width: `${(stat.base_stat / 120) * 100}%`,
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
