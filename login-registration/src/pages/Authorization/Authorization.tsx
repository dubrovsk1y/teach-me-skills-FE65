import React, { useState, FC } from "react";
import './Authorization.css'
import HeaderForm from "./HeaderForm";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";
import { LOGIN } from "../../redux/types";

const Authorization = () => {
    const { theme } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const activeTab = useSelector((state: any) => state.activeTab)
    const isLoginActive = activeTab === LOGIN

    return (
        <div className={isLightTheme ? "authorization" : "authorization _dark"}> 
            <div className="authorization__container _container">               
                <HeaderForm></HeaderForm>            
                {isLoginActive ? <LoginForm></LoginForm> : <RegistrationForm></RegistrationForm>}
            </div>
        </div>    
    )
}

export default Authorization