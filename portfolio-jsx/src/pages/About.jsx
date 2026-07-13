import { useState } from "react";
import "./About.css";

function About() {

    const [section, setSection] = useState("journey");

    return (

        <section className="about">

            <div className="container">

                <h1 className="about-heading">
                    About <span>Me</span>
                </h1>

                <p className="about-subheading">
                    Know more about me, my interests and my journey.
                </p>

                <div className="about-buttons">

                    <button
                        className={section==="journey" ? "about-btn active" : "about-btn"}
                        onClick={()=>setSection("journey")}
                    >
                        My Journey
                    </button>

                    <button
                        className={section==="interests" ? "about-btn active" : "about-btn"}
                        onClick={()=>setSection("interests")}
                    >
                        Interests
                    </button>

                    <button
                        className={section==="strengths" ? "about-btn active" : "about-btn"}
                        onClick={()=>setSection("strengths")}
                    >
                        Strengths
                    </button>

                </div>

                <div className="about-card">

                    {section==="journey" && (

                        <>
                            <h2>My Journey</h2>

                            <p>
                                I am currently pursuing Bachelor of Computer Applications (BCA) with a passion for web development. My journey began with HTML and CSS and gradually expanded to Bootstrap, JavaScript and React.
                            </p>

                            <p>
                                Every project I build helps me improve my logical thinking, creativity and problem-solving abilities. My goal is to become a skilled MERN Stack Developer and build modern web applications.
                            </p>

                        </>

                    )}

                    {section==="interests" && (

                        <>
                            <h2>My Interests</h2>

                            <ul>

                                <li>Web Development</li>

                                <li>Frontend UI Design</li>

                                <li>Learning New Technologies</li>

                                <li>Problem Solving</li>

                                <li>Reading Tech Blogs</li>

                                <li>Exploring Artificial Intelligence</li>

                            </ul>

                        </>

                    )}

                    {section==="strengths" && (

                        <>
                            <h2>My Strengths</h2>

                            <ul>

                                <li>Quick Learner</li>

                                <li>Creative Thinking</li>

                                <li>Time Management</li>

                                <li>Leadership Skills</li>

                                <li>Team Collaboration</li>

                                <li>Positive Attitude</li>

                            </ul>

                        </>

                    )}

                </div>

            </div>

        </section>

    );

}

export default About;