import Header from "../Header";
import React from 'react';
//import coverImage from '';

function Resume() {
    return (
        <div>
            <Header title="Resume" />
            <section>
                <ul>
                    <a href="https://onedrive.live.com/edit.aspx?resid=A89F5613CE6EB00A!230&ithint=file%2cdocx&wdOrigin=OFFICECOM-WEB.MAIN.MRU">Download my Resume</a>
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