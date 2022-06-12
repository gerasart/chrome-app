import { useRef, useState } from 'react';
import PinField from 'react-pin-field';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../components/Header/Header';
import main from '../../components/Main.module.scss';
import { hash } from '../../facades/password';
import extensionStore from '../../helper/local-store';
import { setPinCode } from '../../store/slices/user';
import './PasswordCreate.scss';

export default function PasswordCreate() {
    const [pin, setPin] = useState('');
    const [confirmPinCode, setConfirmPinCode] = useState('');
    const [confirmPin, setConfirmPin] = useState(false);
    const ref = useRef([]);
    const dispatch = useDispatch();

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
                <div className="PasswordCreate">
                    <Header />
                    <div className={main.h1}>Create pin code</div>
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
                    <button onClick={createPin} disabled={pin.length < 6}>
                        Next
                    </button>
                </div>
            ) : confirmPin === true ? (
                <div className="PasswordCreate">
                    <Header />
                    <div className={main.h1}>Confirm pin code</div>
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
                    <Link to="/seed-phrase">
                        <button
                            disabled={pin !== confirmPinCode}
                            className="pin-code_btn"
                        >
                            Confirm
                        </button>
                    </Link>
                </div>
            ) : null}
        </>
    );
}
