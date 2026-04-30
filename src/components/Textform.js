import React, { useState } from 'react'

export default function Textform(props) {

    const handleupClick= ()=>{
        let newtext= text.toUpperCase();
        // console.log("Button is clicked");
        setText(newtext);
    }
    const handleLoClick=()=>{
      let newtext2 =text.toLowerCase();
      setText(newtext2);
    }
    const handleOnChange =(event)=>{
        // console.log("Changed")
        setText(event.target.value);
    }
const handleCopyClick=()=>{
  navigator.clipboard.writeText(text);
  alert("Copied to clipboard!");
}
    const[text, setText]= useState("Enter Your Text");
    
  return (
    <div>
    <h1>{props.heading}</h1>
        <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
  
</div>
      <button className="btn btn-primary" onClick={handleupClick}>Convert to Uppercase</button>
     
      <button className="btn btn-success mx-2" onClick={handleLoClick}> Convert to LowerCase </button>

      <button className="btn btn-success mx-2" onClick={handleCopyClick}> Copy to Clipboard </button>
      <div className="container my-3" >
  <h1>Your Text Summary</h1>
<p>{text.split(" ").length} & {text.length} characters</p>

<h2>Preview</h2>
<p>{text} </p>
</div>


</div>
    
  )
  
}

