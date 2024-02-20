import React from 'react';
import Header from "../Header";
import tattooImage from '../../assets/pics/tattooApp.png';
//import petsAGram from '../../assets/pics/petsAGram.png';
import budgetTracker from '../../assets/pics/budgetTracker.png';
import noteTaker from '../../assets/pics/noteTaker.png';
import barnyardPage from '../../assets/pics/barnyardPage.png';
import passwordGenerator from '../../assets/pics/passwordGenerator.png';
//import fFight from '../../assets/pics/fighterfightima.jpeg';
import neonSign from '../../assets/pics/neonsignima.jpeg';
//import adriSweet from '../../assets/pics/adrisweetima.jpeg';


function Projects() {
    return (
        <div>
            <Header title="Projects" subtitle="Look at some of my latest projects. 👇" />
            <div class="row">
                <div class="column">
                    <h3>Tattoo Appt Booker</h3>
                    <a href="https://vhivestate.github.io/Appt-Booker/"> <img border="1" alt="ApptBooker" src={tattooImage} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/vhivestate/Appt-Booker.git'>https://github.com/vhivestate/Appt-Booker.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Neon House Signs</h3>
                    <a href="https://alexcan36.github.io/neonhouse-signs/"> <img border="1" alt="neonHouse" src={neonSign} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/neonhouse-signs'>https://github.com/AlexCan36/neonhouse-signs</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Budget Tracker</h3>
                    <a href="https://fierce-bayou-92999.herokuapp.com/"> <img border="1" alt="BudgetTracker" src={budgetTracker} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/Budget-Tracker-ac.git'>https://github.com/AlexCan36/Budget-Tracker-ac.git</a></p>
                    </section>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3>Note Taker</h3>
                    <a href="https://itsyour-notepad.herokuapp.com/notes"> <img border="1" alt="NoteTaker" src={noteTaker} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/itsyour-notepad.git'>https://github.com/AlexCan36/itsyour-notepad.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Barnyard</h3>
                    <a href="https://barnyardproject.herokuapp.com/"><img border="1" alt="barnyard" src={barnyardPage} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/MirMello/barnyard.git'>https://github.com/MirMello/barnyard.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Password Generator</h3>
                    <a href="https://alexcan36.github.io/PasswordGenerator/"> <img border="1" alt="PasswordGenerator" src={passwordGenerator} width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/PasswordGenerator.git'>https://github.com/AlexCan36/PasswordGenerator.git</a></p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Projects;