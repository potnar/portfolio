import React from "react";
import "./ContactForm.scss";
import axios from "axios";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    axios({
      method: "POST",
      url: "http://localhost:5000",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(event) {}

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <section className="contact-form__section" id="contact">
        <nav>
          <h1>Contact</h1>
        </nav>
        <div className="container">
          <form
            id="contact-form"
            onSubmit={this.handleSubmit.bind(this)}
            method="POST"
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
              />
            </div>
            <div className="btn-container">
              <div className="btn">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    );
  }
}
export default ContactForm;
