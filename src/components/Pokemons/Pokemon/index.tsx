import styles from "./Pokemon.module.scss";

interface PokemonProps {
    pokemon: {
        name: string;
        type: {
            first: string;
            second?: string;
        };
    };
}

export default function Pokemon(props: PokemonProps) {
    const poke = props.pokemon;
    return (
        <div className={styles.container}>
            <div>
                <h1 className={styles.name}>{poke.name}</h1>
                <div className={styles.type}>
                    <span className={styles.class}>{poke.type.first}</span>
                    {poke.type.second ? (
                        <span className={styles.class}>{poke.type.second}</span>
                    ) : (
                        ""
                    )}
                </div>
            </div>
            <div className={styles.img}>
                <img src={"/" + poke.name + ".png"} alt={poke.name} />
            </div>
        </div>
    );
}
