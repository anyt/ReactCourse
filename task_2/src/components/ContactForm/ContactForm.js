import React from 'react';
import './ContactFrom.css';

class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            successMessage: ''
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {name, email, message} = this.state;
        fetch('./form-submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({name, email, message})
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                this.setState({
                    successMessage: 'Your message was sent successfully!'
                });
            });
    }

    render() {
        return (
            <article id="contact">
                <h2>Contact</h2>
                <h4>
                    Consectetur adipiscing elit viverra tristique placerat in massa consectetur
                </h4>
                <p>
                    Vitae faucibus diam consequat maecenas. Turpis metus sit diam purus leo in varius ac quam lorem est
                    persetera
                </p>

                <p>
                    <strong>EMAIL:</strong> company@youremail.com<br/>
                    <strong>WEBSITE:</strong> www.yourwebsite.com
                </p>
                {this.state.successMessage &&
                    <div className="flash-message">{this.state.successMessage}</div>
                }
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="name" id="name" placeholder="name" value={this.state.name}
                           onChange={this.handleChange}/>
                    <input type="text" name="email" id="email" placeholder="email" value={this.state.email}
                           onChange={this.handleChange}/>
                    <input type="text" name="message" id="message" placeholder="message" value={this.state.message}
                           onChange={this.handleChange}/>
                    <button>Send message</button>
                </form>
            </article>
        );
    }
}

export default ContactForm;
