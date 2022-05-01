import React, { useState } from "react";
import './HeaderPage.css'
import { Outlet, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";

const HeaderPage = (props: any) => {
    const { isLoggedIn } = props
    const [isMenuOpen, setMenuOpen] = useState(false)
    const { theme, onChangeTheme = () => {} } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const onClickTheme = () => {
        isLightTheme ? onChangeTheme(Theme.Dark) : onChangeTheme(Theme.Light)
    }
    
    const onMenuClick = () => {
        setMenuOpen(!isMenuOpen)
    }

    const onLogOutClick = () => {
        localStorage.removeItem("isLoggedIn")
        window.location.replace("authorization/login")
    }

    return (
        <div> 
            <header className={isLightTheme ? "header" : "header _dark"}>
                <div className="header__container _container">
                        <div className="header__group">
                            <div className="header__menu menu">
                                <div className={isMenuOpen ? "menu__icon _active" : "menu__icon"} onClick={onMenuClick}>
                                    <span></span>
                                </div>
                                <nav className={isLightTheme ? (isMenuOpen ? "menu__body _active" : "menu__body") : (isMenuOpen ? "menu__body _active _dark" : "menu__body _dark")}>
                                    <div className="menu__body__container _container">                                        
                                            {isLoggedIn ? (
                                                <div className="menu__list">
                                                    <div className="menu__list__main">
                                                        <ul>
                                                            <li><NavLink to="/cards-list">All posts</NavLink></li>
                                                        </ul>
                                                        <ul>
                                                            <li><NavLink to="/cards-list">My posts</NavLink></li>
                                                            <li><NavLink to="/cards-list">Add posts</NavLink></li>
                                                        </ul>
                                                    </div>
                                                    <ul>
                                                        <li><NavLink onClick={onLogOutClick} to="/authorization">Log out</NavLink></li>
                                                    </ul>
                                                </div>
                                            ) : (
                                                <div className="menu__list">
                                                    <ul>
                                                        <li><NavLink to="authorization/login">Login</NavLink></li>
                                                        <li><NavLink to="authorization/registration">Registration</NavLink></li>
                                                    </ul>
                                                </div>
                                            )}  
                                    </div>
                                </nav> 
                            </div>
                            {isLoggedIn ? <h3 className="header__title">Username</h3> : ""} 
                        </div>
                        <div className="checkbox__group">
                            <input type="checkbox" className="checkbox" id="checkbox"/>
                            <label onClick={onClickTheme} className="checkbox__label" htmlFor="checkbox"></label>
                        </div>
                </div>
            </header>
            <Outlet></Outlet>
        </div>
    )
}

export default HeaderPage