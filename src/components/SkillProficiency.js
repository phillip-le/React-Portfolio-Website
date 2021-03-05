import React from "react";

const SkillProficiency = ({ name, percentage }) => {
  return (
    <div class="coding-skill">
      <div class="coding-skill-name">{name}</div>
      <div class="skill-bar">
        <div class="skill-percent" per={percentage}></div>
      </div>
    </div>
  );
};

export default SkillProficiency;