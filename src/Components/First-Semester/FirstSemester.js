import React from 'react';
import Navigation from '../Navigation/Navigation'
import useStyles from '../Style/Style.js'

function FirstSemester() {
    return (
        <div>
            <body>
            <header>
                <nav>
                    <Navigation/>
                </nav>
            </header>
            <main>
            <h2 class="subheading">Plan (Sep 4)</h2>
            <section class="plan-button-boxes">
                <div class="card">
                <a href="pdfs/ProjectPlan.pdf" target="_blank">
                    <div class="card-content">
                        <embed src="pdfs/ProjectPlan.pdf" alt="PDF Thumbnail" class="card-image"/>
                        <div class="plan-button">View Project Plan</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a href="pdfs/SeniorProjectProposal-PocketSportsCoachingApp.pdf" target="_blank">
                    <div class="card-content">
                        <embed src="pdfs/SeniorProjectProposal-PocketSportsCoachingApp.pdf" alt="PDF Thumbnail" class="card-image"/>
                        <div class="plan-button">View Presentation</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a href="pdfs/ProjectPlanSlides.pdf" target="_blank">
                    <div class="card-content">
                    <embed src="pdfs/ProjectPlanSlides.pdf" alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Project Plan Presentation</div>
                    </div>
                </a>
                </div>
            </section>
            <h2 class="subheading">Milestone 1 (Sep 30)</h2>
            <section class="extended-button-boxes">
                <div class="card">
                <a href="pdfs/Requirements.pdf" target="_blank">
                    <div class="card-content">
                        <embed src="pdfs/Requirements.pdf" alt="PDF Thumbnail" class="card-image"/>
                        <div class="plan-button">View Requirements</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                        <embed alt="PDF Thumbnail" class="card-image"/>
                        <div class="plan-button">View Design</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Tests</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Presentation</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Progress Evaluation</div>
                    </div>
                </a>
                </div>
            </section>
            <h2 class="subheading">Milestone 2 (Oct 28)</h2>
            <section class="button-boxes">
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Presentation</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Progress Evaluation</div>
                    </div>
                </a>
                </div>
            </section>
            <h2 class="subheading">Milestone 3 (Nov 25)</h2>
            <section class="button-boxes">
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Presentation</div>
                    </div>
                </a>
                </div>
                <div class="card">
                <a target="_blank">
                    <div class="card-content">
                    <embed alt="PDF Thumbnail" class="card-image"/>
                    <div class="plan-button">View Progress Evaluation</div>
                    </div>
                </a>
                </div>
            </section>
            </main>
            <footer>
            <p>&copy; 2024 PocketCoach. All rights reserved.</p>
            </footer>
            </body>
        </div>
    )
}

export default FirstSemester;