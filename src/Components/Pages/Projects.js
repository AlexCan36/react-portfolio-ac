import Header from "../Header";

function Projects() {
    return (
        <div>
            <Header title="Projects" subtitle="Look at some of my latest projects. 👇" />
            <div class="row">
                <div class="column">
                    <h3>Tattoo Appt Booker</h3>
                    <a href="https://vhivestate.github.io/Appt-Booker/"> <img border="1" alt="ApptBooker" src="pics/Screenshot (30).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/vhivestate/Appt-Booker.git'>https://github.com/vhivestate/Appt-Booker.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Petsagram</h3>
                    <a href="https://petsagram-project2.herokuapp.com/"> <img border="1" alt="petsagram" src="pics/Screenshot (41).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/leeshekchun/Petsagram.git'>https://github.com/leeshekchun/Petsagram.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Budget Tracker</h3>
                    <a href="https://fierce-bayou-92999.herokuapp.com/"> <img border="1" alt="BudgetTracker" src="pics/Screenshot (67).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/Budget-Tracker-ac.git'>https://github.com/AlexCan36/Budget-Tracker-ac.git</a></p>
                    </section>
                </div>
            </div>
            <div class="row">
                <div class="column">
                    <h3>Note Taker</h3>
                    <a href="https://itsyour-notepad.herokuapp.com/notes"> <img border="1" alt="NoteTaker" src="pics/Screenshot (64).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/itsyour-notepad.git'>https://github.com/AlexCan36/itsyour-notepad.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Weather Dashboard API</h3>
                    <a href="https://alexcan36.github.io/Weather-Dashboard/"> <img border="1" alt="WeatherDashboard" src="pics/Screenshot (65).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/Weather-Dashboard.git'>https://github.com/AlexCan36/Weather-Dashboard.git</a></p>
                    </section>
                </div>
                <div class="column">
                    <h3>Password Generator</h3>
                    <a href="https://alexcan36.github.io/PasswordGenerator/"> <img border="1" alt="PasswordGenerator" src="pics/Screenshot (66).png" width="200" height="200"></img></a>
                    <section>
                        <p>Github<a target='_blank' href='https://github.com/AlexCan36/PasswordGenerator.git'>https://github.com/AlexCan36/PasswordGenerator.git</a></p>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Projects;