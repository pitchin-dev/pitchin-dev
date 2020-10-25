import React from 'react';

import './contacts.css';

const Contacts = () => {
    return (
        <aside className="info aside section">
            <div className="section-inner">
                <h2 className="heading">Location &amp; Contacts</h2>
                <div className="content">
                    <ul className="list-unstyled">
                        <li><i className="fa fa-map-marker mr-2"></i><span className="sr-only">Location:</span>Moscow, Russia</li>
                        <li><i className="fa fa-envelope-o mr-2"></i><span className="sr-only">Email:</span><a href="mailto:itchin.pavel@yandex.ru">itchin.pavel@yandex.ru</a></li>
                        <li><i className="fa fa-link mr-2"></i><span className="sr-only">Website:</span><a href="http://www.pitchin-dev.ru">http://www.pitchin-dev.com</a></li>
                        <li><i className="fas fa-mobile-alt mr-2"></i><span className="sr-only">Phone number:</span><a href="tel:+79259062231">+79259062231</a></li>
                    </ul>
                </div>                    
            </div>
        </aside>
    )
}

export {Contacts};