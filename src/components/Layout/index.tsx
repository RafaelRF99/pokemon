import { ReactNode } from "react";
import Header from "../Header";
import Search from "../Search";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div>
            <Header />
            <Search />
            <div>{children}</div>
        </div>
    );
}
