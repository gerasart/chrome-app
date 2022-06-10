import {MemoryRouter as Router, Route, Routes} from 'react-router-dom';
import Home from '../src/components/Home/Home';
import './App.css';
import Information from "./components/Information/Information";
import Layout from "./components/Layout/Layout";
import ImportPhrase from "./pages/ImportPhrase/ImportPhrase";
import PasswordCreate from "./pages/PasswordCreate/PasswordCreate";
import Privacy from "./pages/privacy/Privacy";
import ConfirmPhrase from "./pages/SeedPhrase/Confirm/ConfirmPhrase";
import SeedPhrase from "./pages/SeedPhrase/SeedPhrase";
import SelectAction from "./pages/SelectAction/SelectAction";
import Welcome from "./pages/Welcome/Welcome";
import Greetings from "./pages/SeedPhrase/Greetings/Greetings";
import Account from "./pages/Wallet/Account/Account.js";
import Settings from "./pages/Wallet/Settings/Settings";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Welcome/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/privacy" element={<Privacy/>}/>
                    <Route exact path="/create-password" element={<PasswordCreate/>}/>
                    <Route exact path="/seed-phrase" element={<SeedPhrase/>}/>
                    <Route exact path="/seed-phrase/confirm" element={<ConfirmPhrase/>}/>
                    <Route exact path="/greetings" element={<Greetings/>}/>
                    <Route exact path="/settings" element={<Settings/>}/>
                    <Route exact path="/import-with-seed-phrase" element={<ImportPhrase/>}/>
                    <Route exact path="/select-action" element={<SelectAction/>}/>
                    <Route exact path="/information" element={<Information/>}/>
                    <Route exact path="/account" element={<Account/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;

