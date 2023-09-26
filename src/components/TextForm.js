import React, { useState } from 'react'
//!Always use useState hook inside the function
//?useState gives us a state variable
export default function TextForm(props) {
    //!Memorize this syntax
    const [text, setText] = useState("");
    //text is whatever para input in useState and setText is used to change that text later
    //text="new text"; wrong way to change state
    //setText("new text"); correct way to change state
    const handleupClick = (e) => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to uppercase.","success");
    }
    const handleloClick = (e) => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to lowercase.","success");
    }
    const handlecapClick = (e) => {
        if (text!=="") {
            const words = text.split(" ");
            for (let i = 0; i < words.length; i++) {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1).toLowerCase();
            }
            let newtext = words.join(" ");
            setText(newtext);
        }
        props.showAlert("Converted to capital case.","success");
    }
    const handleExtraSpace = ()=>{
        let newtext=text.split(/[]+/); //Regex for getting words without extra spaces
        setText(newtext.join(" "));
        props.showAlert("Removed extra spaces.","success");
    }
    const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        // alert("Text Copied To Clipboard")
        props.showAlert("Text copied to clipboard.","success");
    }
    const handleChange = (e) => {
        // e.target is used when no args is passed in the calling function to find the current object
        setText(e.target.value);
    }
    function words() {
            let txt=text;
            txt = txt.trim();
            let words = txt.split(/\s+/);
            let wordArr = words.filter(elm => elm !== "");
            return wordArr.length;
    }
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="form-group my-3">
                    <textarea className="form-control" value={text} onChange={handleChange} placeholder="Enter Text Here..." id="exampleFormControlTextarea1" rows="7" cols={60}></textarea>
                </div>
                <div className="btns">
                    <button disabled={text.length===0} className="btn stop mx-2 my-2" onClick={handleupClick}>UPPER CASE</button>
                    <button disabled={text.length===0} className="btn stop mx-2 my-2" onClick={handleloClick}>lower case</button>
                    <button disabled={text.length===0} className="btn stop mx-2 my-2" onClick={handlecapClick}>Capital Case</button>
                    <button id="extra" disabled={text.length===0} className="btn stop mx-2 my-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>
                    <button disabled={text.length===0} className="btn mx-2 my-2" onClick={handleCopy}>Copy To Clipboard</button>
                </div>
                <p id='word'>{words()} words and {text.length} characters</p>
                <p id='char'>{0.008 * words()} Minutes read</p>
            </div>
        </>
    )
    //!Slow reading speed of 1 word in minutes * no of words
}
