import React, { useState } from 'react'
import style from "./Text.module.css"

export default function Textutils() {
    document.title = "TextUtils"
    let abouts;

    setTimeout(function () {
        document.getElementsByTagName('textarea')[0].focus();
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }, 0)
    const onchange = (e) => {
        let ntext = e.target.value;
        setText(ntext)
    }
    const capital = () => {//Convert small letter into capital
        let newText = text.toUpperCase();
        setText(newText);
    }


    let ExtraSpaces = () => {//remove extra spaces between words
        let newtext = text.replace(/\s+/g, ' ');
        setText(newtext)
    }

    async function wordcont() {
        let text = document.getElementsByTagName("textarea")[0].value.trim();
        let p = document.getElementById('para');
        let p2 = document.getElementById('para2');
        let charh = document.getElementById('charhead');
        let charw = document.getElementById('charwords');

        if (text === "") {
            p.style.display = 'block';
            p2.style.display = 'block';
            charh.style.display = 'block';
            charw.style.display = 'block';
            p.innerHTML = "0";
            charw.innerHTML = "0";
        } else {
            // Replace multiple spaces with a single space
            text = text.replace(/\s+/g, ' ');
            // Count the words
            let count = text.split(" ").length;
            let charcount = text.length;
            p.innerHTML = count;
            charw.innerHTML = charcount;
            charh.style.display = 'block';
            charw.style.display = 'block';
            p.style.display = 'block';
            p2.style.display = 'block';
        }
    }


    const CopyText = () => {
        navigator.clipboard.writeText(text);
    }
    const clear = () => {
        setText("")
    }

    let about = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "block"
    }
    let close = () => {
        abouts = document.getElementById('abouts');
        abouts.style.display = "none"
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className={style.Heading}>
                <div className={style.data}>
                    <button className={style.btnH}><a href="https://tarunthakur7974.github.io/Resume/#project">Home</a></button>
                    <button onClick={about} className={style.btnH} >About</button>
                </div>
                <div className={style.aboutsdata}>
                    <ul id='abouts'>
                        <button onClick={close} style={{ float: 'right' }}>X</button>
                        <li>"TextUtils can help you with several tasks."</li>
                        <li>""TextUtils" should be capitalized your text."</li>
                        <li>""TextUtils" should be removed extra spaces for meaning clearly."</li>
                        <li>""TextUtils" helps you to copy text".</li>
                        <li>"It will count the words and characters in it."</li>
                        <li>"This site was created to be fully responsive without using media queries."</li>
                    </ul>
                </div>
            </div>
            <h1 className={style.hone}>Enter your Text</h1>
            <div className={style.container}>
                <textarea id={style.textarea} onChange={onchange} value={text} placeholder="Enter Here" type="text" />
            </div>
            <div className={style.cont}>
                <button type='button' onClick={capital} id={style.btn1} className={style.btnc}>Capital Text</button>
                <button type='button' onClick={CopyText} id={style.btn2} className={style.btnc}>Copy Text</button>
                <button type='button' onClick={ExtraSpaces} id={style.btn3} className={style.btnc}>Extraspaces R</button>
                <button type='button' onClick={wordcont} id={style.btn4} className={style.btnc}>Word count</button>
                <button type='button' style={{backgroundColor:"tomato"}} onClick={clear} id={style.btn5} className={style.btnc}>Clear Text</button>

            </div>
            <div className={style.paras}>
                <div className={style.wordscount}>
                    <p id="para2" style={{marginTop:'20px'}} className={style.paraa}>Words on text :</p>
                    <p id="para" style={{marginTop:'20px'}} className={style.paraa}>0</p></div>
            </div>
            <div className={style.paras}>
                <div className={style.wordscount}>
                    <p id="charhead" className={style.paraa}>Characters on text :</p>
                    <p id="charwords" className={style.paraa}>0</p></div>
            </div>
        </>
    )
}
