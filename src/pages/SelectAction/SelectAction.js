import React from "react";
import action from './SelectAction.module.scss'
import main from "../../components/Main.module.scss";
import {Link} from "react-router-dom";

export default function SelectAction() {
    return (
        <div className={action.Action}>
            <div className={main.h1}>
                First time in Chrome app?
            </div>

            <div className={action.select}>
                <div className={action.item}>
                    <div className={main.h2}>
                        No, I already have a recovery passphrase
                    </div>
                    <div className={main.h4}>
                        Import an existing wallet using the initial recovery passphrase
                    </div>
                    <Link to="/import-with-seed-phrase" className={main.btn}>
                        Import wallet
                    </Link>
                </div>
                <div className={action.item}>
                    <div className={main.h2}>
                        Yes, let's set it up!
                    </div>
                    <div className={main.h4}>
                        This will create a new wallet and recovery passphrase
                    </div>
                    <Link to="/create-password" className={main.btn}>
                        Create wallet
                    </Link>
                </div>
            </div>
        </div>
    )
}
