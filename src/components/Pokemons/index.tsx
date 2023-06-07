import styles from "./Pokemons.module.scss";
// JSON
import listPokemon from "./Pokemon/Pokemon.json";
// COMPONENTS
import Pokemon from "./Pokemon";

export default function Pokemons() {
    function renderPokemon() {
        return listPokemon.map((pokemon, i) => {
            return <Pokemon pokemon={pokemon} key={i} />;
        });
    }

    return <div className={styles.container}>{renderPokemon()}</div>;
}
