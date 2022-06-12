import { MemoryRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../src/components/Home/Home";
import "./App.css";
import Information from "./components/Information/Information";
import Layout from "./components/Layout/Layout";
import useAuth from "./hooks/use-auth";
import useIsCloseBrowser from "./hooks/use-is-close-browser";
import ImportPhrase from "./pages/ImportPhrase/ImportPhrase";
import PasswordCreate from "./pages/PasswordCreate/PasswordCreate";
import Privacy from "./pages/Privacy/Privacy";
import ConfirmPhrase from "./pages/SeedPhrase/Confirm/ConfirmPhrase";
import Greetings from "./pages/SeedPhrase/Greetings/Greetings";
import SeedPhrase from "./pages/SeedPhrase/SeedPhrase";
import SelectAction from "./pages/SelectAction/SelectAction";
import Account from "./pages/Wallet/Account/Account.js";
import Settings from "./pages/Wallet/Settings/Settings";
import WelcomeBack from "./pages/Wallet/WelcomeBack/WelcomeBack";
import Welcome from "./pages/Welcome/Welcome";

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
                            <Route exact path="/" element={<Welcome />} />
                            <Route exact path="/home" element={<Home />} />
                            <Route
                                exact
                                path="/privacy"
                                element={<Privacy />}
                            />
                            <Route
                                exact
                                path="/create-password"
                                element={<PasswordCreate />}
                            />
                            <Route
                                exact
                                path="/seed-phrase"
                                element={<SeedPhrase />}
                            />
                            <Route
                                exact
                                path="/seed-phrase/confirm"
                                element={<ConfirmPhrase />}
                            />
                            <Route
                                exact
                                path="/import-with-seed-phrase"
                                element={<ImportPhrase />}
                            />
                            <Route
                                exact
                                path="/select-action"
                                element={<SelectAction />}
                            />
                            <Route
                                exact
                                path="/information"
                                element={<Information />}
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
