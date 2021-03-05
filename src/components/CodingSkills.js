import React from "react";
import SectionHeading from "./SectionHeading";
import SkillProficiency from "./SkillProficiency";

const CodingSkills = () => {
  return (
    <section className="coding-skills" id="coding-skills">
      <div className="container">
        <SectionHeading mainHeading="Coding Skills" subHeading="Proficiency" />
        <SkillProficiency name="Python" percentage="80" />
        <SkillProficiency name="Java" percentage="80" />
        <SkillProficiency name="AWS" percentage="70" />
        <SkillProficiency name="Docker" percentage="70" />
        <SkillProficiency name="Terraform" percentage="60" />
        <SkillProficiency name="Kotlin" percentage="60" />
        <SkillProficiency name="PostgreSQL" percentage="50" />
        <SkillProficiency name="JavaScript" percentage="50" />
        <SkillProficiency name="HTML" percentage="30" />
        <SkillProficiency name="CSS" percentage="30" />
      </div>
    </section>
  );
};

export default CodingSkills;
