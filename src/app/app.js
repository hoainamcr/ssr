import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { Button } from 'reactstrap';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';

const css = require('./assets/styles.scss');

render(
    (
        <div>
            <Header />
            {/* <Header />
            <Button color="danger">Danger!</Button>
            <Home />
            <Footer /> */}
            <Home />
            <Footer />
        </div>
    ),
    document.getElementById('root')
);
