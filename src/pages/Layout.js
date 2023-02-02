import "../css/Layout.css"
import logo from "../logo.svg";
import { Outlet, Link } from "react-router-dom";

export default function Layout () {
    return (
        <div>
            <nav className="navbar">
                <div className="title">
                    <img className="logo" src={logo} alt="app logo"/>
                    <h1 className="heading">Bro</h1>
                </div>
                <ul className="links">
                    <li>
                    <Link className="pagelink" to="/">Home</Link>
                    </li>
                    <li>
                    <Link className="pagelink" to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                    <Link className="pagelink" to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
    
            <Outlet />
        </div>
    )
};
  