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
        document.getSelection().removeAllRanges();
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
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to lowercase</button>
        <button disabled={text.length===0} className="btn btn-danger mx-2 my-1" onClick={handleClearClick}>Clear text</button>
        <button disabled={text.length===0} className="btn btn-success mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Removes Extra spaces</button>
        {/* <button className="btn btn-success mx-1" onClick={handleInverseClick}>Inverse case</button> */}
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        {/* <p>{text===''?0:text.split(" ").length} words and {text.length} characters</p> */}
        {/* <p>{text===''?'...':0.008 * text.split(" ").length} Minutes read</p> */}
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}
