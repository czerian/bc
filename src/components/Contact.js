import React, { Component } from 'react'
import { connect } from "react-redux";
import { helloAction, contactAction } from "../actions/contactActions";
import PropTypes from "prop-types";

class Contact extends Component {
    constructor(props) {
    super(props);
    this.state = {
    name: "",
    email: "",
    phone: "",
    msg: "",
    recaptchare: "",
    rbot: "",
    conData: [],
    };
    }

    static propTypes = {
        helloAction: PropTypes.func.isRequired,
        contactAction: PropTypes.func.isRequired,
        olla: PropTypes.object.isRequired,
    };

    componentDidMount() {
        this.props.helloAction();
        // setTimeout(() => {this.setState({ recaptchare: document.getElementById('recap').value });}, 3000);
    }

    conSubmit = e => {
            e.preventDefault();
            const helloMsg = [
                {name: this.state.name},
                {email: this.state.email},
                {phone: this.state.phone},
                {msg: this.state.msg},
                {recaptchare: document.getElementById('recap').value},
                {rbot: this.state.rbot}
            ];
            // this.props.contactAction(helloMsg);
            this.props.contactAction(this.state.name, this.state.email, this.state.phone, this.state.msg, document.getElementById('recap').value, this.state.rbot);
            // console.log(helloMsg);
    }

    ifChange = e => {
            this.setState({ [e.target.name]: e.target.value });
    };

    render() {
    const { hello, msg, status, id, sending, subRes, subResd, msgd, statusd } = this.props.olla;
            return (
            <div className="homelft fx fxdc fxjcc fxaic tac">
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

                    <input 
                    type="hidden" 
                    id="recap" 
                    name="recaptchare" 
                    />

                <div className="subqsn  cf">
                        <div className="qsndv">
                        Zombie Test, what is? <br />
                        47 + 42
                        </div>
                        <div className="rbotdv">
                        <input 
                        type="text" 
                        name="rbot" 
                        placeholder="Your Answer"
                        onChange={this.ifChange}
                        />
                        </div>
                </div>
                <div>{sending ? ('Sending.....'):('')}</div>
                <div><p>subRes: {subRes}</p></div>
                <div><p>subResd: {subResd}</p></div>
                <div><p>msg: {msg}</p></div>
                <div><p>msgd: {msgd}</p></div>
                <div><p>status: {status}</p></div>
                <div><p>statusd: {statusd}</p></div>
                {/* {subRes ? (`${subRes}`):(`${msg}`)} */}
                {/* <div><p>{msg}</p></div>
                <div><p>{status}</p></div> */}
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
