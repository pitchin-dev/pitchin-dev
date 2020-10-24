import React from 'react';

import './about.css';

const About = () => {
    return (
        <section className="about section">
            <div className="section-inner">
                <h2 className="heading">About Me</h2>
                <div className="content">

                    <p>
                        Hello, let me introduce myself. My name is Pavel, I'm 28 years old. 
                        Living my whole life in Moscow. This is the city that I love so much.
                    </p>

                    <p>
                        I have a dream to become frontend developer.
                    </p>
    
                    <p>
                        My personal interests and hobbies, besides frontend development is rock music, 
                        European football and urbanistics. Love to discover new places in my adorable city of Moscow 
                        and aknowledge new things about the places that I already know.
                    </p>
                    
                </div>
            </div>                
        </section>
    )
}

export {About};