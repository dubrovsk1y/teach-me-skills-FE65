import React from "react";
import './RegistrationConfirmation.css'
import Button from "../../components/Button";

const RegistrationConfirmation = () => {
    return (
        <div className="registrationConfirmationWrapper">
            <h3 className="registrationConfirmation__title">Registration Confirmation</h3>
            <p className="registrationConfirmation__text">
                Please activate your account with the activation link in the email <a href="#.">test@gmail.com</a> Please check your email
            </p>
            <Button className={'registrationConfirmation__btnHome'} text={'Home'}></Button>
        </div>
    )
}

export default RegistrationConfirmation