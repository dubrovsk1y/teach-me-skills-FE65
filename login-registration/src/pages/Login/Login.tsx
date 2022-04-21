import React from "react";
import './Login.css'
import Input from "../../components/Input";
import Button from "../../components/Button";
import Title from "../../components/Title";

const Login = () => {
    return (
        <div className="loginWrapper">
            <div className="login__title">
                <Title className={'_active'} text={'Login'}></Title>
                <span>|</span>
                <Title text={'Registration'}></Title>
            </div>
            <form action="" className="login__form">
                <label htmlFor="email">Email</label>
                <Input className={'login__form__input'} type={'email'} id={'email'}></Input>

                <label htmlFor="password">Password</label>
                <Input className={'login__form__input'} type={'password'} id={'password'}></Input>

                <Button className={'login__form__btnLogin'} text={'Login'}></Button>
            </form>
            <p className="login__forgot">Forgot your password? <span>Reset password</span></p>
        </div>
    )
}

export default Login