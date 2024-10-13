import React from 'react';
import Navigation from '../Navigation/Navigation'
import useStyles from '../Style/Style.js'

function About() {
    const classes = useStyles();

    return (
        <div>
            <body>
            <header>
                <nav>
                    <Navigation/>
                </nav>
            </header>
            <main class="aboutHeading">
            <div class="image-text-container">
                <img class="image-1" src="images/s.png" alt="Field"/>
                <div class="text-content">
                <h2>Streamlining Coaching: The Need for All-in-One Sports Platforms</h2>
                <p>
                    Coaching apps have evolved, but many only address specific needs, forcing
                    teams like Florida Tech Men’s Lacrosse to use multiple apps. This fragmentation
                    reveals a demand for an all-in-one platform, offering opportunities for innovation
                    in sports tech.
                </p>
                </div>
            </div>

            <h2 class="subheading">Key Features of PocketCoach</h2>
            
            <div class="image-text-container">
                <img class="image-2" src="images/s5.jpg" alt="Field"/>
                <div class="features">
                <div class="text-content1 floating">
                    <h2 class="core-feature-box">Core feature 1</h2>
                    <p>Create and execute practice plans.</p>
                </div>
                <div class="text-content2 floating">
                    <h2 class="core-feature-box">Core feature 2</h2>
                    <p>View players current performance.</p>
                </div>
                <div class="text-content3 floating">
                    <h2 class="core-feature-box">Core feature 3</h2>
                    <p>Create and Track goals for both individuals & teams.</p>
                </div>
                </div>
            </div>

            <h2 class="subheading">Goals and Motivations</h2>

            <div class="image-text-container1">
                <img class="image-4" src="images/s4.jpg" alt="Field"/>
                <div class="text-content4">
                <h2>Main Goal</h2>
                <p>
                    Improve user experience by streamlining workflows for sports teams and coaches.
                </p>
                </div>
            </div>

            </main>
            <footer>
            <p>&copy; 2024 PocketCoach. All rights reserved.</p>
            </footer>
            </body>
        </div>
    )
}

export default About;