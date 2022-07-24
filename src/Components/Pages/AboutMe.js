import Header from "../Header";
import React from 'react';
//import coverImage from '';

function AboutMe() {
    return (
        <div>
            <Header title="AboutMe" subtitle="Hello ," />
            <section>
                <p>
                    <p>I'am Alex Canez , Web developer & Sales Manager. Originally from California but i called Utah my home for the last 20 years.</p>
                    <p>I've been doing telecomunications sales for the last 10 years with great success and customer service for 5 years prior.</p>
                    <p>And now im ready for this new and exciting career as a web developer.</p>
                    <p>Feel free to message me with your questions and inquires about my services.</p>
                    <button type="submit">
                        Im also Bilingual
                    </button>
                </p>
            </section>
        </div>
    )
}

export default AboutMe;