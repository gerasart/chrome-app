import React from "react";
import welcome from './Welcome.module.scss';
import {Link} from "react-router-dom";
import main from "../../components/Main.module.scss";
// import SelectAction from "../SelectAction/SelectAction";

export default function Welcome() {
    return (
        <div className={welcome.Welcome}>
            <div className={main.h1}>
                Welcome to Chrome app!
            </div>
            <div className={welcome.desc}>
                Connecting you to Ethereum and the decentralized web...
                <br/>
                We're glad to see you.
            </div>
            <Link to="/select-action" className={main.btn}>
                Start
            </Link>

            {/*<Link to="/Home" className={main.btn}>*/}
            {/*    Start*/}
            {/*</Link>*/}

        </div>
    )
}
