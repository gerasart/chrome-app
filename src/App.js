import {MemoryRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/components/Home/Home'
import Information from "./components/Information/Information";
import './App.css';
import Layout from "./components/Layout/Layout";
import Welcome from "./pages/welcome-page/Welcome";
import SelectAction from "./pages/select-action/SelectAction";
import Privacy from "./pages/privacy/Privacy";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" element={<Welcome/>}/>
                    <Route exact path="/home" element={<Home/>}/>
                    <Route exact path="/privacy" element={<Privacy/>}/>
                    <Route exact path="/select-action" element={<SelectAction/>}/>
                    <Route exact path="/information" element={<Information/>}/>
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
