import { useState } from "react";
import React from 'react'


export default function TextForm(props) {
    const [text,setText] = useState("")
    

    function onClickUp(){
        
        let textnew = text.toUpperCase();
       setText(textnew);
    }

    function OnchangeHandle(event){
        setText(event.target.value)
    }

    function onClickLo(){
        let textnew = text.toLowerCase();
       setText(textnew);
    }
    function onClickClear(){
        let textnew = "";
        setText(textnew)
    }
    
  return (
    <div className="form-group mb-5 mx-1">
    <div className='mb-3'>
    <label htmlFor="exampleFormControlTextarea1">{props.title}</label>
    <textarea className="form-control " id="exampleFormControlTextarea1" rows="8" value={text} onChange={OnchangeHandle}></textarea>
    </div>
    <button type="button" className="btn btn-primary mb-3 mx-1" onClick={onClickUp}>Uppercase</button>
    <button type="button" className="btn btn-primary mb-3 mx-1" onClick={onClickLo}> Lowercase</button>
    <button type="button" className="btn btn-primary mb-3 mx-1" onClick={onClickClear}>Clear</button>
    <div className="container">
        <h3>Text details</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} Character</p>
    </div>
  </div>
  )
}
