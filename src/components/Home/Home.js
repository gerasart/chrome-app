import React from 'react';
import styles from './Home.module.scss';
import main from '../Main.module.scss'
import {Link} from "react-router-dom";

// /* global chrome */
class Home extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        // chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
        //     console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
        // });
    }

    // testClick() {
    //     chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
    //         console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
    //     });
    //     chrome.storage.local.get(['key'], function (result) {
    //         console.log('get ',result.key);
    //     });
    // }

    render() {
        return (
            <div className={styles.Home}>
                <div className={main.content}>
                    <div className={main.h1}>
                        Welcome back!
                    </div>
                    <div className={main.h3}>
                        Decentralized network is waiting for you!
                    </div>
                    <div className={main.input}>
                        <input type="text" placeholder="Password"/>
                        <Link to="/Information" className={main.btn}>
                            Unlock
                        </Link>
                    </div>
                    <Link to="/Information">
                        <div className={styles.forgot}>
                            Forgot password?
                        </div>
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
