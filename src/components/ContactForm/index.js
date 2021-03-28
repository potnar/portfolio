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
      nameError: "",
      emailError: "",
      messageError: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    const isValid = this.validate();
    if (isValid) {
      // const apiBaseUrl =
      //   process.env.NODE_ENV === "development"
      //     ? "http://localhost:5001"
      //     : process.env.REACT_APP_API_BASE_URL;

      axios.post(`/send`, this.state).then((res) => {
        if (res.data.status === "success") {
          this.resetForm();
        } else if (res.data.status === "fail") {
        }
      });
    }
  }

  validate = () => {
    let nameError = "";
    let emailError = "";
    let messageError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.message) {
      messageError = "message cannot be blank";
    }

    if (!this.state.email) {
      emailError = "email cannot be blank";
    } else if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }

    if (emailError || nameError || messageError) {
      this.setState({ emailError, nameError, messageError });
      return false;
    }

    return true;
  };

  onNameChange(e) {
    this.setState({ name: e.target.value });
    if ((e.target.value = "")) {
    }
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  resetForm() {
    this.setState({
      name: "",
      email: "",
      message: "",
      emailError: "",
      messageError: "",
      nameError: "",
    });
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
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
                placeholder="Enter your name"
              />
              <div className="error">{this.state.nameError}</div>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
                placeholder="Enter your email"
              />
              {this.state.emailError ? (
                <div className="error">{this.state.emailError}</div>
              ) : null}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control"
                rows="5"
                value={this.state.message}
                onChange={this.onMessageChange.bind(this)}
                placeholder="Enter your message"
              />
              <div className="error">{this.state.messageError}</div>
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
