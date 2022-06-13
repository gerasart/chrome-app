import React from 'react';
import { Link } from 'react-router-dom';
import main from '../Main.module.scss';
import styles from './Home.module.scss';
// let Mnemonic = require('bitcore-mnemonic');
// let code = new Mnemonic();
// let phrase = code.toString();

// /* global chrome */
class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
        //     console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
        // });
        // this.mnemonicTest();
    }

    // testClick() {
    //     chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
    //         console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
    //     });
    //     chrome.storage.local.get(['key'], function (result) {
    //         console.log('get ',result.key);
    //     });
    // }

    // mnemonicTest() {
    // const bitcore = require("bitcore-lib");
    // const transaction = new bitcore.Transaction();
    // let Mnemonic = require('bitcore-mnemonic');
    // let code = new Mnemonic(Mnemonic.Words.ENGLISH);
    // code.toString();
    // let xpriv = code.toHDPrivateKey();
    // console.log(code.toString());
    // console.log(xpriv);

    // console.log(code.toString());
    // }

    render() {
        return (
            <div className={styles.Home}>
                <div className={main.content}>
                    <div className={main.h1}>Welcome back!</div>
                    <div className={main.h3}>
                        Decentralized network is waiting for you!
                    </div>
                    <div className={main.input}>
                        <input type="text" placeholder="Password" />
                        <Link to="/Information" className={main.btn}>
                            Unlock
                        </Link>
                    </div>
                    <Link to="/Information">
                        <div className={styles.forgot}>Forgot password?</div>
                    </Link>

                    <div className={main.h4}>
                        Need help? You can contact support
                    </div>
                    {/*<span onClick={() => this.testClick()}>Home2 Component</span>*/}
                    <Link to="/Information">Information</Link>
                </div>
            </div>
        );
    }
}

export default Home;
