import React from 'react';
import styles from './Home.module.scss';
import {Link} from "react-router-dom";

/* global chrome */
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
        //     console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
        // });
    }

    testClick() {
        chrome.storage.local.set({key: 'fdsfmdskfldmsfldmfdslk2'}, function () {
            console.log('Value is set to ' + 'fdsfmdskfldmsfldmfdslk2');
        });
        chrome.storage.local.get(['key'], function (result) {
            console.log('get ',result.key);
        });
    }

    render() {
        return (
            <div className={styles.Home}>
                <span onClick={() => this.testClick()}>Home2 Component</span>
                <Link to="/Information">Information</Link>
            </div>
        );
    }
}

export default Home;
