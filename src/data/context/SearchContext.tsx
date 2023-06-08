import { createContext, useState, ReactNode } from "react";

interface SearchContextProps {
    search: string;
    setSearch: any;
}

export const SearchContext = createContext({} as SearchContextProps);

interface SearchProviderProps {
    children: ReactNode;
}

export default function SearchProvider({ children }: SearchProviderProps) {
    const [search, setSearch] = useState("");

    return (
        <SearchContext.Provider value={{ search, setSearch }}>
            {children}
        </SearchContext.Provider>
    );
}
