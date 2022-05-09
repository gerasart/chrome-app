import React from "react";
import privacy from './Privacy.module.scss'
import main from '../../components/Main.module.scss'
import {Link} from "react-router-dom";

export default function Privacy() {
    return (
        <div className={privacy.main}>
            <div className={main.h1}>
                Help us improve Chrome app
            </div>
            <div className={main.text}>
                Chrome app would like to collect basic usage data to better understand how our users interact with the extension. This data will be used to continually improve the usability and experience of using our product and the Ethereum ecosystem.
                <br/>
                <br/>
                Chrome app... <br/>
                Always allow you to opt out in Settings <br/>
                Send anonymized click and pageview events <br/>
                <br/>
                Never stores keys, addresses, transactions, balances, hashes or any personal data <br/>
                Never saves your full IP address <br/>
                Never sells data for profit. Never! <br/>
            </div>
            <div className={privacy.btns}>
                <Link to='/home' className={main.btn}>No, thanks</Link>
                <Link to='/home' className={main.btn}>I agree</Link>
            </div>
        </div>
    )
}