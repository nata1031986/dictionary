import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic"; // Ensure this is imported correctly

export default function Results(props) {
    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                {props.results.phonetics && props.results.phonetics.map((phonetic, index) => (
                    <Phonetic key={index} phonetic={phonetic} />
                ))}
                {props.results.meanings && props.results.meanings.map((meaning, index) => (
                    <div key={index}>
                        <Meaning meaning={meaning} />
                    </div>
                ))}
            </div>
        );
    } else {
        return null;
    }
}
