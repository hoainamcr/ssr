import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Add fixed header
        let $header = document.getElementById('header');
        let $scrollTopBtn = document.getElementById('scrollTopBtn');

        window.addEventListener('scroll', () => {
            let supportPageOffset = window.pageXOffset !== undefined;
            let isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
            let scroll = {
                x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
                y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
            };
            if(scroll.y > 0){
                $header.className = "fixed";
            } else {
                $header.className = "";
            }

            if(scroll.y > 200) {
                $scrollTopBtn.className += "show-icon";
            } else {
                $scrollTopBtn.className -= "show-icon";
            }
        })
    }

    render(){
        return (
            <header id="header">
                <div className="container-fluid">
                    <div className="d-flex justify-content-start align-self-center">
                        <a href="#">
                        <img className="header-logo" src={require("../assets/images/logo.svg")} />
                        </a>
                        <div className="search-header mr-auto" >
                            <i className="fa fa-search" aria-hidden="true"></i>
                            <input type="text" placeholder="What are you looking for?" />
                        </div>

                        <nav>
                            <ul className="clearfix nav-menu">
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Car <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <ul className="sub">
                                        <li>
                                            <a href="#">Home home</a>
                                        </li>
                                        <li>
                                            <a href="#">Home</a>
                                        </li> 
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Motor <i className="fa fa-angle-down" aria-hidden="true"></i></a>
                                    <ul className="sub">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
};
