import React from 'react';
import ReactDOM, { render } from 'react-dom';

import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';

render(
    (
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    ),
    document.getElementById('root')
);
