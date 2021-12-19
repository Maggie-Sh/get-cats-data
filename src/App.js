import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Covid from "./components/Covid";
import Total from "./components/Total";
import ByCountries from "./components/ByCountries";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div>
          <Link to="/" className="navbar_item">
            covid19 desease
          </Link>
        </div>
        <div>
          <Link to="/total" className="navbar_item">
            total data
          </Link>
        </div>
        <div>
          <Link to="/bycountries" className="navbar_item">
            by countries
          </Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Covid />} />
        <Route path="/total" element={<Total />} />
        <Route path="/bycountries" element={<ByCountries />} />
      </Routes>
    </Router>
  );
}

export default App;
