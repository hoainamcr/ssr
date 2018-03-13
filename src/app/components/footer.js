import React from 'react';
import { render } from 'react-dom';
export default Footer => {
    return (
        <footer id="footer" className="badge-primary">
            <div>
                <div className="container" >

                </div>
            </div>
            <div class="footer-social">
                <div className="container d-flex justify-content-start align-self-center" >
                        <div className="mr-auto">&copy; Hoài nam 2018</div>
                        <a>
                            <i className="fa fa-facebook" aria-hidden="true"></i>   
                        </a>

                        <a>
                            <i class="fa fa-youtube" aria-hidden="true"></i>
                        </a>

                        <a>
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                        </a>
                </div>
            </div>

            <div id="scrollTopBtn" className="badge-primary">
                <i class="fa fa-angle-up" aria-hidden="true"></i>
            </div>
        </footer>
    )
};
