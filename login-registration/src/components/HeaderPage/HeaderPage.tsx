import React, { FC, useEffect, useState } from "react";
import "./HeaderPage.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { setAuthStatus } from "../../redux/reducers/authReducer";
import { setAuthorizarionTab } from "../../redux/reducers/tabsReducer";
import classNames from "classnames";
import { loadUserInfoData, UserSelectors } from "../../redux/reducers/userReducer";

type HeaderPageProps = {
  isLoggedIn: boolean;
};

const HeaderPage: FC<HeaderPageProps> = ({ isLoggedIn }) => {
  const dispatch = useDispatch();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const { theme, onChangeTheme = () => {} } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const { username } = useSelector(UserSelectors.getUserInfo);

  const onClick = (isLogin: boolean) => {
    dispatch(setAuthorizarionTab(isLogin ? "LOGIN" : "REGISTRATION"));
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
  };

  return (
    <div>
      <header className={classNames("header", { ["_dark"]: !isLightTheme })}>
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
            {isLoggedIn ? <h3 className="header__title">{username}</h3> : ""}
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
