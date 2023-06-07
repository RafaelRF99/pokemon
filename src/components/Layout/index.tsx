import { ReactNode } from "react";
import Header from "../Header";
import Search from "../Search";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div style={{ width: "600px", margin: "0 auto" }}>
            <Header />
            <Search />
            <div>{children}</div>
        </div>
    );
}
