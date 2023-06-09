import { createContext, useState, ReactNode, useEffect } from "react";

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

    useEffect(() => {
        const savePokemon = localStorage.getItem("namePokemon");
        if (savePokemon) {
            setNamePokemon(savePokemon);
        }
    }, []);

    const handleSetNamePokemon = (newNamePokemon: string) => {
        setNamePokemon(newNamePokemon);
    };

    useEffect(() => {
        localStorage.setItem("namePokemon", namePokemon);
    }, [namePokemon]);

    return (
        <PokemonContext.Provider
            value={{ namePokemon, setNamePokemon: handleSetNamePokemon }}
        >
            {children}
        </PokemonContext.Provider>
    );
}
