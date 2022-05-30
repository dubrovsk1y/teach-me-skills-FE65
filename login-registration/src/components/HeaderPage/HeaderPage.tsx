import React, { useState } from "react";
import "./HeaderPage.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch } from "react-redux";
import { login, registartion } from "../../redux/actions/actions";
import { setAuthStatus } from "../../redux/reducers/authReducer";
import classNames from "classnames";

const HeaderPage = (props: any) => {
  const { isLoggedIn } = props;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();

  const onClick = (isLogin: boolean) => {
    isLogin ? dispatch(login()) : dispatch(registartion());
    setMenuOpen(false);
  };

  const onClickTheme = () => {
    isLightTheme ? onChangeTheme(Theme.Dark) : onChangeTheme(Theme.Light);
  };

  const onMenuClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  const onLogOutClick = () => {
    dispatch(setAuthStatus(false));
    setMenuOpen(false);
    localStorage.removeItem("authStatus");
  };

  return (
    <div>
      <header className={isLightTheme ? "header" : "header _dark"}>
        <div className="header__container _container">
          <div className="header__group">
            <div className="header__menu menu">
              <div className={classNames("menu__icon", { ["_active"]: isMenuOpen })} onClick={onMenuClick}>
                <span></span>
              </div>
              <nav className={classNames("menu__body", { ["_active"]: isMenuOpen, ["_dark"]: !isLightTheme })}>
                <div className="menu__body__container _container">
                  {isLoggedIn ? (
                    <div className="menu__list">
                      <div className="menu__list__main">
                        <ul>
                          <li>
                            <NavLink onClick={onMenuClick} to="/all-posts">
                              All posts
                            </NavLink>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <NavLink onClick={onMenuClick} to="/my-posts">
                              My posts
                            </NavLink>
                          </li>
                          <li>
                            <NavLink onClick={onMenuClick} to="/add-posts">
                              Add posts
                            </NavLink>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <NavLink onClick={onMenuClick} to="/information">
                              Information
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                      <ul>
                        <li>
                          <NavLink onClick={onLogOutClick} to="/auth">
                            Log out
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  ) : (
                    <div className="menu__list">
                      <ul>
                        <li>
                          <NavLink to="/auth" onClick={() => onClick(true)}>
                            Login
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/auth" onClick={() => onClick(false)}>
                            Registration
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  )}
                </div>
              </nav>
            </div>
            {isLoggedIn ? <h3 className="header__title">Username</h3> : ""}
          </div>
          <div className="checkbox__group">
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label onClick={onClickTheme} className="checkbox__label" htmlFor="checkbox"></label>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};

export default HeaderPage;
