import styles from "./Layout.module.scss";
// REACT
import { ReactNode } from "react";
// COMPONENTS
import Header from "../Header";
import Search from "../Search";

interface LayoutProps {
    children: ReactNode;
    search?: boolean;
}

export default function Layout({ children, search }: LayoutProps) {
    return (
        <div className={styles.container}>
            <Header />
            {search ? <Search /> : ""}
            <div>{children}</div>
        </div>
    );
}
