import React from "react";
import "./images-style.css";

function Images(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} onClick={props.handleIncrement}/>
        {/* <button className="imageNames" onClick={this.handleIncrement}>{props.name}</button> */}
      </div>
    </div>
  );
}

export default Images;