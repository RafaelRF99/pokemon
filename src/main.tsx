import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Router from "./Router/index.tsx";
import SearchProvider from "./data/context/SearchContext.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <SearchProvider>
            <Router />
        </SearchProvider>
    </React.StrictMode>
);
