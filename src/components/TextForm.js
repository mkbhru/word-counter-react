import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = ()=>{
        setText('')
    }

    const handleReverseClick = ()=>{
        let newText = "";
        for(var i = text.length - 1; i >=0; i--)
            newText += text[i];
        setText(newText)
    }

    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
    <>
    <div className='container'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
                <textarea className="form-control " value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleloClick}>Convert to lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse</button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear all </button>
    </div>
    <div className="container my-3">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words, {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <p>{text.split(".").length} Line count</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    
    </>
  )
}
