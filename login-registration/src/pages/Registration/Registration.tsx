import React from "react";
import './Registration.css'
import Input from "../../components/Input";
import Title from "../../components/Title";
import Button from "../../components/Button";

const Registration = () => {
    return (
        <div className="registrationWrapper">
            <div className="registration__title">
                <Title text={'Login'}></Title>
                <span>|</span>
                <Title className={'_active'} text={'Registration'}></Title>
            </div>
            <form action="" className="registration__form">
                <label htmlFor="userName">User name</label>
                <Input className={'registration__form__input'} type={'text'} id={'userName'}></Input>

                <label htmlFor="email">Email</label>
                <Input className={'registration__form__input'} type={'email'} id={'email'}></Input>

                <label htmlFor="password">Password</label>
                <Input className={'registration__form__input'} type={'password'} id={'password'}></Input>

                <label htmlFor="confirmPassword">Confirm Password</label>
                <Input className={'registration__form__input'} type={'password'} id={'confirmPassword'}></Input>
                
                <Button className={'registration__form__btnRegistration'} text={'Registration'}></Button>
            </form>
            <p className="registration__have">If you have account you can <span>login</span></p>
        </div>
    )
}

export default Registration