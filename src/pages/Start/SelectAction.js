import { Link } from 'react-router-dom';
import './SelectAction.scss';

export default function SelectAction() {
    const startIcon = chrome.runtime.getURL("img/png/start-img.png");

    return (
        <div className="select-action">
            <div className="content">
                <img src={ startIcon } alt=""/>
                <div className="text_h1">
                    Privacy above all!
                </div>
                <div className="text_p">
                    We do not store your private keys, they do not leave your device
                </div>
            </div>

            <div className="btns">
                <Link to="/privacy" className="btn_main">
                    Create wallet
                </Link>
                <Link to="/privacy" className="btn_outlined">
                    Restore wallet
                </Link>
            </div>
        </div>
    );
}
