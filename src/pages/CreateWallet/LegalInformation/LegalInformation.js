import {Link, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import "../../../assets/styles/global/_global.scss"
import './LegalInformation.scss';

export default function LegalInformation() {
    const navigate = useNavigate();

    const arrowLink = chrome.runtime.getURL("img/svg/arrow_link.svg");
    const arrowBack = chrome.runtime.getURL("img/svg/arrow_back.svg");
    const checkedIcon = chrome.runtime.getURL("img/svg/checked.svg")

    const [confirmAccept, setConfirmAccept] = useState(false);

    const handleOnChange = () => {
        setConfirmAccept(!confirmAccept);
    };

    return (
        <div className="privacy">
            <div className="content">
                <div onClick={() => navigate(-1)} className="header_back">
                    <img src={arrowBack} alt="" className="back"/>
                </div>
                <div className="content_text">
                    <div className="text_h1">Legal information</div>
                    <div className="text_p">
                        Check out the Terms of Service and Privacy Policy
                    </div>
                </div>

                <div className="links">
                    <Link to="/terms-of-use" className="links__item">
                        <p className="text_h3">Terms of Service</p>
                        <img src={arrowLink} alt=""/>
                    </Link>
                    <Link to="/terms-of-use" className="links__item">
                        <p className="text_h3">Privacy Policy</p>
                        <img src={arrowLink} alt=""/>
                    </Link>
                </div>
            </div>
            <div className="accept_btn">
                <div className="checkbox">
                    <input type="checkbox"
                           name="accepted"
                           id="check"
                           checked={confirmAccept}
                           onChange={handleOnChange}
                    />
                    <label htmlFor="check">
                        <img src={checkedIcon} alt=""/>
                    </label>
                    <div className="text_p">I agree to the Terms of Service and <br/> Privacy Policy</div>
                </div>
                {confirmAccept === false ? (
                    <div className="btn_disabled"> Accept </div>
                ) : confirmAccept === true ? (
                    <Link to="/create-wallet" >
                        <div className="btn_main">Accept</div>
                    </Link>
                ) : null}
            </div>
        </div>
    );
}
