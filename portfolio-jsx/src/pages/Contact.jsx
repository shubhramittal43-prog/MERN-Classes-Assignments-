import "./Contact.css";
import { useState } from "react";

function Contact() {

    const [message, setMessage] = useState("");
    const [upperCase, setUpperCase] = useState(false);

    return (

        <section className="contact">

            <div className="container">

                <h1 className="contact-heading">
                    Contact <span>Me</span>
                </h1>

                <p className="contact-subheading">
                    Have an idea, project or opportunity? Feel free to get in touch with me.
                </p>

                <div className="row contact-content">

                    <div className="col-lg-5 contact-info">

                        <h2>Get In Touch</h2>

                        <p>
                            I am always open to internships, freelance projects,
                            collaborations and exciting opportunities. Let's build
                            something amazing together.
                        </p>

                        <div className="info-box">
                            <h5>Email</h5>
                            <p>shubhramittal@example.com</p>
                        </div>

                        <div className="info-box">
                            <h5>Phone</h5>
                            <p>+91 XXXXX XXXXX</p>
                        </div>

                        <div className="info-box">
                            <h5>Location</h5>
                            <p>Meerut, Uttar Pradesh, India</p>
                        </div>

                        <a
                            href="/Shubhra_Mittal_CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hire-btn"
                        >
                            Hire Me
                        </a>

                    </div>

                    <div className="col-lg-7">

                        <div className="contact-card">

                            <h2>Send Message</h2>

                            <form>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Your Name"
                                />

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Your Email"
                                />

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter Subject"
                                />

                                <textarea
                                    rows="5"
                                    className="form-control"
                                    placeholder="Type Your Message..."
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                ></textarea>

                                <div className="form-check mt-3 mb-4">

                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="uppercase"
                                        checked={upperCase}
                                        onChange={() => setUpperCase(!upperCase)}
                                    />

                                    <label
                                        className="form-check-label text-light"
                                        htmlFor="uppercase"
                                    >
                                        Convert Message To UPPERCASE
                                    </label>

                                </div>

                                <button
                                    type="button"
                                    className="send-btn"
                                >
                                    Send Message
                                </button>

                            </form>

                            <h3 className="preview-heading">
                                Live Message Preview
                            </h3>

                            <p className="preview-text">

                                {
                                    message === ""
                                    ? "Your message will appear here..."
                                    : upperCase
                                    ? message.toUpperCase()
                                    : message
                                }

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Contact;