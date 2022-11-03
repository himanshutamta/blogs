import React, { useState } from "react";
import './Form.css'
import {useDispatch} from "react-redux";
import { useSelector } from "react-redux";
import { addData } from "../../actions/index";
import Formdata from "../data-component/Formdata";
import { Link, Outlet} from "react-router-dom"



const Form = () => {

    const[inputs, setInputs] = useState("");
    const[comment, setComment] = useState("")
    const dispatch = useDispatch();
    const list = useSelector((state) => state.formReducers.list)

    const fulldata = { inputs , comment};
    const date = new Date();
console.log(date);


    return (
        <div className="form">
            <div className="div2">
            <h1>Type your Post</h1>
            <label>Text Field:</label>
            <input type="text" placeholder="text" name="title" value={inputs} onChange={(event) => setInputs(event.target.value)}/>
            <label>Text Area:</label>
            <textarea type="text" placeholder="text" name="comment" value={comment} onChange={(event) => setComment(event.target.value)}/>
            <button className="clear">CLEAR</button>
            <button className="submit"  type="submit" onClick={() => dispatch(addData(fulldata))}>SUBMIT</button>
            </div>

            <div className="data_here">
                {list.map((element) => { 
                    return (
                       <Link to={`/formdata/${element.id}`}><Formdata element={element}/></Link> 
                       
                )}
                )}
                <Outlet />
            </div>
        </div>
    )
}

export default Form;