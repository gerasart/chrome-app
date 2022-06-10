import React, {useState} from "react" ;
import './Header.scss';
import {Link} from "react-router-dom";

export default function Header() {
    const [isAccountShow, setIsAccountShow] = useState(false);
    return (
        <div className="account_header">
            <div className="logo">
                <Link to="/account">
                    <img src="../../../assets/images/png/logoMetamask.png" alt="logo"/>
                </Link>
            </div>
            <div className="controls">
                <div className="networks">
                    <div className="networks_circle">

                    </div>
                    <div className="networks_name">
                        Ethereum Mainnet
                    </div>
                    >
                </div>
                <div
                    className="account_avatar"
                    onClick={() => setIsAccountShow(!isAccountShow)}
                >
                </div>

                {isAccountShow &&
                    <div className="account_menu">
                        <div className="account_menu--title">
                            My accounts
                        </div>
                        <div className="account_menu--accounts">
                            <div className="account_menu--accounts_item">
                                <div className="active">
                                    +
                                </div>
                                <div className="account_name">
                                    <div className="name">Account1</div>
                                    <div className="coins">0 ETH</div>
                                </div>
                            </div>
                        </div>
                        <div className="account_menu--item"
                             onClick={() => setIsAccountShow(false)}
                        >
                            Create Account
                        </div>
                        <div className="account_menu--item"
                             onClick={() => setIsAccountShow(false)}
                        >
                            Import Account
                        </div>
                        <div className="account_menu--item"
                             onClick={() => setIsAccountShow(false)}
                        >
                            Connect Hardware Wallet
                        </div>
                        <div className="account_menu--item border"
                             onClick={() => setIsAccountShow(false)}
                        >
                            Support
                        </div>
                        <Link to="/settings">
                            <div className="account_menu--item"
                                 onClick={() => setIsAccountShow(false)}
                            >
                                Settings
                            </div>
                        </Link>
                    </div>
                }
            </div>
        </div>
    )
}
