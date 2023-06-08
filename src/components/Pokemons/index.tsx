import styles from "./Pokemons.module.scss";
// JSON
import listPokemon from "./Pokemon/Pokemon.json";
// HOOKS
import { useEffect, useState } from "react";
import { useSearch } from "../../data/hook/useSearch";
// INTERFACE
import { IPokemon } from "../../interface/IPokemon";
// COMPONENTS
import Pokemon from "./Pokemon";

export default function Pokemons() {
    const { search } = useSearch();
    const [listFilter, setListFilter] = useState<IPokemon[]>([]);

    useEffect(() => {
        setListFilter(
            listPokemon.filter((item) =>
                item.name.toLowerCase().includes(search)
            )
        );
    }, [search]);

    return (
        <div className={styles.container}>
            {listFilter.length > 0
                ? listFilter.map((pokemon, i) => {
                      return <Pokemon pokemon={pokemon} key={i} />;
                  })
                : listPokemon.map((pokemon, i) => {
                      return <Pokemon pokemon={pokemon} key={i} />;
                  })}
        </div>
    );
}
