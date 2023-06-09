import styles from "./Pokemons.module.scss";
// JSON
import listPokemon from "./Pokemon/Pokemon.json";
// HOOKS
import { useEffect, useState } from "react";
import { useSearch } from "../../data/hook/useSearch";
// INTERFACE
import { IPokemon } from "../../interface/IPokemon";
// ROUTER
import { useNavigate } from "react-router-dom";
// COMPONENTS
import Pokemon from "./Pokemon";
import NotFound from "../NotFound";
import { usePokemon } from "../../data/hook/usePokemon";

export default function Pokemons() {
    const navigate = useNavigate();

    const { setNamePokemon } = usePokemon();
    const { search } = useSearch();
    const [listFilter, setListFilter] = useState<IPokemon[]>([]);

    useEffect(() => {
        setListFilter(
            listPokemon.filter((item) =>
                item.name.toLowerCase().includes(search)
            )
        );
    }, [search]);

    function handlePokemon(name: string) {
        navigate("/status");
        setNamePokemon(name);
    }

    function searchImprovement() {
        if (search.length <= 0) {
            return listPokemon.map((pokemon, i) => {
                return (
                    <span onClick={() => handlePokemon(pokemon.name)} key={i}>
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
                    <span onClick={() => handlePokemon(pokemon.name)} key={i}>
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
