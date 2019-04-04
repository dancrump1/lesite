import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <div className="Hea">
            <nav>
                <ul style={{ textAlign: "center" }}>
                    <li>
                        <Link to='/'>Landing</Link>
                    </li>

                    <li style={{ marginLeft: "70px" }}>
                        <Link to='/Paintball'>Paintball</Link>
                    </li>
                    <li style={{ marginLeft: "70px" }}>
                        <Link to='/YTTW'>YT/TW</Link>
                    </li>
                    <li style={{ marginLeft: "70px" }}>
                        <Link to='/code'>Coding</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;