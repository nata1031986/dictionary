import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";



export default function Dictionary() {
    const [keyword, setKeyword] = useState("");
    const [results, setResults] = useState(null);
    const [photos, setPhotos] = useState(null);

    function handlePexelsResponse(response) {
        console.log(response.data);
    }
function handleDectionaryResponse (response) {
    setResults(response.data[0]);
}
    function search(event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        let headers ={ Authorization: `Bearer ${pexelsApiKey}`};
        axios.get(apiUrl, {headers: headers}).then(handlePexelsResponse);
    }

            let pexelsApiKey = 
            "843fed47f3a58c43ftc397aabb8d5oc0";
            let pexelApiUrl = 
            `https://api.shecodes.io/images/v1/search?query=${keyword}&per_page=6`;
            axios.get(pexelsApiUrl).then(handlePexelsResponse);
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
            <Photos photos={photos} />
        </div>
    );
}