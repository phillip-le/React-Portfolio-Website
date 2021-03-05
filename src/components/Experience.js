import React from "react";
import TimelineItem from "./TimelineItem";
import SectionHeading from "./SectionHeading";

const Experience = () => {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <SectionHeading
                    mainHeading="Experience"
                    subHeading="Past and current jobs"
                />
                <div className="timeline">
                    <TimelineItem
                        timePeriod={"Feb 2021 - Present"}
                        title={"Back End Intern Developer at OpenMarkets Group"}
                        description={`
                        Migrated the back end service of OpenMarket's online stock brokering API from Java to Kotlin. 
                        Reduced the code length and increased readability.`}
                    />
                    <TimelineItem
                        timePeriod={"Nov 2020 - Feb 2021"}
                        title={"Vacation Student Data Scientist at Rio Tinto"}
                        description={`
                        Led a deep dive from zero into how Kubeflow could be used as a tech-agnostic tool for
                        deploying reproducible machine learning pipelines. Setup a secure Kubernetes cluster on AWS using EKS
                        with private cluster endpoints. Access to the Kubeflow Dashboard from local environments was securely routed
                        through SSM and a bastion host.`}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;