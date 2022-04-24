import React, { useState, FC } from "react";
import './Authorization.css'
import HeaderForm from "./HeaderForm";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";
import RegistrationConfirmation from "../RegistrationConfirmation";

const Authorization = () => {
    const [tabName, setTabName] = useState('login')
    const [isConfirmed, setConfirmed] = useState(false)

    const onHeaderButtonClick = (name: string) => {
        setTabName(name)
    }

    const onFooterButtonClick = (name: string) => {
        setTabName(name)
    }

    const onRegistrationButtonClick = () => {
        setConfirmed(true)   
    }

    return (
        !isConfirmed ? (
            <div className="authorizationWrapper">
                <HeaderForm onHeaderClick={onHeaderButtonClick} activeTab={tabName} ></HeaderForm>
                {tabName === "login" ? <LoginForm></LoginForm> : <RegistrationForm onRegistrationClick={onRegistrationButtonClick} onLoginClick={onFooterButtonClick}></RegistrationForm>}
            </div>
        ) : (
            <RegistrationConfirmation></RegistrationConfirmation>
        )
        
    )
}

export default Authorization