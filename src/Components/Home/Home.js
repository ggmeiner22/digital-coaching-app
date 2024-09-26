import React from 'react';
import Navigation from '../Navigation/Navigation'
import useStyles from '../Style/Style.js'

function Home() {
    const classes = useStyles();
    return (
        <div>
            <body>
                <header>
                    <nav>
                        <Navigation/>
                    </nav>
                </header>
                <main>
                    <div class="image-screen">
                        <img class="background" src="images/LacrosseField.png"/>
                        <img class="logo" src="images/logo/Logo.png" alt="logo"/>
                        <div class="img-text">TAILORED TRAINING FOR PEAK PERFORMANCE</div>
                    </div>
                    <h2 class="subheading">Our Mission</h2>
                    <section class="introduction">
                        
                        <p>
                        Our mission is to elevate emerging sports by providing them with the platforms they deserve. 
                        Many existing apps focus on just one aspect of coaching, such as practice plans or goal setting, 
                        which often leads to the need for multiple apps per team. For instance, Florida Tech Men’s Lacrosse relies on over 12 different apps,
                        including Teamworks, JustPlay, Hudl, and Excel. This fragmentation highlights
                        the need for larger, more integrated platforms that can streamline coaching
                        and administrative tasks, presenting clear opportunities for innovation and
                        improvement in the sports tech landscape. 
                            <br/>
                            <br/>
                            We aim to reduce the complexity by 
                        offering a comprehensive solution that brings together multiple sports on a single, affordable 
                        platform. This approach not only benefits smaller teams and communities but also fosters growth 
                        in a space where competition and opportunities for expansion are currently limited.
                        </p>
                        <img src="images/Drillimg.png" alt="Drilling"/>
                    </section>
                    <h2 class="subheading">Meet the Team</h2>

                    <section>
                        <div class="image-container">

                            <div class="row">
                            <div class="image-item">
                                <img src="images/team/GarrettGmeiner.png" alt="Image 1" class="circle-image"/>
                                <h3>Garrett Gmeiner</h3>
                                <p>Computer Science</p>
                                <a href="mailto:ggmeiner2021@my.fit.edu">ggmeiner2021@my.fit.edu</a>
                            </div>
                            <div class="image-item">
                                <img src="images/team/ParkerCummings.png" alt="Image 2" class="circle-image"/>
                                <h3>Parker Cummings</h3>
                                <p>Computer Science</p>
                                <a href="mailto:pcummings2021@my.fit.edu">pcummings2021@my.fit.edu</a>
                            </div>
                            <div class="image-item">
                                <img src="images/team/TylerTon.png" alt="Image 3" class="circle-image"/>
                                <h3>Tyler Ton</h3>
                                <p>Computer Science</p>
                                <a href="mailto:tton2021@my.fit.edu">tton2021@my.fit.edu</a>
                            </div>
                        
                            <div class="image-item">
                                <img src="images/team/TaylorCarlson.png" alt="Image 4" class="circle-image"/>
                                <h3>Taylor Carlson</h3>
                                <p>Software Engineer</p>
                                <a href="tcarlson2021@my.fit.edu">tcarlson2021@my.fit.edu</a>
                            </div>

                            </div>
                            <div class="row">
                                <div class="image-item">
                                    <img src="images/team/FitzroyNembhard.png" alt="Image 4" class="circle-image"/>
                                    <h3>Fitzroy Nembhard</h3>
                                    <p>Faculty Advisor</p>
                                    <a href="mailto:fnembhard@fit.edu">fnembhard@fit.edu </a>
                                </div>
                            </div>
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

export default Home;