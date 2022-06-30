import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import "./App.css";
import Layout from "./components/Layout/Layout";
import useAuth from "./hooks/use-auth";
import useIsCloseBrowser from "./hooks/use-is-close-browser";
import PasswordCreate from "./pages/CreateWallet/PasswordCreate/PasswordCreate";
import LegalInformation from "./pages/CreateWallet/LegalInformation/LegalInformation";
import ConfirmPhrase from "./pages/CreateWallet/SeedPhrase/Confirm/ConfirmPhrase";
import Greetings from "./pages/CreateWallet/SeedPhrase/Greetings/Greetings";
import SeedPhrase from "./pages/CreateWallet/SeedPhrase/SeedPhrase";
import SelectAction from "./pages/Start/SelectAction";
import Account from "./pages/Wallet/Account/Account.js";
import Settings from "./pages/Wallet/Settings/Settings";
import WelcomeBack from "./pages/Wallet/WelcomeBack/WelcomeBack";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse"

// import Welcome from "./pages/Welcome/Welcome";

function App() {
    const isAuth = useAuth();
    const isCloseBrowser = useIsCloseBrowser();

    return (
        <Router>
            <Layout>
                <Routes>
                    {isAuth ? (
                        isCloseBrowser ? (
                            <Route exact path="/" element={<WelcomeBack />} />
                        ) : (
                            <>
                                <Route exact path="/" element={<Account />} />
                                <Route
                                    exact
                                    path="/settings"
                                    element={<Settings />}
                                />
                            </>
                        )
                    ) : (
                        <>
                            <Route exact path="/" element={<SelectAction />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route
                                exact
                                path="/privacy"
                                element={<LegalInformation />}
                            />
                            <Route
                                exact
                                path="/create-wallet"
                                element={<PasswordCreate />}
                            />
                            <Route
                                exact
                                path="/restore-wallet"
                                element={<PasswordCreate />}
                            />
                            <Route
                                exact
                                path="/create-wallet/seed-phrase"
                                element={<SeedPhrase />}
                            />
                            <Route
                                exact
                                path="/seed-phrase/confirm"
                                element={<ConfirmPhrase />}
                            />
                            <Route
                                exact
                                path="/terms-of-use"
                                element={<TermsOfUse/>}
                            />
                        </>
                    )}
                    <Route exact path="/greetings" element={<Greetings />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
