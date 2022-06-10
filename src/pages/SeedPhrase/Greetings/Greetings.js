import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import main from "../../../components/Main.module.scss";
import { setIsAuth } from "../../../store/slices/user";
import greetings from "./Greetings.module.scss";

export default function Greetings() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setIsAuth(true));
    }, [dispatch]);
    return (
        <div className={greetings.Greetings}>
            <div className={greetings.img}>🎉</div>
            <div className={main.h1}>Greetings</div>
            <div className={main.text}>
                Safe Storage Tips • Save your backup in multiple locations. •
                Never share this phrase with anyone. • Beware of phishing!
                MetaMask will never unexpectedly ask you for your recovery
                passphrase. • If you need to back up your passphrase again for
                recovery, you can find this feature under "Settings" -&gt;
                "Security". • If you have any questions or see anything
                suspicious, please contact our support team here. *Just remember
                that MetaMask cannot recover the recovery passphrase. Find out
                more.
            </div>
            <Link to="/">
                <div className={greetings.btn}>Next</div>
            </Link>
        </div>
    );
}
