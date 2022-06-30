import clsx from 'clsx';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import '../../../../assets/styles/global/_global.scss';
import extensionStore from '../../../../store/local-store';
import { setPhrase } from '../../../../store/slices/user';
import './ConfirmPhrase.scss';

export default function ConfirmPhrase() {
    const phrase = useSelector((state) => state.user.phrase);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const arrowBack = chrome.runtime.getURL('img/svg/arrow_back.svg');

    const [randomPhrase] = useState(
        phrase
            .split(' ')
            .sort(() => Math.random() - 0.5)
            .map((item, index) => {
                return {
                    value: item,
                    disabled: false,
                };
            })
    );
    const [confirmPhrase, setConfirmPhrase] = useState(
        phrase.split(' ').map(() => '')
    );
    const selectWord = (e, i) => {
        const arr = confirmPhrase;
        arr[arr.indexOf('')] = e.target.innerHTML;
        randomPhrase[i].disabled = true;
        setConfirmPhrase([...arr]);
    };

    async function seedPhraseHD() {
        let Mnemonic = require('bitcore-mnemonic');
        let code = new Mnemonic(Mnemonic.phrase);
        let phrasePrivate = code.toHDPrivateKey();
        await extensionStore.set('phrase', phrasePrivate.xprivkey);
        dispatch(setPhrase(phrasePrivate.xprivkey));
    }

    const removeWord = (e) => {
        if (e.target.innerHTML) {
            const arr = confirmPhrase;
            const index = arr.indexOf(e.target.innerHTML);
            randomPhrase.forEach((item) => {
                if (item.value === e.target.innerHTML) {
                    item.disabled = false;
                }
            });
            const result = [
                ...arr.slice(0, index),
                ...arr.slice(index + 1),
                '',
            ];
            console.log(result);
            setConfirmPhrase([...result]);
        }
    };

    return (
        <div className="seed-phrase content_block">
            <div onClick={() => navigate(-1)} className="header_back">
                <img src={arrowBack} alt="" className="back" />
            </div>
            <div className="content_text">
                <div className="text_h1">Confirm recovery phrase</div>
                <div className="text_p">
                    Choose the words in the correct order
                </div>
            </div>

            <div className="phrase_container">
                {confirmPhrase.map((item, index) => {
                    return (
                        <div
                            className={clsx(
                                'phrase_container__item',
                                index === confirmPhrase.indexOf('') &&
                                    'phrase_container__item-focus',
                                item !== '' && 'phrase_container__item-active'
                            )}
                            key={index}
                        >
                            <div className="num"> {index + 1}</div>
                            <div onClick={removeWord} className="word">
                                {item}
                            </div>
                        </div>
                    );
                })}
            </div>

            {!(phrase === confirmPhrase.join(' ')) ? (
                <div className="phrase_input">
                    {randomPhrase.map((item, index) => {
                        return (
                            <div
                                onClick={(e) => selectWord(e, index)}
                                className={
                                    item.disabled
                                        ? 'phrase_word' + ' ' + 'is_disabled'
                                        : 'phrase_word'
                                }
                                key={index}
                            >
                                {item.value}
                            </div>
                        );
                    })}
                </div>
            ) : phrase === confirmPhrase.join(' ') ? (
                <Link to="/greetings">
                    <div onClick={seedPhraseHD} className="btn_main">
                        Continue
                    </div>
                </Link>
            ) : null}
        </div>
    );
}
