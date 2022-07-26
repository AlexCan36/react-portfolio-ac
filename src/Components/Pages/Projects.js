import Header from "../Header";

function Projects() {
    return (
        <div>
            <Header title="Projects" subtitle="Look at some of my latest projects. 👇" />
            <div>
                <h3>Tattoo Appt Booker</h3>
                <a href="https://vhivestate.github.io/Appt-Booker/"> <img border="1" alt="ApptBooker" src="pics/Screenshot (30).png" width="200" height="200"></img></a>
            </div>
            <div>
                <h3>Petsagram</h3>
                <a href="https://petsagram-project2.herokuapp.com/"> <img border="1" alt="petsagram" src="/pics/Screenshot (41).png" width="200" height="200"></img></a>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <h3>Budget Tracker</h3>
            <h3>Note Taker</h3>
            <h3>Weather Dashboard API</h3>
            <h3>Password Generator</h3>
        </div>
    )
}

export default Projects;