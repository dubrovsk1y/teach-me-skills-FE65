import React from "react";
import './RegistrationConfirmation.css'
import Title from "../../components/Title";
import Button from "../../components/Button";

const RegistrationConfirmation = () => {
    return (
        <div className="registrationConfirmationWrapper">
            <Title className={'registrationConfirmation__title'} text={'Registration Confirmation'}></Title>
            <p className="registrationConfirmation__text">
                Please activate your account with the activation link in the email <a href="#.">test@gmail.com</a> Please check your email
            </p>
            <Button className={'registrationConfirmation__btnHome'} text={'Home'}></Button>
        </div>
    )
}

export default RegistrationConfirmation