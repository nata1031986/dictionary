import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function search(event) {
        event.preventDefault();
    alert(`Looking for ${keyword}`);

   let apiUrl = `https://api.shecodes.io/dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
    
}
  function handleResponse(response) {
      
        console.log(response.data[0]);
       
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
            
            
            </div>
            
        );
}  