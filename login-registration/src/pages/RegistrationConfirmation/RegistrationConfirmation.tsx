import React from "react";
import "./RegistrationConfirmation.css";
import Button from "../../components/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useThemeContext, Theme } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors, userActivate } from "../../redux/reducers/authReducer";
import { login } from "../../redux/actions/actions";

const RegistrationConfirmation = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tempMail = useSelector(AuthSelectors.getTempMail);

  const { uuid, token } = useParams();

  const onHomeClick = () => {
    dispatch(login());
    dispatch(userActivate({ uuid, token }));
    navigate("/auth");
  };
  return (
    <div className="registrationConfirmationWrapper">
      <h3 className="registrationConfirmation__title">Registration Confirmation</h3>
      <p className={isLightTheme ? "registrationConfirmation__text" : "registrationConfirmation__text _dark"}>
        Please activate your account with the activation link in the email <a href="#.">{tempMail}</a> Please check your
        email
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
