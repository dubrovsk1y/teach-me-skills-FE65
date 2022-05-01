import React, { useState, FC } from "react";
import './Authorization.css'
import HeaderForm from "./HeaderForm";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { Outlet } from "react-router-dom";

const Authorization = () => {
    const { theme } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const [tabName, setTabName] = useState('login')

    const onHeaderButtonClick = (name: string) => {
        setTabName(name)
    }

    return (
        <div className={isLightTheme ? "authorization" : "authorization _dark"}> 
            <div className="authorization__container _container">               
                <HeaderForm onHeaderClick={onHeaderButtonClick} activeTab={tabName}></HeaderForm>            
                <Outlet></Outlet>
            </div>
        </div>    
    )
}

export default Authorization