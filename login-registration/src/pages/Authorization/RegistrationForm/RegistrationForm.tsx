import React, { useState, FC } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"


type RegistrationFormProps = {
    onLoginClick: (name: string) => void;
    onRegistrationClick: () => void;
}

const RegistrationForm: FC<RegistrationFormProps> = (props) => { 
    const {onLoginClick, onRegistrationClick} = props
    const [isRegistrationFormActive, setRegistrationFormActive] = useState(false)
    
    const [userNameRegistrationValue, setUserNameRegistrationValue] = useState('')
    const [emailRegistrationValue, setEmailRegistrationValue] = useState('')
    const [passwordRegistrationValue, setPasswordRegistrationValue] = useState('')
    const [passwordConfirmRegistrationValue, setPasswordConfirmRegistrationValue] = useState('')

    const validationRegistrationForm = (userName: string, email: string, password: string, confirmPassword: string) => {
        
        const validErrors: {userName?: string, email?: string, password?: string, confirmPassword?: string} = {}
        
        const checkForNumbers = (string: string) => {
            const numbersToString: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    
            let isContain = false
    
            string.split('').forEach(item => {
                if(numbersToString.includes(item)) {
                    isContain = true
                }
                
            })
    
            return isContain
        }

        const checkForLowerСaseLetters = (string: string) => {
            let arr_en: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            let isContain = false
    
            string.split('').forEach(item => {
                if(arr_en.includes(item)) {
                    isContain = true
                }
                
            })
    
            return isContain
        }

        const checkForUpperСaseLetters = (string: string) => {
            let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];           
            let isContain = false

            string.split('').forEach(item => {
                if(arr_EN.includes(item)) {
                    isContain = true
                }
                
            })
    
            return isContain
        }

        const checkForRuLetters = (string: string) => {
            let arr_ru = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'э', 'ю', 'я'];
            let isContain = false

            string.toLowerCase().split('').forEach(item => {
                if(arr_ru.includes(item)) {
                    isContain = true
                }
                
            })
    
            return isContain
        }

        if(userName.length > 15) validErrors.userName = 'User name must not exceed 15 characters'
        if(checkForRuLetters(userName)) validErrors.password = 'User name must not contain Russian letters'
        if(!userName.trim()) validErrors.userName  = 'This is a required field'

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

    const valid = validationRegistrationForm(userNameRegistrationValue, emailRegistrationValue, passwordRegistrationValue, passwordConfirmRegistrationValue)

    const onRegistrationSubmitForm = (event: any) => {
        event.preventDefault()

        setRegistrationFormActive(true)

        if(!valid) {
            onRegistrationClick()
            setRegistrationFormActive(false)
            setUserNameRegistrationValue('')
            setEmailRegistrationValue('')
            setPasswordRegistrationValue('')
            setPasswordConfirmRegistrationValue('')
        }
    }

    return (     
        <form onSubmit={onRegistrationSubmitForm} action="" className="authorizationForm">
            <div>
                <label>
                    User name
                    <Input 
                        onChange={(event: any) => setUserNameRegistrationValue(event.target.value)} 
                        value={userNameRegistrationValue}
                        placeholder={'Enter your user name'} 
                        className={'authorizationForm__input'} 
                        type={'text'} 
                        id={'userName'}
                    ></Input> 
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isRegistrationFormActive ? (valid?.userName ? valid.userName : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Email
                    <Input 
                        onChange={(event: any) => setEmailRegistrationValue(event.target.value)} 
                        value={emailRegistrationValue}
                        placeholder={'Enter your email'} 
                        className={'authorizationForm__input'} 
                        type={'email'} 
                        id={'email'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isRegistrationFormActive ? (valid?.email ? valid.email : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Password
                    <Input 
                        onChange={(event: any) => setPasswordRegistrationValue(event.target.value)} 
                        value={passwordRegistrationValue}
                        placeholder={'Enter your password'} 
                        className={'authorizationForm__input'} 
                        type={'password'} 
                        id={'password'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isRegistrationFormActive ? (valid?.password ? valid.password : '') : ''}    
                </p>
            </div>
            <div>
                <label>
                    Confirm Password
                    <Input 
                        onChange={(event: any) => setPasswordConfirmRegistrationValue(event.target.value)} 
                        value={passwordConfirmRegistrationValue}
                        placeholder={'Enter your password again'} 
                        className={'authorizationForm__input'} 
                        type={'password'} 
                        id={'confirmPassword'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isRegistrationFormActive ? (valid?.confirmPassword ? valid.confirmPassword : '') : ''}    
                </p>
            </div>
            <Button className={'authorizationForm__btn'} text={'Registration'}></Button>
            <p className="authorizationForm__footer">If you have account you can <span onClick={() => onLoginClick('login')}>login</span></p>
        </form>   
    ) 
}

export default RegistrationForm