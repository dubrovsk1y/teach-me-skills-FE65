import React, { useState } from "react"
import Button from "../../../components/Button"
import Input from "../../../components/Input"

const LoginForm = () => {
    const [isLoginFormActive, setLoginFormActive] = useState(false)

    const [emailLoginValue, setEmailLoginValue] = useState('')
    const [passwordLoginValue, setPasswordLoginValue] = useState('')

    const validationLoginForm = (email: string, password: string) => {
        
        const validErrors: {email?: string, password?: string} = {}
        
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


        if(!email.trim()) validErrors.email  = 'This is a required field'

        if(!checkForLowerСaseLetters(password)) validErrors.password = 'Password must contain lower case letters'
        if(!checkForUpperСaseLetters(password)) validErrors.password = 'Password must contain capital letters'
        if(!checkForNumbers(password)) validErrors.password = 'Password must contain numbers'
        if(checkForRuLetters(password)) validErrors.password = 'Password must not contain Russian letters'
        if(password.length < 8 || password.length > 15) validErrors.password = 'Password length must be 8 - 15 characters'

        return Object.keys(validErrors).length ? validErrors : null
    }

    const valid = validationLoginForm(emailLoginValue, passwordLoginValue)

    const onLoginSubmitForm = (event: any) => {
        event.preventDefault()

        setLoginFormActive(true)

        if(!valid) {
            setLoginFormActive(false)
            setEmailLoginValue('')
            setPasswordLoginValue('')
        }
    }
        
    return (
        <form onSubmit={onLoginSubmitForm} action="" className="authorizationForm">
            <div>
                <label>
                    Email
                    <Input 
                        onChange={(event: any) => {
                            setEmailLoginValue(event.target.value)
                        }} 
                        value={emailLoginValue} 
                        placeholder={'Enter your email'} 
                        className={'authorizationForm__input'} 
                        type={'email'} 
                        id={'email'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isLoginFormActive ? (valid?.email ? valid.email : '') : ''}
                </p>
            </div>

            <div>
                <label>
                    Password
                    <Input 
                        onChange={(event: any) => setPasswordLoginValue(event.target.value)}
                        value={passwordLoginValue}
                        placeholder={'Enter your password'} 
                        className={'authorizationForm__input'} 
                        type={'password'} 
                        id={'password'}
                    ></Input>
                </label>
                <p 
                    className="authorizationForm__validText">
                    {isLoginFormActive ? (valid?.password ? valid.password : '') : ''}
                </p>
            </div>

            <Button className={'authorizationForm__btn'} text={'Login'}></Button>
            <p className="authorizationForm__footer">Forgot your password? <span>Reset password</span></p>
        </form>
    )
}

export default LoginForm