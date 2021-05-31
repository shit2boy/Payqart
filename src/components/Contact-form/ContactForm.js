import React, { useState } from "react";
import FormInput from "../Form-input/form-input.component";
import ContactButton from "../CustomButton/CustomButton";
import { toast } from "react-toastify";
import BaseUrl from "../../Util";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const { name, email, subject, message } = contact;
  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const notify = (msg) =>
    toast(msg, {
      position: "top-right",
      autoClose: 2000,
    });
  const validateForm = () => {
    let errors = {};
    let formIsValid = true;
    if (!contact.name) {
      formIsValid = false;
      errors["name"] = "*Cannot be empty";
    }
    if (typeof contact.name !== "undefined") {
      if (!contact.name.match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["name"] = "*Please enter alphabet characters only.";
      }
    }

    if (!contact.email) {
      formIsValid = false;
      errors["email"] = "*cannot be empty";
    }

    if (!contact.subject) {
      formIsValid = false;
      errors["subject"] = "*cannot be empty";
    }
    if (!contact.message) {
      formIsValid = false;
      errors["message"] = "*cannot be empty";
    }
    setErrors(errors);
    return formIsValid;
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (validateForm()) {
      setLoading(!loading);
      const config = {
        headers: {
          "content-Type": "application/json",
        },
      };
      try {
        const response = await axios.post(
          `${BaseUrl}users/api/v1/contactus`,
          {
            name,
            email,
            subject,
            message,
          },
          config
        );
        setErrors({ success: response.data.message });
        notify(response.data.message);
        setLoading(false);
      } catch (err) {
        console.log(err);
        if (err) {
          setErrors({ error: "Error sending message" });
          notify("Error sending message");
        }
      }
    }
    setLoading(false);

    setContact({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container ">
      <form className="contactForm" onSubmit={onSubmit}>
        <FormInput
          type="text"
          style={{ backgroundColor: "white" }}
          onChange={handleChange}
          name="name"
          value={name}
          // required
          placeholder="Name"
        />
        <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
          {errors["name"]}
        </span>

        <FormInput
          type="email"
          style={{ backgroundColor: "white" }}
          onChange={handleChange}
          name="email"
          value={email}
          // required

          placeholder="Email"
        />
        <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
          {errors["email"]}
        </span>

        <FormInput
          style={{ backgroundColor: "white" }}
          type="text"
          onChange={handleChange}
          name="subject"
          value={subject}
          placeholder="subject"
          // required
        />
        <span style={{ color: "#dd2b0e", fontSize: "0.70rem" }}>
          {errors["subject"]}
        </span>

        <textarea
          className="group"
          name="message"
          value={message}
          onChange={handleChange}
          placeholder=" Messages"
          rows="5"
        >
          {" "}
          <div>
            <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
              {errors["message"]}
            </span>
          </div>
        </textarea>

        <div style={{ marginTop: "30px" }}>
          {" "}
          <ContactButton radiusButton type="submit" style={{ width: "100%" }}>
            {loading ? "Sending..." : "Send Message"}
          </ContactButton>
          <div
            style={{
              textAlign: "center",
            }}
          >
            <span
              style={{
                color: "#dd2b0e",
                fontSize: "0.75rem",
                textAlign: "center",
              }}
            >
              {errors["success"]}
            </span>
            <span style={{ color: "#dd2b0e", fontSize: "0.75rem" }}>
              {errors["error"]}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
