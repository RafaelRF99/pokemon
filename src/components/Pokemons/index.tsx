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
import NotFound from "../NotFound";

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

    function searchImprovement() {
        if (search.length <= 0) {
            return listPokemon.map((pokemon, i) => {
                return (
                    <span key={i}>
                        <Pokemon pokemon={pokemon} />
                    </span>
                );
            });
        }
        if (
            listFilter.filter((item) => item.name === search) &&
            listFilter.length > 0
        ) {
            return listFilter.map((pokemon, i) => {
                return (
                    <span key={i}>
                        <Pokemon pokemon={pokemon} />
                    </span>
                );
            });
        } else {
            return <NotFound />;
        }
    }

    return <div className={styles.container}>{searchImprovement()}</div>;
}
