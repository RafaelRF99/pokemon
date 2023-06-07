import styles from "./Search.module.scss";
import { MagnifyingGlass } from "@phosphor-icons/react";

export default function Search() {
    return (
        <div className={styles.container}>
            <input
                className={styles.search}
                type="text"
                placeholder="Buscar Pokemon..."
            />
            <MagnifyingGlass className={styles.icon} size={30} color="#FFF" />
        </div>
    );
}
