import styles from "./Status.module.scss";
// JSON
import PokemonStatus from "./PokemonStatus.json";
// COMPONENTS
import Layout from "../../components/Layout";
// HOOKS
import { usePokemon } from "../../data/hook/usePokemon";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface PokemonStats {
    name: string;
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
    [key: string]: number | string;
}

export default function Status() {
    const navigate = useNavigate();
    const { namePokemon } = usePokemon();
    const [status, setStatus] = useState<PokemonStats | undefined>();

    function handleBack() {
        navigate("/");
    }

    useEffect(() => {
        function renderStatus() {
            const filteredPokemon = PokemonStatus.find(
                (pokemon) => pokemon.name === namePokemon
            );
            if (filteredPokemon) {
                setStatus(filteredPokemon);
            }
        }
        renderStatus();
    }, [namePokemon]);

    const statLabels = [
        { label: "Hp", key: "hp" },
        { label: "Attack", key: "attack" },
        { label: "Defense", key: "defense" },
        { label: "Special-Attack", key: "specialAttack" },
        { label: "Special-Defense", key: "specialDefense" },
        { label: "Speed", key: "speed" },
    ];

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.header}>
                    <p>{namePokemon}</p>
                    <div className={styles.img}>
                        <img
                            src={"/" + namePokemon + ".png"}
                            alt={namePokemon}
                        />
                    </div>
                </div>
                <div className={styles.inform}>
                    <div className={styles.status}>
                        <h1 className={styles.title}>Estatísticas</h1>
                        <div className={styles.display}>
                            {statLabels.map((stat) => (
                                <div key={stat.key}>
                                    <h2>{stat.label}</h2>
                                    <p>{status?.[stat.key]}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className={styles.btn} onClick={() => handleBack()}>
                        Voltar
                    </button>
                </div>
            </div>
        </Layout>
    );
}
