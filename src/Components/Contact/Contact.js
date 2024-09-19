import React, { useState } from 'react';
import Navigation from '../Navigation/ Navigation';
import useStyles from '../Style/Style';

function Contact() {
    const classes = useStyles();

    return (
        <div>
            <body>
                <header>
                    <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="first-semester.html">First Semester</a></li>
                        <li><a href="second-semester.html">Second Semester</a></li>
                        <li><a href="about.html">About</a></li>
                        <li class="active"><a href="contact.html">Contact</a></li>
                    </ul>
                    </nav>
                </header>
                <main class="con">
                    <div class="contact-container">
                    <form action="https://api.web3forms.com/submit" method="POST" class="contact-left">
                        <div class="contact-left-title">
                        <h3>Get in touch</h3>

                        </div>

                        <input type="hidden" name="access_key" value="aed43b49-5d36-420d-a55b-464821afdc53"/>
                        <input type="text" name="name" placeholder="Your Name" class="contact-inputs" required/>
                        <input type="email" name="email" placeholder="Your Email" class="contact-inputs" required/>
                        <textarea name="message" placeholder="Your Message" class="contact-inputs" required></textarea>
                        <button type="submit">Submit <img src="images/arrow_icon.png" alt="arrow"/></button>

                    </form>
                    <div class="contact-right">

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

export default Contact;