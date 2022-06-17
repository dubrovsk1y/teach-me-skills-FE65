import React from "react";
import "./Authorization.css";
import HeaderForm from "./HeaderForm";
import RegistrationForm from "./RegistrationForm";
import LoginForm from "./LoginForm";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authReducer";
import { TabsSelectors } from "../../redux/reducers/tabsReducer";
import classNames from "classnames";

const Authorization = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const activeTab = useSelector(TabsSelectors.getAuthorizarionTab);
  const isLoginActive = activeTab === "LOGIN";
  const isRegisterUserLoading = useSelector(AuthSelectors.getRegisterUserLoading);
  const isLoginUserLoading = useSelector(AuthSelectors.getLoginUserLoading);

  return (
    <div className={classNames("authorization", { ["_dark"]: !isLightTheme })}>
      {isRegisterUserLoading || isLoginUserLoading ? (
        <Lottie options={defaultOptions} height={400} width={400} />
      ) : (
        <div className="authorization__container _container">
          <HeaderForm></HeaderForm>
          {isLoginActive ? <LoginForm></LoginForm> : <RegistrationForm></RegistrationForm>}
        </div>
      )}
    </div>
  );
};

export default Authorization;
