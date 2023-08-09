import React, { useState } from 'react';



export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  
  const handleUpperClick= ()=>{
    // console.log("Button Click" + text);
    let newText = text.toUpperCase();
    // setText("You have clicked");
    setText(newText);
  }
  const handleClearClick= ()=>{
   
    let newText = "";
  
    setText(newText);
  }
   
  const handleLowerClick= ()=>{
    // console.log("Button Click" + text);
    let newText = text.toLowerCase();
    // setText("You have clicked");
    setText(newText);
  }
  const handleOnChange= (event)=>{
    // console.log("On Change");
    setText(event.target.value)
  }
  return (
    <>
    <div className='container'>
      <h1>{props.heading} </h1>
       <div className="form-group">
    
    <textarea className="form-control" value= {text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
    
  </div>
  <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Upper Case</button>
  <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert To ULower Case</button>
  <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>
    </div>
    <div className="container my-2">
      <h1>Your text summary</h1>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008*text.split(" ").length}</p>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>
    </>
  )
}
