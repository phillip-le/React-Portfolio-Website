import React from "react";

const SkillProficiency = ({name, percentage}) => {
    const [style, setStyle] = React.useState({});

    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${percentage}%`
        }

        setStyle(newStyle);
    }, 500);
    return (
        <div class="coding-skill">
            <div class="coding-skill-name">{name}</div>
            <div class="skill-bar">
                <div class="skill-percent" per={percentage} style={style}></div>
            </div>
        </div>
    );
};

export default SkillProficiency;