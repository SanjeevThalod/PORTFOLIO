import React, { useState } from "react";
import "./contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";
import loader from "../../Image/Infinity@1x-1.0s-200px-200px.svg";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const contactFormHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    if (!name || !email || !message) {
      toast.warning("Enter all the details");
      return;
    }

    const templateParams = {
      name,
      email,
      message,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_KEY
      );
      toast.success("Response sent");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Failed to send email:", error);
      toast.error("Error sending Email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className={`contactContainer ${loading ? "blurred" : ""}`} >
        <form className="contactContainerForm" onSubmit={contactFormHandler}>
          <Typography variant="h4">Contact US</Typography>
          <input
            type="text"
            placeholder="Name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            required
            cols="30"
            rows="10"
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit" disabled={loading}>
            {loading ? "Sending..." : "SEND"}
          </Button>
        </form>
      </div>
      {loading && (
        <img
          src={loader}
          className="loader"
          style={{
            position: "fixed",
            top: "35vh",
            left: "40vw",
            width: "20vw",
            height: "10vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            pointerEvents: "none",
          }}
        />
      )}
    </div>
  );
};

export default Contact;
