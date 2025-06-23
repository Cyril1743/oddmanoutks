import { useState } from "react";
import Home from "./pages/Home";

export default function Pages() {
    const [page, setPage] = useState("Home")

    const renderPage = () => {
        if (page === "Home") {
            return <Home />
        }
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}