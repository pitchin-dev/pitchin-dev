import React from 'react';
import {Header} from '../header';
import {About} from '../about';
import {Contacts} from '../contacts';
import {ProjectList} from '../project-list';
import {Certificates} from '../certificates';
import {Skills} from '../skills';
import {Languages} from '../languages';
import {Widget} from '../widget';
import {Credits} from '../credits';
import {BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import './app.css';


const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="container sections-wrapper">
                <div className="row">
                    <div className="primary col-xl-8 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <About />
                        <ProjectList />
                        <Certificates />
                    </div>
                    <div className="secondary col-xl-4 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <Contacts />
                        <Skills />
                        <Languages />
                        <Credits />
                    </div>
                </div>
            </div>
        </div>   
    )
}

export {App};