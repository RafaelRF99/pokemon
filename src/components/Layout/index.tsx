import styles from "./Layout.module.scss";
// REACT
import { ReactNode } from "react";
// COMPONENTS
import Header from "../Header";
import Search from "../Search";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Header />
            <Search />
            <div>{children}</div>
        </div>
    );
}
