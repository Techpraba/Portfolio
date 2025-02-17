import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [statusMessage, setStatusMessage] = useState(""); // Success/Error Message
    const formRef = useRef(); // Form Reference

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setStatusMessage("All fields are required.");
            return;
        }

        emailjs.sendForm(
            "service_7js89xj", // Replace with your EmailJS Service ID
            "template_bfhq76m", // Replace with your EmailJS Template ID
            formRef.current, // Use useRef() instead of e.target
            "mi5JTdjEt1lBwp5ID" // Replace with your EmailJS Public Key
        )
            .then((response) => {
                setStatusMessage("✅ Email Sent Successfully!");
                console.log("SUCCESS!", response.status, response.text);
            })
            .catch((err) => {
                setStatusMessage("❌ Failed to send email. Please try again.");
                console.log("FAILED...", err);
            });

        // Clear form fields after submission
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="contact-container">
            <div className="contact-box">
                <h2 className="contact-title">Contact Us</h2>
                {statusMessage && <p className="status-message">{statusMessage}</p>}
                <form ref={formRef} className="contact-form" onSubmit={sendEmail}>
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
