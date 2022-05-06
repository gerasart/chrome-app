import {MemoryRouter as Router, Route, Routes} from 'react-router-dom'
import Home from '../src/components/Home/Home'
import Information from "./components/Information/Information";
import './App.css';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path="/information" element={<Information/>}/>
          </Routes>
      </Router>
  );
}

export default App;
