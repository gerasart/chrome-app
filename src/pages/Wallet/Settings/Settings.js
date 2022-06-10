import React from "react";
import Header from "../../../components/Account/Header/Header";
import main from '../../../components/Main.module.scss'
import './Settings.scss'
import {Link} from "react-router-dom";

export default function Settings() {
    return (
        <div className={main}>
            <Header/>
            <div className="settings_title">
                <div className="text">
                    Settings
                </div>
                <Link to="/account">
                    <div className="close">
                        x
                    </div>
                </Link>
            </div>
            <div className={main.AccountLayout}>
                <div className="settings">

                    <div className="settings_item">
                        <div className="name">General</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">Advanced</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">Contacts</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">Security & Privacy</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">Alerts</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">Networks</div>
                        <div className="arrow"> > </div>
                    </div>
                    <div className="settings_item">
                        <div className="name">About</div>
                        <div className="arrow"> > </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
