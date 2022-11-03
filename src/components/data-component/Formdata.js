import React from "react";
import './Formdata.css'

const Formdata = (props) => {
    return(
    <div className="formdata" key={props.element.id}> 
        <div className="title">
        <h1>{props.element.data.inputs}</h1>
        <p>{props.element.data.comment}</p>
        </div>
        <div className="date">dates</div>
    </div>
    )
}

export default Formdata;

