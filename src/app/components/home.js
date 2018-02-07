import React from 'react';
import { render } from 'react-dom';

export default Home => {
    return (
        <main>
            <p>Home Pagr</p>
            <img src={require("../assets/images/kiwi.svg")} />
            <img src={require("../assets/images/loading.gif")} />
            <img src={require("../assets/images/png.png")} />
        </main>
    )
};
