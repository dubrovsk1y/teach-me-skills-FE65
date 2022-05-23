import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Theme, useThemeContext } from "../../../context/themeModeContext"

import Button from "../../../components/Button"
import Input from "../../../components/Input"
import checkForLowerСaseLetters from "../../../util/checkForLowerСaseLetters"
import checkForUpperСaseLetters from "../../../util/checkForUpperСaseLetters"
import checkForNumbers from "../../../util/checkForNubers"
import checkForRuLetters from "../../../util/checkForRuLetters"
import { useDispatch } from "react-redux"
import { login } from "../../../redux/actions/actions"

const RegistrationForm = () => {
    const { theme } = useThemeContext()
    const isLightTheme = theme === Theme.Light

    const dispatch = useDispatch()

    const [isFormActive, setFormActive] = useState(false)
    
    const [userNameValue, setUserNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const [passwordConfirmValue, setPasswordConfirmValue] = useState('')

    const validationForm = (userName: string, email: string, password: string, confirmPassword: string) => {
        
        const validErrors: {userName?: string, email?: string, password?: string, confirmPassword?: string} = {}

        if(userName.length > 15) validErrors.userName = 'User name must not exceed 15 characters'
        if(checkForRuLetters(userName)) validErrors.password = 'User name must not contain Russian letters'
        if(!userName.trim()) validErrors.userName  = 'This is a required field'
        
        if(checkForRuLetters(email)) validErrors.email = 'Email must not contain Russian letters'
        if(!email.trim()) validErrors.email  = 'This is a required field'

        if(!checkForLowerСaseLetters(password)) validErrors.password = 'Password must contain lower case letters'
        if(!checkForUpperСaseLetters(password)) validErrors.password = 'Password must contain capital letters'
        if(!checkForNumbers(password)) validErrors.password = 'Password must contain numbers'
        if(checkForRuLetters(password)) validErrors.password = 'Password must not contain Russian letters'
        if(password.length < 8 || password.length > 15) validErrors.password = 'Password length must be 8 - 15 characters'

        if(password !== confirmPassword) validErrors.confirmPassword = 'Passwords do not match'
        if(!confirmPassword.trim()) validErrors.confirmPassword  = 'This is a required field'

        return Object.keys(validErrors).length ? validErrors : null
    }

    const [validation, setValidation] = useState(validationForm(userNameValue, emailValue, passwordValue, passwordConfirmValue))
    const navigate = useNavigate()

    const onSubmitForm = (event: any) => {
        event.preventDefault()
        setFormActive(true)

        if(!validation) {
            navigate('/confirmation', {
                state: {
                    emailValue,
                }
            })
            setFormActive(false)
            setUserNameValue('')
            setEmailValue('')
            setPasswordValue('')
            setPasswordConfirmValue('')
        }
    }

    const onChangeUserName = (event: any) => {
        setUserNameValue(event.target.value)
        setValidation(validationForm(event.target.value, emailValue, passwordValue, passwordConfirmValue))
    }

    const onChangeEmail = (event: any) => {
        setEmailValue(event.target.value)
        setValidation(validationForm(userNameValue, event.target.value, passwordValue, passwordConfirmValue))
    }

    const onChangePassword = (event: any) => {
        setPasswordValue(event.target.value)
        setValidation(validationForm(userNameValue, emailValue, event.target.value, passwordConfirmValue))
    }

    const onChangeConfirmPassword = (event: any) => {
        setPasswordConfirmValue(event.target.value)
        setValidation(validationForm(userNameValue, emailValue, passwordValue, event.target.value))
    }

    const onLoginClick = () => {
        dispatch(login())
    }

    return (     
        <form onSubmit={onSubmitForm} action="" className="authorizationForm">
            <div>
                <label>
                    User name
                    <Input 
                        onChange={onChangeUserName} 
                        value={userNameValue}
                        placeholder={'Enter your user name'} 
                        className={isLightTheme ? 'authorizationForm__input' : 'authorizationForm__input _dark'} 
                        type={'text'} 
                        id={'userName'}
                    ></Input> 
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isFormActive ? (validation?.userName ? validation.userName : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Email
                    <Input 
                        onChange={onChangeEmail} 
                        value={emailValue}
                        placeholder={'Enter your email'} 
                        className={isLightTheme ? 'authorizationForm__input' : 'authorizationForm__input _dark'} 
                        type={'email'} 
                        id={'email'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isFormActive ? (validation?.email ? validation.email : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Password
                    <Input 
                        onChange={onChangePassword} 
                        value={passwordValue}
                        placeholder={'Enter your password'} 
                        className={isLightTheme ? 'authorizationForm__input' : 'authorizationForm__input _dark'} 
                        type={'password'} 
                        id={'password'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isFormActive ? (validation?.password ? validation.password : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Confirm Password
                    <Input 
                        onChange={onChangeConfirmPassword} 
                        value={passwordConfirmValue}
                        placeholder={'Enter your password again'} 
                        className={isLightTheme ? 'authorizationForm__input' : 'authorizationForm__input _dark'} 
                        type={'password'} 
                        id={'confirmPassword'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isFormActive ? (validation?.confirmPassword ? validation.confirmPassword : '') : ''}    
                </p>
            </div>
            <Button className={'default-button authorizationForm__btn'} text={'Registration'}></Button>
            <p className="authorizationForm__footer">If you have account you can <span onClick={() => onLoginClick()}>login</span></p>
        </form>   
    ) 
}

export default RegistrationForm