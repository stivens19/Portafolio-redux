import React from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import MainPage from './../components/Main/MainPage';
import PortafolioPage from './../components/Portafolio/PortafolioPage';
import Navbar from './../components/ui/Navbar';
const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <div className="container mt-2">
                <Switch>
                    <Route exact path="/inicio" component={MainPage} />
                    <Route exact path="/portafolio" component={ PortafolioPage } />
                    <Redirect to="/inicio" />
                </Switch>
            </div>

        </Router>
    );
}

export default AppRouter;
