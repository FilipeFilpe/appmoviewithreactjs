import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import pages
import Index from "./pages/home/index";
import About from "./pages/about/index";
import Header from "./pages/header/index";
import Footer from "./pages/footer/index";
import Movie from "./pages/movie/index";

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/movie/:id" component={Movie} />
            <Route path="/about" component={About} />
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;