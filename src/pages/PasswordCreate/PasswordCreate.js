
import React from "react";
import './PasswordCreate.scss'
import main from '../../components/Main.module.scss'
import {Link} from "react-router-dom";
import { useDispatch } from 'react-redux';
import {setPinCode} from '../../store/slices/user';
import Header from "../../components/Header/Header";
import PinField from "react-pin-field"
import { useRef, useState} from 'react';

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
    }

    function testClick() {
        chrome.storage.local.set({key: 'loh Zalupa Chmo Mileyko'}, function () {
            // eslint-disable-next-line no-useless-concat
            // console.log('value is set to' + 'loh Zalupa Chmo Mileyko');
        })

        chrome.storage.local.get(['key'], function (result) {
            console.log('get', result.key);
        })

        console.log(chrome.storage);
    }

    // visual catalog barrel fantasy only ancient tenant quit fashion transfer purse ketchup



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

                    <button
                        onClick={testClick}

                    >
                        test
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
                    <button
                        disabled={pin !== confirmPinCode}
                    >
                        <Link to='/seed-phrase'>
                            Confirm
                        </Link>
                    </button>
                </div>
            ) : null}
        </>

    )
}
