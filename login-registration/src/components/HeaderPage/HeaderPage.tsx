import React, { useState } from "react";
import './HeaderPage.css'


const HeaderPage = () => {
    const [isMenuOpen, setMenuOpen] = useState(false)

    const onMenuClick = () => {
        setMenuOpen(!isMenuOpen)
    }

    return (
       <header className="header">
           <div className="header__container">
                <div className="header__menu menu">
                    <div className={isMenuOpen ? "menu__icon _active" : "menu__icon"} onClick={onMenuClick}>
                        <span></span>
                    </div>
                    <nav className={isMenuOpen ? "menu__body _active" : "menu__body"}>
                        <div className="menu__body__container">
                            <div className="menu__list">
                                <div className="menu__list__main">
                                    <ul>
                                        <li>All posts</li>
                                    </ul>
                                    <ul>
                                        <li>My posts</li>
                                        <li>Add posts</li>
                                    </ul>
                                </div>
                                <ul>
                                    <li>Log out</li>
                                </ul>    
                            </div>
                        </div>
                    </nav> 
                </div>
                <h3 className="header__title">Username</h3>
           </div>
       </header>
    )
}

export default HeaderPage