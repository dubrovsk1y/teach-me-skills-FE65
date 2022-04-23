import React, { useState, FC } from "react";
import './Authorization.css'
import HeaderForm from "./HeaderForm";
import Input from "../../components/Input";
import Button from "../../components/Button";
import RegistrationConfirmation from "../RegistrationConfirmation";

const LoginForm = () => {
    return (

        <form action="" className="authorizationForm">
            <label>
                Email
                <Input placeholder={'Enter your email'} className={'authorizationForm__input'} type={'email'} id={'email'}></Input>
            </label>

            <label>
                Password
                <Input placeholder={'Enter your password'} className={'authorizationForm__input'} type={'password'} id={'password'}></Input>
            </label>

            <Button className={'authorizationForm__btn'} text={'Login'}></Button>
            <p className="authorizationForm__footer">Forgot your password? <span>Reset password</span></p>
        </form>

    )
}

type RegistrationFormProps = {
    onLoginClick: (name: string) => void;
    onRegistrationClick: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = ({onLoginClick, onRegistrationClick}) => { 
    
    
    return (
        
        <form action="" className="authorizationForm">
            <label>
                User name
                <Input placeholder={'Enter your user name'} className={'authorizationForm__input'} type={'text'} id={'userName'}></Input> 
            </label>

            <label>
                Email
                <Input placeholder={'Enter your email'} className={'authorizationForm__input'} type={'email'} id={'email'}></Input>
            </label>

            <label>
                Password
                <Input placeholder={'Enter your password'} className={'authorizationForm__input'} type={'password'} id={'password'}></Input>
            </label>

            <label>
                Confirm Password
                <Input placeholder={'Enter your password again'} className={'authorizationForm__input'} type={'password'} id={'confirmPassword'}></Input>
            </label>

            <Button className={'authorizationForm__btn'} text={'Registration'} onClick={() => onRegistrationClick()}></Button>
            <p className="authorizationForm__footer">If you have account you can <span onClick={() => onLoginClick('login')}>login</span></p>
        </form>
        
    ) 
}

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