import React from "react";
import { Link } from 'react-router-dom';
import '../App.css';

function Nav() {
    return (
        <div className="Hea">
            <nav>
                <ul style={ { textAlign: "center" } }>
                    <li>
                        <Link to='/'>Landing</Link>
                    </li>

                    <li>
                        <Link to='/Paintball'>Paintball</Link>
                    </li>
                    <li>
                        <Link to='/YTTW'>YT/TW</Link>
                    </li>
                    <li>
                        <Link to='/code'>Coding</Link>
                    </li>
                    <li>
                        <Link to='/Nope'>No route here, example of 404</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;