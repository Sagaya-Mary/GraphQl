
import React from "react";
import { Link } from 'react-router-dom';
import './Header.css';
class Header extends React.Component {
    render() {
        return (

            <div className="boundary">
                <h1 className="text">
                    Student Management
                </h1>
                <div className="btn">
                    <a className="link-btn" href="/all">
                        View
                    </a>
                    <a className="link-btn" href="/get">
                        Get
                    </a>
                </div>
            </div>
        );
    }
}
export default Header;