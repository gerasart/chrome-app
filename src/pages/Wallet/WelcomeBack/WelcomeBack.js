import { useRef, useState } from 'react';
import PinField from 'react-pin-field';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../../../components/Header/Header';
import main from '../../../components/Main.module.scss';
import { verify } from '../../../facades/password';
import extensionStore from '../../../helper/local-store';
import { clearStore, setIsCloseBrowser } from '../../../store/slices/user';

export default function WelcomeBack() {
    const [pin, setPin] = useState('');
    const navigate = useNavigate();
    const encryptedPin = useSelector((state) => state.user.pinCode);
    const dispatch = useDispatch();
    const ref = useRef('');

    async function handlerPin(e) {
        e.preventDefault();
        const isAuth = verify(pin, encryptedPin);
        if (isAuth) {
            await extensionStore.set('isCloseBrowser', false);
            dispatch(setIsCloseBrowser(false));
            navigate('/');
        }
    }

    async function exit() {
        await extensionStore.clear();
        dispatch(clearStore());
        navigate('/');
    }
    return (
        <div className="WelcomeBack">
            <Header />
            <div className={main.h1}>Welcome Back</div>
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
            <button onClick={handlerPin}>Continue</button>
            <button onClick={exit}>Exit</button>
        </div>
    );
}
