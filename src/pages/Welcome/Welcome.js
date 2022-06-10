import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import main from "../../components/Main.module.scss";
import welcome from "./Welcome.module.scss";

export default function Welcome() {
    return (
        <div className={welcome.Welcome}>
            <Header />
            <div className={main.h1}>Welcome to Chrome app!</div>
            <div className={welcome.desc}>
                Connecting you to Ethereum and the decentralized web...
                <br />
                We're glad to see you.
            </div>
            <Link to="/select-action" className={main.btn}>
                Start
            </Link>

            <Link to="/account" className={main.btn}>
                Account
            </Link>
        </div>
    );
}
// abstract volume inspire buyer elbow bike name enemy yellow grab often guitar

