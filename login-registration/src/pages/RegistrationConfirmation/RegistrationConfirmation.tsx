import React from "react";
import "./RegistrationConfirmation.css";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useThemeContext, Theme } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, activateUser } from "../../redux/reducers/authReducer";
import { setAuthorizarionTab } from "../../redux/reducers/tabsReducer";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";

const RegistrationConfirmation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const { uuid, token } = useParams();
  const isLightTheme = theme === Theme.Light;
  const tempMail = useSelector(AuthSelectors.getTempMail);
  const isActivateUserLoading = useSelector(AuthSelectors.getActivateUserLoading);

  const onHomeClick = () => {
    dispatch(setAuthorizarionTab("LOGIN"));
    dispatch(activateUser({ uuid, token, callback: () => navigate("/auth") }));
  };
  return (
    <div className="registrationConfirmation">
      {isActivateUserLoading ? (
        <Lottie options={defaultOptions} height={400} width={400}></Lottie>
      ) : (
        <div className="registrationConfirmation__container _container">
          <h3 className="registrationConfirmation__title">Registration Confirmation</h3>
          <p className={isLightTheme ? "registrationConfirmation__text" : "registrationConfirmation__text _dark"}>
            Please activate your account with the activation link in the email <a href="#.">{tempMail}</a> Please check
            your email
          </p>
          <Button
            className={"default-button registrationConfirmation__btnHome"}
            text={"Home"}
            onClick={onHomeClick}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default RegistrationConfirmation;
