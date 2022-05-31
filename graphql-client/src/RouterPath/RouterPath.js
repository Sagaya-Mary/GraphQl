
import React from 'react';
import Home from '../Component/Home'
import ViewStudent from '../Component/ViewStudent'
import SingleUser from '../Component/SingleUser'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddStudent from '../Component/AddStudent';
class RouterPath extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/get" element={<ViewStudent />} />
                        <Route path="/byid" element={<SingleUser/>} />
                        <Route path="/add" element={<AddStudent/>} />
                    </Routes>
                </Router>
            </div>
        );
    }
}

export default RouterPath;