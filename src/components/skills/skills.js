import React, {useState} from 'react';
import {Collapse, Button, ButtonGroup, CardBody, Card, CardTitle, CardText} from 'reactstrap';

import './skills.css';

const Skills = () => {

    const [isOpenHtml, setIsOpenHtml] = useState(false);
    const [isOpenCss, setIsOpenCss] = useState(false);
    const [isOpenJs, setIsOpenJs] = useState(false);
    const [isOpenReact, setIsOpenReact] = useState(false);
    const toggleHtml = () => setIsOpenHtml(!isOpenHtml);
    const toggleCss = () => setIsOpenCss(!isOpenCss);
    const toggleJs = () => setIsOpenJs(!isOpenJs);
    const toggleReact = () => setIsOpenReact(!isOpenReact);

    return (
        <aside className="skills aside section">
            <div className="section-inner">
                <h2 className="heading">Skill Set</h2>
                <div className="content">
                                        
                    <div className="skillset">
                        <ButtonGroup>
                            <Button color="danger" onClick={toggleHtml} style={{ marginBottom: '1rem' }}>HTML</Button>
                            <Button color="success" onClick={toggleCss} style={{ marginBottom: '1rem' }}>CSS</Button>
                            <Button color="warning" onClick={toggleJs} style={{ marginBottom: '1rem' }}>JS</Button>
                            <Button color="primary" onClick={toggleReact} style={{ marginBottom: '1rem' }}>React</Button>
                        </ButtonGroup>
                        
                        <Collapse isOpen={isOpenHtml}>
                            <Card>
                                <CardBody>
                                    <CardTitle><h3>HTML</h3></CardTitle>
                                    <CardText>HTML5 semantic markup. PUG preprocessor.</CardText>
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpenCss}>
                            <Card>
                                <CardBody>
                                    <CardTitle><h3>CSS</h3></CardTitle>
                                    <CardText>CSS3, flexbox and grid layout, css-animations. SASS, SCSS, LESS preprocessors. BEM methodology.</CardText>
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpenJs}>
                            <Card>
                                <CardBody>
                                    <CardTitle><h3>JavaScript</h3></CardTitle>
                                    <CardText>ES6+ standard. Async/await, fetch API, rest/spread, classes and all the other features of JS</CardText>
                                </CardBody>
                            </Card>
                        </Collapse>
                        <Collapse isOpen={isOpenReact}>
                            <Card>
                                <CardBody>
                                    <CardTitle><h3>ReactJS</h3></CardTitle>
                                    <CardText>Functional and class components. Lifecycle methods. React Hooks. Context API, Redux. Styled-components, Reactstrap.</CardText>
                                </CardBody>
                            </Card>
                        </Collapse>
                        
                    </div>              
                </div>  
            </div>                 
        </aside>
    )
}

export {Skills};