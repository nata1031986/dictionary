import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos && props.photos.length > 0) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map((photo, index) => (
            <div className="col-4" key={index}>
              <a href={photo.src.original} target="_blank" rel="noopener noreferrer">
                <img src={photo.src.landscape} alt={`Image ${index}`} className="img-fluid" />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
