import React from "react";
import './PasswordCreate.scss'
import main from '../../components/Main.module.scss'
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {setPinCode} from '../../store/slices/user';
import Header from "../../components/Header/Header";
import PinField from "react-pin-field"
import {useRef, useState} from 'react';

export default function PasswordCreate() {
    const [pin, setPin] = useState("");
    const [confirmPinCode, setConfirmPinCode] = useState("");
    const [confirmPin, setConfirmPin] = useState(false);
    const ref = useRef([]);
    const dispatch = useDispatch();

    function createPin() {
        ref.current.forEach(input => (input.value = ""))
        setConfirmPin(true);

        let Mnemonic = require('bitcore-mnemonic');
        let code = new Mnemonic(Mnemonic.pinCode);
        let pinPrivate = code.toHDPrivateKey();

        dispatch(setPinCode(pinPrivate.xprivkey));
        chrome.storage.local.set({pinCode: pinPrivate.xprivkey}, function () {
        })
    }

    function testClick() {
        chrome.storage.local.get(['pinCode'], function (result) {
            console.log('get', result);
        })
    }

    return (
        <>
            {confirmPin === false ? (
                <div className="PasswordCreate">
                    <Header/>
                    <div className={main.h1}>
                        Create pin code
                    </div>
                    <div className="pin-code">
                        <PinField
                            ref={ref}
                            className="pin-code-field"
                            onChange={setPin}
                            length={6}
                            autoFocus
                            validate={/^[a-zA-Z0-9]$/}
                        />
                    </div>
                    <button
                        onClick={createPin}
                        disabled={pin.length < 6}
                    >
                        Next
                    </button>


                </div>
            ) : confirmPin === true ? (
                <div className="PasswordCreate">
                    <Header/>
                    <div className={main.h1}>
                        Confirm pin code
                    </div>
                    <div className="pin-code">
                        <PinField
                            ref={ref}
                            className="pin-code-field"
                            onChange={setConfirmPinCode}
                            length={6}
                            autoFocus
                            validate={/^[a-zA-Z0-9]$/}
                        />
                    </div>
                    <Link to='/seed-phrase'>
                        <button
                            disabled={pin !== confirmPinCode}
                            className="pin-code_btn"
                        >
                            Confirm
                        </button>
                    </Link>
                    <button
                        onClick={testClick}
                    >
                        test
                    </button>
                </div>
            ) : null}
        </>
    )
}


// together relief will manage option rely all clown salad burst whale speed
