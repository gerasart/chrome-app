import React from 'react';
import phrase from './ImportPhrase.module.css'
import main from '../../components/Main.module.scss'
// const Mnemonic = require('bitcore-mnemonic');
// const code = new Mnemonic(Mnemonic.Words.ENGLISH);
// code.toString();



export default function ImportPhrase() {
    return (
        <div className={phrase.Phrase}>
            <div className={main.h1}>
                Import wallet with recovery passphrase
            </div>
            <div className={main.text}>
                Only the first account in this wallet is automatically loaded. To add additional accounts, after completing this process, click on the drop-down menu and then select "Create Account".
            </div>
            <div className={phrase.secret}>
                <div className={phrase.text}>
                    Recovery passphrase
                </div>
                <select className={phrase.select}>
                    <option value="12">
                        I have a 12 words phrase
                    </option>
                    <option value="15">
                        I have a 15 words phrase
                    </option>
                    <option value="18">
                        I have a 18 words phrase
                    </option>
                </select>
            </div>
            <div className={phrase.info}>
                You can paste your entire secret recovery phrase into any field
            </div>
        </div>
    )
}
