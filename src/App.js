import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function App() {
  const formData = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_sc71qip", "template_fi9976d", formData.current, {
        publicKey: "ekXeUq6R1oPTq3xlz",
      })
      .then(
        () => {
          alert("Message successfully sent!");
        },
        (error) => {
          alert("Message failed to send");
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 class1">
            <form
              ref={formData}
              onSubmit={handleSubmit}
              className="container-fluid"
            >
              {/* Email and Sender Name */}
              <div className="row email/sender">
                <div className="col-md-6 form-group">
                  <label for="reply_to">Reply To:</label>
                  <input
                    class="form-control"
                    type="email"
                    name="reply_to"
                    id="reply_to"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label for="fromName">Sender Name:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="fromName"
                    id="fromName"
                    required
                  />
                </div>
              </div>
              {/* Subject and emailTo */}
              <div className="row">
                <div className="col-md-6 form-group">
                  <label for="subject">Subject:</label>
                  <input
                    class="form-control"
                    type="text"
                    name="subject"
                    id="subject"
                    required
                  />
                </div>
                <div className="col-md-6 form-group">
                  <label for="toEmail">Email To:</label>
                  <input
                    type="email"
                    name="toEmail"
                    id="toEmail"
                    class="form-control"
                    required
                  />
                </div>
              </div>
              {/* Message Letter && Email List */}
              <div className="row">
                <div className="col-md-12 form-group">
                  <label for="message">Message:</label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    class="form-control"
                    required
                  ></textarea>
                </div>
              </div>
              {/* Submit Button */}
              <div className="row button">
                <button
                  className="col-md-12 btn btn-outline-warning"
                  onClick={handleSubmit}
                  type="button"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
