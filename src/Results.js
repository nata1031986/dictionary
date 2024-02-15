import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {

    if (props.results) {
        return (
            <div className="Results">
                <h2>{props.results.word}</h2>
                {/* Assuming props.results.meanings is the array of meanings */}
                {props.results.meanings.map(function(meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    );
                })}
            </div>
        );
    } else {
        return null;
    }
}