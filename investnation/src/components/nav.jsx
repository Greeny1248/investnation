import { Link } from "react-router-dom";
export default function Nav() {
  return (
  
    <div className="Nav">
   
      <Link to="/crypto">
        <img src="https://cdn-icons-png.flaticon.com/512/1213/1213709.png"
        alt="go to crypto"
        className="cryptoButton"
        />
      </Link>
      <Link to="/stocks">
        <img src="https://cdn-icons-png.flaticon.com/512/831/831375.png"
        alt="go to stocks"
        className="stocksButton"
        />
      </Link>
    </div>
  );
}


