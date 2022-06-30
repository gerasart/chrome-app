import {useRef, useState} from 'react';
import PinField from 'react-pin-field';
import {useDispatch} from 'react-redux';
import {Link, useNavigate} from 'react-router-dom';
import {hash} from '../../../facades/password';
import extensionStore from '../../../store/local-store';
import {setPinCode} from '../../../store/slices/user';
import './PasswordCreate.scss';
import '../../../assets/styles/global/_global.scss'

export default function PasswordCreate() {
    const [pin, setPin] = useState('');
    const [confirmPinCode, setConfirmPinCode] = useState('');
    const [confirmPin, setConfirmPin] = useState(false);
    const ref = useRef([]);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const arrowBack = chrome.runtime.getURL("img/svg/arrow_back.svg");

    async function createPin() {
        ref.current.forEach((input) => (input.value = ''));
        setConfirmPin(true);

        const encryptedPin = hash(pin);
        await extensionStore.set('pinCode', encryptedPin);
        dispatch(setPinCode(encryptedPin));
    }

    return (
        <>
            {confirmPin === false ? (
                <div className="password_create content_block">
                    <div className="content">
                        <div onClick={() => navigate(-1)}
                             className="header_back">
                            <img src={arrowBack} alt="" className="back"/>
                        </div>
                        <div className="content_text">
                            <div className="text_h1">Create password</div>
                            <div className="text_p">
                                A pincode protects your data and is used to
                                access the application
                            </div>
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

                    </div>
                    {pin.length < 6 ? (
                        <div className="btn_disabled"> Confirm </div>
                    ) : pin.length >= 6 ? (
                        <div onClick={createPin} className="btn_main">Next</div>
                    ) : null}
                </div>
            ) : confirmPin === true ? (
                <div className="password_create content_block">
                    <div className="content">
                        <div onClick={() => navigate(-1)}
                             className="header_back">
                            <img src={arrowBack} alt="" className="back"/>
                        </div>
                        <div className="content_text">
                            <div className="text_h1">Confirm password</div>
                            <div className="text_p">
                                A pincode protects your data and is used to
                                access the application
                            </div>
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
                    </div>
                    {pin !== confirmPinCode ? (
                        <div className="btn_disabled"> Confirm </div>
                    ) : pin === confirmPinCode ? (
                        <Link to="/create-wallet/seed-phrase">
                            <div className="btn_main">Confirm</div>
                        </Link>
                    ) : null}
                </div>
            ) : null}
        </>
    );
}
