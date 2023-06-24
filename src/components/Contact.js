import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
export default function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [formDetails, setFromDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onFromUpdate = (category, value) => {
    setFromDetails({
      ...formDetails,
      [category]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sedging...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFromDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent Successfully" });
    } else {
      setStatus({
        success: false,
        message: "Somethig went wrong, please try again later",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contac us" />
          </Col>
          <Col size={12} md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
            <Row>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.firstName}
                  placeholder="First Name"
                  onChange={(e) => {
                    onFromUpdate("firstName", e.target.value);
                  }}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  value={formDetails.lastName}
                  placeholder="Last Name"
                  onChange={(e) => {
                    onFromUpdate("lastName", e.target.value);
                  }}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="email"
                  value={formDetails.email}
                  placeholder="Email Address"
                  onChange={(e) => {
                    onFromUpdate("email", e.target.value);
                  }}
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="tel"
                  value={formDetails.firstName}
                  placeholder="Phone No."
                  onChange={(e) => {
                    onFromUpdate("phone", e.target.value);
                  }}
                />
              </Col>
              <Col>
                <textarea
                  rows="6"
                  value={formDetails.message}
                  placeholder="Message"
                  onChange={(e) => {
                    onFromUpdate("message", e.target.value);
                  }}
                />
                <button type="submit" onClick={handleSubmit}>
                  <span>{buttonText}</span>
                </button>
              </Col>
              {status.message && (
                <Col>
                  <p
                    className={status.success === false ? "danger" : "success"}
                  >
                    {status.message}
                  </p>
                </Col>
              )}
            </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
