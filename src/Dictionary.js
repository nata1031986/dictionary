import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";



export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);

    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl)
            .then(handleResponse)
            .catch(handleError);
    }

    function handleResponse(response) {
        if (response?.data) {
            setResults(response.data[0]);
        } else {
            console.error("Data not in expected format or empty", response);
        }
    }

    function handleError(error) {
        console.error("Error fetching dictionary data:", error);
      
    }

    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Results results={results} />
        </div>
    );
}