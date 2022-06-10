import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../../../components/Header/Header";
import main from "../../../components/Main.module.scss";
import extensionStore from "../../../helper/local-store";
import { setPhrase } from "../../../store/slices/user";
import confirm_phrase from "./ConfirmPhrase.module.css";

export default function ConfirmPhrase() {
    const phrase = useSelector((state) => state.user.phrase);
    const dispatch = useDispatch();

    const [randomPhrase] = useState(
        phrase
            .split(" ")
            .sort(() => Math.random() - 0.5)
            .map((item, index) => {
                return {
                    value: item,
                    disabled: false,
                };
            })
    );
    const [confirmPhrase, setConfirmPhrase] = useState(
        phrase.split(" ").map(() => "")
    );
    const selectWord = (e, i) => {
        const arr = confirmPhrase;
        arr[arr.indexOf("")] = e.target.innerHTML;
        randomPhrase[i].disabled = true;
        setConfirmPhrase([...arr]);
    };

    async function seedPhraseHD() {
        let Mnemonic = require("bitcore-mnemonic");
        let code = new Mnemonic(Mnemonic.phrase);
        let phrasePrivate = code.toHDPrivateKey();
        await extensionStore.set("phrase", phrasePrivate.xprivkey);
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
            e.target.innerHTML = "";
            arr[index] = "";
            setConfirmPhrase([...arr]);
        }
    };

    return (
        <div className={confirm_phrase.ConfirmPhrase}>
            <Header />
            <div className={main.h1}>Confirm your recovery passphrase</div>

            <div className={main.text}>
                Select each phrase to make sure it is correct.
            </div>

            <div className={confirm_phrase.phrase_container}>
                {confirmPhrase.map((item, index) => {
                    return (
                        <div
                            onClick={removeWord}
                            className={confirm_phrase.phrase_word}
                            key={index}
                        >
                            {item}
                        </div>
                    );
                })}
            </div>

            <div className={confirm_phrase.phrase_input}>
                {randomPhrase.map((item, index) => {
                    return (
                        <div
                            onClick={(e) => selectWord(e, index)}
                            className={
                                item.disabled
                                    ? confirm_phrase.phrase_word +
                                      " " +
                                      confirm_phrase.is_disabled
                                    : confirm_phrase.phrase_word
                            }
                            key={index}
                        >
                            {item.value}
                        </div>
                    );
                })}
            </div>
            <Link to="/greetings">
                <button
                    onClick={seedPhraseHD}
                    disabled={!(phrase === confirmPhrase.join(" "))}
                    className={confirm_phrase.btn}
                >
                    Continue
                </button>
            </Link>
        </div>
    );
}

//  retire later barrel captain fossil tackle dignity early evolve render glass cherry
