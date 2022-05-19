import React, { useState } from "react";
import './HeaderPage.css'
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch } from "react-redux";
import { login, registartion } from "../../redux/actions/actions";

const HeaderPage = (props: any) => {
    const { isLoggedIn } = props
    const [isMenuOpen, setMenuOpen] = useState(false)
    const { theme, onChangeTheme = () => {} } = useThemeContext()
    const isLightTheme = theme === Theme.Light
    const dispatch = useDispatch()

    const onClick = (isLogin: boolean) => {
        isLogin ? dispatch(login()) : dispatch(registartion())
    }

    const onClickTheme = () => {
        isLightTheme ? onChangeTheme(Theme.Dark) : onChangeTheme(Theme.Light)
    }
    
    const onMenuClick = () => {
        setMenuOpen(!isMenuOpen)
    }

    const onLogOutClick = () => {
        localStorage.removeItem("isLoggedIn")
        window.location.replace("/auth")
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
                                                        <li><NavLink to="/all-posts">All posts</NavLink></li>
                                                    </ul>
                                                    <ul>
                                                        <li><NavLink to="/my-posts">My posts</NavLink></li>
                                                        <li><NavLink to="/add-posts">Add posts</NavLink></li>
                                                    </ul>
                                                    <ul>
                                                        <li><NavLink to="/information">Information</NavLink></li>
                                                    </ul>
                                                </div>
                                                <ul>
                                                    <li><NavLink onClick={onLogOutClick} to="/authorization">Log out</NavLink></li>
                                                </ul>
                                            </div>
                                        ) : (
                                            <div className="menu__list">
                                                <ul>
                                                    <li><NavLink to="/auth" onClick={() => onClick(true)}>Login</NavLink></li>
                                                    <li><NavLink to="/auth" onClick={() => onClick(false)}>Registration</NavLink></li>
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