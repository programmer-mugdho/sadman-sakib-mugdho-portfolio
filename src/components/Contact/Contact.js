import React from 'react';
import Form from '../Form/Form'
import './Contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h1 className='title'><span>CONTACT</span> ME</h1>
            <div className="row">
                <div className="col-md-6 about-details">
                    <p>I am interested in working with any company that thinks my skill will be helpful for them. If you are looking for someone like me, please let me know. Or you can just 'say hi' to me.</p>
                    {/* <div className="action">
                        <a className='btn' href="#">Contact Me</a>
                    </div> */}
                </div>
                <div className="col-md-6">
                    {/* <h4>Email</h4>
                    <p>sadmansakibmugdho1@gmail.com</p>
                    <h4>Skype</h4>
                    <p></p>
                    <h4>Social</h4>
                    <p>Twitter</p>
                    <h4>Address</h4>
                    <p>Faridpur, Dhaka, Bangladesh</p> */}
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default Contact;