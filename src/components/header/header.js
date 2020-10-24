import React from 'react';

import './header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        <img className="profile-image img-responsive" src={process.env.PUBLIC_URL + 'profile.jpg'} alt="Pavel Itchin" />
                    </div>                       
                    
                    <div className="profile-content col-md-8 px-md-5">
                        <h1 className="name">Pavel Itchin</h1>
                        <h2 className="desc">Junior Frontend Developer</h2>   
                        <ul className="social list-inline">
                            <li className="list-inline-item"><a href="https://vk.com/itchin_pavel" target="_blank" rel="noopener noreferrer"><i className="fa fa-vk"></i></a></li>                   
                            <li className="list-inline-item"><a href="https://www.instagram.com/itchin_pavel/" target="_blank" rel="noopener noreferrer"><i className="fa fa-instagram"></i></a></li>
                            <li className="list-inline-item"><a href="https://twitter.com/pitchin_dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a></li>
                            <li className="list-inline-item"><a href="https://www.facebook.com/pavel.itchin" target="_blank" rel="noopener noreferrer"><i className="fa fa-facebook"></i></a></li>                  
                            <li className="list-inline-item last-item"><a href="https://github.com/pitchin-dev" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a></li>                 
                        </ul> 
                    </div>
                    <div className="col-md-2">
                        <a href="https://t.me/itchin_pavel" target="_blank" rel="noopener noreferrer"><button className="btn btn-primary"><i className="fa fa-paper-plane"></i>Contact Me</button></a>
                    </div>             
                </div>
            </div>         
        </header>
    )
}

export {Header};