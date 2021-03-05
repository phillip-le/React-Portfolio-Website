import React from "react";

const TimelineItem = ({ timePeriod, title, description }) => {
    return (
        <div className="item" data-time={timePeriod}>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
    );
};

export default TimelineItem;