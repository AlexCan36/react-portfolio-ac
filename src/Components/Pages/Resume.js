import Header from "../Header";
import React from 'react';
import uOfutah from '../../assets/pics/udiplomaima.png';
import coursera from '../../assets/pics/courseraima.png';

function Resume() {
    return (
        <div>
            <Header title="Resume" />
            <section>
                <ul>
                    <a href="docs/ALEJANDRO_C_RESUME.docx">Download my Resume</a>
                    <a target='_blank' href="docs/ALEJANDRO_C_RESUME.pdf">View my Resume</a>
                    <li><h1>Languages</h1></li>
                    <li>Javascript *Certified from The U*</li>
                    <a><img border="1" alt="utahimage" src={uOfutah} width="100" height="100"></img></a>
                    <li>Python *Certified from Coursera*</li>
                    <a><img border="1" alt="coursera" src={coursera} width="75" height="75"></img></a>
                    <li><h1>Front-end Proficiencies</h1></li>
                    <li>HTML & CSS</li>
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