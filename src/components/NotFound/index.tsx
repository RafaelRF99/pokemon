import styles from "./NotFound.module.scss";
import NotFoundImage from "../../assets/NotFound.png";

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.inform}>
                <div className={styles.title}>
                    <p>Ops...</p>
                    <p>Pokedex</p>
                </div>
                <p className={styles.subtitle}>não encontrada</p>
            </div>
            <img className={styles.img} src={NotFoundImage} alt="NotFound" />
        </div>
    );
}
