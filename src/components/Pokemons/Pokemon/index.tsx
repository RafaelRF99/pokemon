import styles from "./Pokemon.module.scss";

import { IPokemon } from "../../../interface/IPokemon";

interface PokemonProps {
    pokemon: IPokemon;
    key: number;
}

export default function Pokemon(props: PokemonProps) {
    const poke = props.pokemon;

    return (
        <div className={styles.container} key={props.key}>
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
