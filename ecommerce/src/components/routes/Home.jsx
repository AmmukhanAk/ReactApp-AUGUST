import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import LandingPage from './LandingPage';
import { TopNav } from './TopNav';
import { Products } from "./Products";
import { Cart } from "./Cart"
import { Login } from './Login';
import { AboutUS } from './AboutUS';
import { Contact } from './Contact';
import { FooterM } from "./FooterM"


const Home = () => {
    return (
        <div>
            <Router path="/TopNav">
                <TopNav />
                <Switch>
                    <div>
                        <Route path="/" component={LandingPage} />
                        <Route path="/products" component={Products} />
                        <Route path="/contact" component={Contact} />
                        <Route path="about" component={AboutUS} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/login" component={Login} />
                    </div>
                </Switch>
                <FooterM />
            </Router>
        </div>
    );
};

export default Home;