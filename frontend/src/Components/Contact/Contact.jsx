import React, { useEffect, useState } from "react";
import "./contact.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Typography } from "@mui/material";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const contactFormHandler =async (e) => {
    e.preventDefault();
    if(!name || !email || !Message){
      toast.warning("Enter all the details");
    }
    try {
      const options = {
        subject:"Request from Portfolio",
        text:{
          from:email,
          name:name,
          body:Message,
        }
      }
      const res = await axios.post("http://localhost:5000/api/send-email",options); 
      console.log(res);
      toast.success("Response sent");
    } catch (error) {
      toast.error("Error sending Email");
    }
    
  };
  useEffect(()=>{
    toast.success("success");
  },[]);
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
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
            value={Message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="Submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
