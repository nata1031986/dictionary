import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);

    function search(event) {
        event.preventDefault();
    alert(`Looking for ${keyword}`);

   let apiUrl = `https://api.shecodes.io/dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
}
  function handleResponse(response) {
      
        console.log(response.data[0]);
        console.log(response.data[0].meaning[0].definitions[0].definition);
    }

function handleKeywordChange(event) {
     setKeyword(event.target.value);
}

    return (
    <div className="Dictionary">
           <form onSubmit={search}>
            <input type="search" onChange=
            {handleKeywordChange} />
           </form>
            <Results results={results} />
            
            </div>
            
        );
}  