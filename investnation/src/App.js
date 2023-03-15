import Nav from "./components/nav"
// import Crypto from "./components/crypto"
import Stocks from "./components/stocks"
import './App.css';
import { Ticker } from "./components/ticker";
import { Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
         <Link to="/">
        <img
          src="https://cdn-icons-png.flaticon.com/512/25/25694.png"
          alt="go home"
          className="homeButton"
        />
      </Link>
      <h1>Investnation</h1>
      <Nav/>

      <Routes>

      <Route path="/stocks" element={<Stocks />}></Route>
      <Route path="/crypto" element={<Ticker />}></Route>
      </Routes>

    </div>
  );
}

export default App;
