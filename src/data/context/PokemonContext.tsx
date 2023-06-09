import { createContext, useState, ReactNode } from "react";

interface PokemonContextProps {
    namePokemon: string;
    setNamePokemon: (e: string) => void;
}

export const PokemonContext = createContext({} as PokemonContextProps);

interface PokemonProviderProps {
    children: ReactNode;
}

export default function PokemonProvider({ children }: PokemonProviderProps) {
    const [namePokemon, setNamePokemon] = useState("");

    return (
        <PokemonContext.Provider value={{ namePokemon, setNamePokemon }}>
            {children}
        </PokemonContext.Provider>
    );
}
