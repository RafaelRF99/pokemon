import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/index.tsx";
import SearchProvider from "./data/context/SearchContext.tsx";
import PokemonProvider from "./data/context/PokemonContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SearchProvider>
            <PokemonProvider>
                <Router />
            </PokemonProvider>
        </SearchProvider>
    </React.StrictMode>
);
