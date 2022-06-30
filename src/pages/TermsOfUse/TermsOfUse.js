import { useNavigate } from 'react-router-dom';
import "../../assets/styles/global/_global.scss"
import './TermsOfUse.scss';

export default function Privacy() {
    const navigate = useNavigate();
    const arrowBack = chrome.runtime.getURL("img/svg/arrow_back.svg");

    return (
        <div className="terms-of-use">
            <div className="content">
                <div onClick={() => navigate(-1)} className="header_back">
                    <img src={arrowBack} alt="" className="back"/>
                </div>

            </div>
        </div>
    );
}
