import styles from './Header.module.scss'
import PokeBola from '../../assets/icon.svg'

export default function Header() {
    return (
        <header className={styles.container}>
            <img className={styles.img} src={PokeBola} alt="PokeBola" />
            <p className={styles.title}>Pokedex</p>
        </header>
    )
}