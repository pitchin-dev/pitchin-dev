import React from 'react';

import './credits.css';

const Credits = () => {
    return (
        <aside className="credits aside section">
            <div className="section-inner">
                <h2 className="heading">Credits</h2>
                <div className="content">
                    <p>This web page was made using ReactJS, Bootstrap 4 and Font Awesome sprites.</p>
                    <ul className="list-unstyled">
                        <li><a href="http://getbootstrap.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link"></i> Bootstrap</a></li>
                        <li><a href="http://fortawesome.github.io/Font-Awesome/" target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link"></i> FontAwesome</a></li>
                        <li>Profile image made by me.</li>
                    </ul>                
                    <hr/>                 
                        <p>This responsive portfolio template is handcrafted by UX designer <a href="https://www.linkedin.com/in/xiaoying" target="_blank" rel="noopener noreferrer">Xiaoying Riley</a> at <a href="http://themes.3rdwavemedia.com/" target="_blank" rel="noopener noreferrer">3rd Wave Media</a></p>
                </div>
            </div>
        </aside>
    )
}

export {Credits};