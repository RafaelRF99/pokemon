import styles from "./Home.module.scss";
// COMPONENTS
import Layout from "../../components/Layout";
import Pokemons from "../../components/Pokemons";

export default function Home() {
    return (
        <Layout search={true}>
            <div className={styles.pokemons}>
                <Pokemons />
            </div>
        </Layout>
    );
}
