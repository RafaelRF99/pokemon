import { useSearch } from "../../data/hook/useSearch";
import styles from "./Search.module.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search() {
    const { search, setSearch } = useSearch();

    return (
        <div className={styles.container}>
            <input
                className={styles.search}
                type="text"
                placeholder="Buscar Pokemon..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <MagnifyingGlass className={styles.icon} size={30} color="#FFF" />
        </div>
    );
}
