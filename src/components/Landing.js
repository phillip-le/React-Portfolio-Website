import React from "react";
import {Spring} from 'react-spring/renderprops';


const Landing = () => {
    return (
        <Spring
            from={{opacity: 0}}
            to={{opacity: 1}}
            config={{duration: 600}}
        >
            {props => (
                <div className="landing-text" style={props}>
                    <h1>Phillip Le</h1>
                    <h6>Student Back End Developer and Data Engineer</h6>
                </div>
            )}
        </Spring>
    );
};

export default Landing;
