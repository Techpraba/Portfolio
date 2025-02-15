import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_7js89xj", // Replace with your EmailJS Service ID
            "template_bfhq76m", // Replace with your EmailJS Template ID
            e.target,
            "mi5JTdjEt1lBwp5ID" // Replace with your EmailJS Public Key (User ID)
        )
            .then((response) => {
                alert("Email Sent Successfully!");
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                alert("Failed to send email.");
                console.log("FAILED...", err);
            });

        // Clear form fields after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h2 className="contact-title">Contact Us</h2>
                <form className="contact-form" onSubmit={sendEmail}>
                    <label className="contact-label">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="contact-input"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />

                    <label className="contact-label">Email</label>
                    <input
                        type="email"
                        name="email"
                        className="contact-input"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label className="contact-label">Message</label>
                    <textarea
                        name="message"
                        className="contact-textarea"
                        placeholder="Enter your message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>

                    <button className="contact-button" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
