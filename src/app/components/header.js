import React from 'react';
import { render } from 'react-dom';

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="container">
                    <img className="header-logo" src={require("../assets/images/logo.svg")} />
                    <input type="text"  />
                    <ul>
                        <li>
                            <a>Home</a>
                        </li>
                        <li>
                            <a>Car</a>
                        </li>
                        <li>
                            <a>Motor</a>
                        </li>
                        <li>
                            <a>About</a>
                        </li>
                        <li>
                            <a>Contact</a>
                        </li>
                    </ul>
                </div>
            </header>
        )
    }
};
