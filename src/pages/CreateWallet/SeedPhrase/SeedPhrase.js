import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {setPhrase} from '../../../store/slices/user';
import "../../../assets/styles/global/_global.scss"
import './SeedPhrase.scss';

let Mnemonic = require('bitcore-mnemonic');
let code = new Mnemonic();
let phrase = code.toString();

let phrase_str = phrase.split(' ')
let result = phrase_str.map(item =>
    <div className="seed-phrase_phrase__item">
        <div className="num">
            {phrase_str.indexOf(item) + 1}
        </div>
        <div className="word">
            {item}
        </div>
    </div>
);


export default function SeedPhrase() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const arrowBack = chrome.runtime.getURL("img/svg/arrow_back.svg");
    const checkedIcon = chrome.runtime.getURL("img/svg/success.svg")
    const copyIcon = chrome.runtime.getURL("img/svg/copyIcon.svg");

    useEffect(() => {
        dispatch(setPhrase(phrase));
    }, [dispatch]);

    const [visible, setIsVisible] = useState(false);




    function copyToClipboard () {
        navigator.clipboard.writeText(phrase)
        setIsVisible(true)

        setTimeout(function() {
            setIsVisible(false);
        }, 1500);
    }



    return (
        <div className="seed-phrase content_block">
            <div className="content">
                <div onClick={() => navigate(-1)} className="header_back">
                    <img src={arrowBack} alt="" className="back"/>
                </div>
                <div className="content_text">
                    <div className="text_h1">Write down the secret phrase</div>
                    <div className="text_p">
                        This is your recovery secret phrase, write it down and keep it in a safe place.
                    </div>
                </div>
                <div className="seed-phrase_phrase">{result}</div>

                {visible === false ? (
                    <div onClick={copyToClipboard} className="btn_outlined">
                        <img src={copyIcon} alt=""/>
                        <div className="text">
                            Copy phrase
                        </div>
                    </div>
                ) : visible === true ? (
                    <div className="btn_outlined btn_outlined-success">
                        <img src={checkedIcon} className="copied" alt=""/>
                        <div className="text">
                            Copied!
                        </div>
                    </div>
                ) : null}

                <div className="text_h4">

                </div>
            </div>
            <Link to="/seed-phrase/confirm" className="btn_main">
                Continue
            </Link>
        </div>
    );
}
