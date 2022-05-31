
import React from "react";
import { Link } from 'react-router-dom';
import './Header.css'
class Header extends React.Component {
    render() {
        return (

            <div className="hello">
                <h1 className="text">
                    Student Management
                </h1>
                <div>

                    <a className="link-btn" href="/">
                        Home
                    </a>
                    <a className="link-btn" href="/add">
                        Add
                    </a>
                    <a className="link-btn" href="/get">
                        View
                    </a>
                    <a className="link-btn" href="/byid">
                        Get
                    </a>

                </div>



            </div>
        );
    }
}
export default Header;