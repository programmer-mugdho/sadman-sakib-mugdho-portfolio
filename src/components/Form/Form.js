import React from "react";

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/f/xjvpryrk"
                method="POST"
            >
                <input type="text" placeholder='Enter Your Name' className="form-control" name='Name'/>
                <input type="email" placeholder='Enter Your Email' className="form-control" name="Email" />
                <textarea type="text" rows='5' placeholder='What Do You Want To Say' className="form-control" name="Message"></textarea>
                {status === "SUCCESS" ? <button className='btn my-button'>Contact Me</button> : <button className='btn my-button'>Contact Me</button>}
                {status === "ERROR" && <p style={{ color: 'red' }}>Ooops! There was an error.</p>}
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}