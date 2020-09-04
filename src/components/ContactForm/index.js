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

    const apiBaseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:5001"
        : process.env.REACT_APP_API_BASE_URL;

    axios.post(`${apiBaseUrl}/send`, this.state).then((res) => {
      console.log(res.data.status);
      if (res.data.status === "success") {
        console.log("Message Sent.");
        this.resetForm();
      } else if (res.data.status === "fail") {
        console.log("Message failed to send.");
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
