import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("");

  const SubmitForm = e => {
    e.preventDefault();

    const form = e.target;
    const content = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };
    xhr.send(content);
  };
  return (
    <div id="contact" className="home-view">
      <h2>Contact Us</h2>
      <form
        onSubmit={SubmitForm}
        action="https://formspree.io/xvoqwnoo"
        method="POST"
      >
        <div className="information">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter full name"
          />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@example.com"
          />
          <label htmlFor="text">Message:</label>
          <textarea
            rows="5"
            name="message"
            id="message"
            placeholder="Type your message..."
          />

          <div className="museum">
            <label>
              I represent a museum
              <input type="checkbox" name="museum" id="museum" />
              <span className="check"></span>
            </label>
          </div>
        </div>

        {status === "SUCCESS" ? (
          <p>Thank you! Zaila will contact you shortly</p>
        ) : (
          <button>Send</button>
        )}
        {status === "ERROR" && (
          <p>Oops. Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
