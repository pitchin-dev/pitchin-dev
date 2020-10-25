import React from 'react';

import './project-list.css';

const ProjectList = () => {

    let maxId = 100;

    const data = [
        {
            id: maxId++,
            url: 'https://pitchin-dev.github.io/tech-design-grid-template/',
            imageUrl: 'tech-design-grid.jpg',
            title: 'Tech-design - CSS-grid template',
            description: 'One of my latest projects. Simple and beautiful grid template. Looks pretty modern :)'
        },
        {
            id: maxId++,
            url: 'https://pitchin-dev.github.io/ready-grid/',
            imageUrl: 'ready-grid.jpg',
            title: 'Ready - responsive CSS-grid template',
            description: 'Just a small Adobe XD css-grid practicing template. Simple and beutiful.'
        },
        {
            id: maxId++,
            url: 'https://pitchin-dev.github.io/shopy-flex/',
            imageUrl: 'shopy-flex.jpg',
            title: 'Shopy - CSS-flex template',
            description: 'Sports shop e-commerce flexbox template. Bright and pretty looking.'
        },
        {
            id: maxId++,
            url: 'https://pitchin-dev.github.io/waxom/',
            imageUrl: 'waxom-flex.jpg',
            title: 'Waxom - CSS-flex template',
            description: 'Originally this is the Wordpress theme layout. Pretty good looking, beautiful color scheme.'
        },
        {
            id: maxId++,
            url: 'http://wpcourse.pitchin-dev.ru/',
            imageUrl: 'childhood-wp.jpg',
            title: 'Childhood - Wordpress theme',
            description: 'Pretty good looking Wordpress theme with the various kind of plugins in it - forms, custom field, image optimization, SEO etc.'
        },
        {
            id: maxId++,
            url: 'https://pitchin-dev.github.io/new-providence/',
            imageUrl: 'new-providence-flex.jpg',
            title: 'New Providence - CSS-flex template',
            description: 'Cool white PSD layout using the animations.css and wow.js libraries.'
        }
    ];

    const mainItem = data.slice(0,1).map((item) => {
        return (
            <div className="item featured text-center" key={item.id}>
                <h3 className="title"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
                <h4 className="summary">My Latest Project</h4>
                <div className="featured-image">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                    <img className="img-fluid project-image" src={process.env.PUBLIC_URL + `${item.imageUrl}`} alt="project name" />
                    </a>
                    <div className="ribbon">
                        <div className="text">New</div>
                        </div>
                    </div>
                    
                <div className="desc text-left">                                    
                    <p>{item.description}</p>
                </div>                          
            </div>               
        )
    });

    const items = data.slice(1).map((item) => {
        return (
            <div className="item row" key={item.id}>
                <a className="col-md-4 col-sm-4 col-xs-12" href={item.url} target="_blank" rel="noopener noreferrer">
                <img className="img-fluid project-image" src={process.env.PUBLIC_URL + `${item.imageUrl}`} alt="project name" />
                </a>
                <div className="desc col-md-8 col-sm-8 col-xs-12">
                    <h3 className="title"><a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a></h3>
                    <p>{item.description}</p>
                    <p><a className="more-link" href={item.url} target="_blank" rel="noopener noreferrer"><i className="fa fa-external-link"></i> Find out more</a></p>
                </div>                          
            </div>
        )
    });

    return (
        <div className="latest section">
            <div className="section-inner">
                <h2 className="heading">My Projects</h2>
                <div className="content">

                    {mainItem}

                    <hr className="divider" />

                    {items}
                    
                </div> 
            </div>
        </div>
    )
}

export {ProjectList};