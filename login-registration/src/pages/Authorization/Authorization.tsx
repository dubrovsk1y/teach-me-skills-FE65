import React, { useState, FC } from "react";
import './Authorization.css'
import HeaderForm from "./HeaderForm";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";

const Authorization = () => {
    const { theme } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const [tabName, setTabName] = useState('login')
    const isLogin = tabName === 'login'

    const changeLoginOrRegistration = (name: string) => {
        setTabName(name)
    }

    return (
        <div className={isLightTheme ? "authorization" : "authorization _dark"}> 
            <div className="authorization__container _container">               
                <HeaderForm onHeaderClick={changeLoginOrRegistration} activeTab={tabName}></HeaderForm>            
                {isLogin ? <LoginForm></LoginForm> : <RegistrationForm onLoginClick={changeLoginOrRegistration}></RegistrationForm>}
            </div>
        </div>    
    )
}

export default Authorization