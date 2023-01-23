import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success")
    }
    const handleDownClick=()=>{
        // console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success")
    }
    const handleCopy=()=>{
        var text=document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied to clipboard!","success")
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed!","success")
    }
    // const handleInverseClick=()=>{
    //     console.log("Lowercase was clicked");
    //     if (text===text.toUpperCase()){
    //         handleDownClick()
    //     }
    //     else{
    //         handleUpClick()
    //     }
    // }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Cleared text!","success")
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
    
    const [text, setText] = useState('');
  return (
    <>
    <div className='container'style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to lowercase</button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>Clear text</button>
        <button className="btn btn-success mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Removes Extra spaces</button>
        {/* <button className="btn btn-success mx-1" onClick={handleInverseClick}>Inverse case</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text===''?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{text===''?'...':0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in text box above to preview it here!"}</p>
    </div>
    </>
  )
}
