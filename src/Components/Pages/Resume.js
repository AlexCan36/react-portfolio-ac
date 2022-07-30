import Header from "../Header";
import React from 'react';
//import coverImage from '';

function Resume() {
    return (
        <div>
            <Header title="Resume" />
            <section>
                <ul>
                    <a href="docs/ALEJANDRO_C_RESUME.docx">Download my Resume</a>
                    <a target='_blank' href="docs/ALEJANDRO_C_RESUME.pdf">View my Resume</a>
                    <li><h1>Front-end Proficiencies</h1></li>
                    <li>HTML & CSS</li>
                    <li>Javascript</li>
                    <li>JQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li><h1>Back-end Proficiencies</h1></li>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequelize</li>
                    <li>MongoDB , Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </section>
        </div>
    )
}

export default Resume;