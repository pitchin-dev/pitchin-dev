import React from 'react';

import './languages.css';

const Languages = () => {
    return (
        <aside className="languages aside section">
            <div className="section-inner">
                <h2 className="heading">Languages</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li className="item">
                            <span className="title"><strong>Russian:</strong></span>
                            <span className="level">Native Speaker <br className="visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> </span>
                        </li>
                        <li className="item">
                            <span className="title"><strong>English:</strong></span>
                            <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star"></i> <i className="fa fa-star-half"></i></span>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export {Languages};