
import React from 'react';
import Home from '../Component/Header'
import ViewStudent from '../Component/ViewStudent'
import SingleUser from '../Component/SingleUser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
class RouterPath extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/all" element={<ViewStudent />} />
                        <Route path="/get" element={<SingleUser/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default RouterPath;