import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        console.log("upper case was clicked");
        setText("You have clicked on handleUpClick")
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const [text, setText] = useState('Enter text here');
    return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
                <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
    </div>
  )
}