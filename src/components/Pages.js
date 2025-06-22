import { useState } from "react";

export default function Pages() {
    const [page, setPage] = useState("Home")

    const renderPage = () => {
        if (page === "Home") {
            return <Home />
        }
    }
}