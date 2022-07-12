import React, { useState } from 'react'

function Textarea(props) {
    let Upcase = function(){
        let newText = text.toUpperCase()
        setText(newText);
    }
    let LowerCase = function(){
        let newText = text.toLowerCase()
        setText(newText);
    }
    let capitilizingCase = function(){
        let array = text.split(" ");
        for(var i=0; i<array.length; i++){
            array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
        }
        let newText = array.join(" ");
        setText(newText)
    }
    let copyClipboard = function(){
        navigator.clipboard.writeText(text);
        
    }
    let clearText = function(){
        let newText = ("")
        setText(newText)
    }
    let changetoUppercase = function(event){
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className={`mb-3 mx-5 text-${props.mode==="light"?"dark":"light"}`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
                <textarea className="form-control" value={text} onChange={changetoUppercase} id="exampleFormControlTextarea1" rows="7"></textarea>
            </div>
            <button onClick={Upcase} className="btn btn-primary mx-5">Upper Case</button>
            <button onClick={LowerCase} className="btn btn-primary mx-5">Lower Case</button>
            <button onClick={capitilizingCase} className="btn btn-primary mx-5">Capitilizing Case</button>
            <button onClick={copyClipboard} className="btn btn-primary mx-5">Copy To ClipBoard</button>
            <button onClick={clearText} className="btn btn-primary mx-5">Clear Text</button>

            <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
                <h2>Your Text Summary</h2>
                <p><strong>Total {text.split(" ").length} Words And {text.length} Charecters</strong></p>
                <p><strong>Total Times Takes For Read Is {0.006 * text.length} Minutes</strong></p>
            </div>
            <div className={`container my-3 text-${props.mode==="light"?"dark":"light"}`}>
                <h4><strong>Preview</strong></h4>
                <p>{`${text.length>0?text:"Enter Your Text On The Text Area"}`}</p>
            </div>
        </>
    )
}

export default Textarea
