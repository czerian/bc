import React, { Component } from 'react'
import { connect } from "react-redux";
import { helloAction, contactAction } from "../actions/contactActions";
import PropTypes from "prop-types";
import ReCAPTCHA from "react-google-recaptcha";

class Contact extends Component {
    constructor(props) {
    super(props);
    this.state = {
    name: "",
    email: "",
    phone: "",
    msg: "",
    recaptchare: "",
    };
    }

    static propTypes = {
        helloAction: PropTypes.func.isRequired,
        contactAction: PropTypes.func.isRequired,
        olla: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.helloAction();
    }

    conSubmit = e => {
            e.preventDefault();
            const helloMsg = {
                name: this.state.name,
                email: this.state.email,
                phone: this.state.phone,
                msg: this.state.msg,
                recaptchare: this.state.recaptchare,
            };
            this.props.contactAction(helloMsg);
            // this.props.contactAction(this.state.name, this.state.email, this.state.phone, this.state.msg, document.getElementById('recap').value, this.state.rbot);
            // console.log(helloMsg);
    }

    ifChange = e => {
            this.setState({ [e.target.name]: e.target.value });
    };

    reCap = e => {
        this.setState({ recaptchare: e });
        console.log(e, "<<== Sexy Token")
    };

    render() {
    const { hello, sending, subRes } = this.props.olla;
            return (
            <div className="condiv fx fxdc fxjcc fxaic tac">
                <h1>
                {hello ? (`${hello[0].say}`):('Say Hi || Contact Me')}
                <hr />
                </h1>

                <form onSubmit={this.conSubmit} className="conForm">
                    <input
                        type="text"
                        name="name"
                        autoComplete="off"
                        placeholder="Your Name"
                        onChange={this.ifChange}
                    />
                    <input
                        type="text"
                        name="email"
                        autoComplete="off"
                        placeholder="E-mail Address"
                        onChange={this.ifChange}
                    />
                    <input
                        type="text"
                        name="phone"
                        autoComplete="off"
                        placeholder="Phone Number"
                        onChange={this.ifChange}
                    />

                    <textarea
                    name="msg"
                    placeholder="Say Something/Your Message"
                    onChange={this.ifChange}
                    />

                    <div className="recap">
                    <ReCAPTCHA
                        sitekey="6LdXMLcUAAAAAMpZoQfpdfjbTDwTrBVFmLV-sJ7_"
                        onChange={this.reCap}
                    />
                    </div>
                <small><em>{sending ? ('Sending.....'):(subRes)}</em></small>
                    <input type="submit" value="SUBMIT" />
                </form>                   
            </div>
        );
    }
}

const mapStateToProps = state => ({
    olla: state.contactReducer
});
  

export default connect(
    mapStateToProps,
    { helloAction, contactAction }
)(Contact);
