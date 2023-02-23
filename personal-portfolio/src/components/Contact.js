import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import axios from 'axios';
const API_KEY = process.env.SEND_GRID_APIKEY

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    try {
      const response = await axios.post("https://api.sendgrid.com/v3/mail/send", {
        personalizations: [
          {
            to: [
              {
                email: 'kiruivinie1@gmail.com',
              },
            ],
            subject: 'New message from Contact Form',
          },
        ],
        from: {
          email: formDetails.email,
        },
        content: [
          {
            type: 'text/plain',
            value: `
            First Name: ${formDetails.firstName}
            Last Name: ${formDetails.lastName}
            Phone: ${formDetails.phone}
            Message: ${formDetails.message}
            `,
          },
        ],
      }, {
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
      });
      console.log(response)

      setButtonText("Send");
      setFormDetails(formInitialDetails);
      setStatus({ success: true, message: 'Message sent successfully'});
    } catch (error) {
      console.error(error);
      setButtonText("Send");
      setStatus({ success: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={
                  isVisible ? "animate__animated animate__fadeInUp animate__delay-1s form-container" : ""
                }>
                  <h2 className="text-center">
                    Connect with me
                  </h2>
                  {status.success && (
                    <div className="alert alert-success">
                      {status.message}
                    </div>
                  )}
                  {status.error && (
                    <div className="alert alert-danger">
                      {status.message}
                    </div>
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First Name"
                        value={formDetails.firstName}
                        onChange={(e) => onFormUpdate("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last Name"
                        value={formDetails.lastName}
                        onChange={(e) => onFormUpdate("lastName", e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Email"
                        value={formDetails.email}
                        onChange={(e) => onFormUpdate("email", e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Phone"
                        value={formDetails.phone}
                        onChange={(e) => onFormUpdate("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        className="form-control"
                        placeholder="Message"
                        value={formDetails.message}
                        onChange={(e) => onFormUpdate("message", e.target.value)}
                        required
                      />
                    </div>
                    <button className="btn btn-block btn-primary" type="submit">
                      {buttonText}
                    </button>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
  }