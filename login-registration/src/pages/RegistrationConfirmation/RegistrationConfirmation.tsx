import React from "react";
import "./RegistrationConfirmation.css";
import Button from "../../components/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useThemeContext, Theme } from "../../context/themeModeContext";
import { useDispatch } from "react-redux";
import { setAuthStatus } from "../../redux/reducers/authReducer";

const RegistrationConfirmation = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location: any = useLocation();

  const onHomeClick = () => {
    dispatch(setAuthStatus(true));
    localStorage.setItem("authStatus", "true");
    navigate("/all-posts");
  };
  return (
    <div className="registrationConfirmationWrapper">
      <h3 className="registrationConfirmation__title">Registration Confirmation</h3>
      <p className={isLightTheme ? "registrationConfirmation__text" : "registrationConfirmation__text _dark"}>
        Please activate your account with the activation link in the email{" "}
        <a href="#.">{location?.state?.emailValue ?? ""}</a> Please check your email
      </p>
      <Button
        className={"default-button registrationConfirmation__btnHome"}
        text={"Home"}
        onClick={onHomeClick}
      ></Button>
    </div>
  );
};

export default RegistrationConfirmation;
