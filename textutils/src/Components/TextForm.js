import React, { useState } from 'react'

export default function TextForm(props) {

    const [text, setText] = useState('')
    const [words, setWords] = useState(0)
    const [characters, setCharacters] = useState(0)
    

    const handleOnChange = (event) => {
        let newText = event.target.value
        setText(newText)
        calculateLengths(event)
    }

    const calculateLengths = (event) => {
        let newText = event.target.value
        setWords(newText.trim().split(/[ ,]+/).length)
        if(newText==='') setWords(0)
        setCharacters(newText.length)
    }

    const handleUpperCase = () => {
        setText(text.toUpperCase())
    }
    const handleLowerCase = () => {
        setText(text.toLowerCase())
    }
    const handleClearText = (event) => {
        setText('')
        calculateLengths(event)
    }
    const handleCopyText = () => {
        document.getElementById('textForm').select()
        navigator.clipboard.writeText(text)
    }

    return (
        <>
            <div className="container" style={{color: props.secondary}}>
                <h1 className="my-2">{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" id="textForm" rows="6" value={text} style={{color: props.secondary, backgroundColor: props.primary}} onChange={handleOnChange}></textarea>
                </div>
                <button style={{color: props.primary, backgroundColor: props.secondary, borderColor: props.secondary}} className="btn btn-primary mx-1" onClick={handleUpperCase}>To Upper Case</button>
                <button style={{color: props.primary, backgroundColor: props.secondary, borderColor: props.secondary}} className="btn btn-primary mx-1" onClick={handleLowerCase}>To Lower Case</button>
                <button style={{color: props.primary, backgroundColor: props.secondary, borderColor: props.secondary}} className="btn btn-primary mx-1" onClick={handleClearText}>Clear Text</button>
                <button style={{color: props.primary, backgroundColor: props.secondary, borderColor: props.secondary}} className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.secondary}}>
                <h2>Text Summary</h2>
                <p>{words} words and {characters} characters</p>
                <p>{words/200} Minutes read</p>
                <h2 className="my-1">Preview</h2>
                <p>{characters===0 ? 'Type above to see the preview here' : text}</p>
            </div>
        </>
    )
}
