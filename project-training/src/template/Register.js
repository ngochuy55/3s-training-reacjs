import React, { useState } from 'react';
import '../assets/css/Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import Navbar from '../components/common/Navbar';
const initFormValue = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
};

export default function RegisterPage() {
    document.title = 'Register'
    const [formValue, setFormValue] = useState(initFormValue);
    const handleChange = (e) => {
        const { value, name } = e.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue)
    }

    return (
        <>
            <Navbar />
            <section>
                <div className="form-box register-form">
                    <div className="form-value">
                        <form >
                            <h2>Register</h2>

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="text" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faUser} /> Full Name</label>
                            </div>


                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="date" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faUser} /> Birthday</label>
                            </div>

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="file" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faUser} /> Avartar</label>
                            </div>

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="text" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faEnvelope} className="input-icon" /> Email</label>
                            </div>
                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faKey} className="input-icon" /> Password</label>
                            </div>

                            <div className="inputbox">
                                <ion-icon name="lock-closed-outline"></ion-icon>
                                <input type="password" required />
                                <label htmlFor=""><FontAwesomeIcon icon={faKey} className="input-icon" /> Confirm Password</label>
                            </div>

                            <button
                                className='form-button' onClick={handleSubmit}>Log in</button>
                            <div className="register">
                                <p>Already have a account ? <a href="/login">Login</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}