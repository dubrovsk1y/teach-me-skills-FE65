import React, { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import checkForLowerСaseLetters from "../../../util/checkForLowerСaseLetters";
import checkForUpperСaseLetters from "../../../util/checkForUpperСaseLetters";
import checkForNumbers from "../../../util/checkForNubers";
import checkForRuLetters from "../../../util/checkForRuLetters";
import { Theme, useThemeContext } from "../../../context/themeModeContext";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/reducers/authReducer";
import { loadUserInfoData } from "../../../redux/reducers/userReducer";

const LoginForm = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const validationForm = (email: string, password: string) => {
    const validErrors: { email?: string; password?: string } = {};

    if (!email.trim()) validErrors.email = "This is a required field";
    if (checkForRuLetters(email)) validErrors.email = "Email must not contain Russian letters";

    if (!checkForLowerСaseLetters(password)) validErrors.password = "Password must contain lower case letters";
    if (!checkForUpperСaseLetters(password)) validErrors.password = "Password must contain capital letters";
    if (!checkForNumbers(password)) validErrors.password = "Password must contain numbers";
    if (checkForRuLetters(password)) validErrors.password = "Password must not contain Russian letters";
    if (password.length < 8 || password.length > 15) validErrors.password = "Password length must be 8 - 15 characters";

    return Object.keys(validErrors).length ? validErrors : null;
  };

  const [isFormActive, setFormActive] = useState(false);
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const [validation, setValidation] = useState(validationForm(emailValue, passwordValue));

  const onSubmitForm = (event: any) => {
    event.preventDefault();
    setFormActive(true);
    if (!validation) {
      setEmailValue("");
      setPasswordValue("");
      setFormActive(false);
      dispatch(loginUser({ email: emailValue, password: passwordValue }));
      dispatch(loadUserInfoData({}));
    }
  };

  const onChangeEmail = (event: any) => {
    setEmailValue(event.target.value);
    setValidation(validationForm(event.target.value, passwordValue));
  };

  const onChangePassword = (event: any) => {
    setPasswordValue(event.target.value);
    setValidation(validationForm(emailValue, event.target.value));
  };

  return (
    <form onSubmit={onSubmitForm} action="" className="authorizationForm">
      <div>
        <label>
          Email
          <Input
            onChange={onChangeEmail}
            value={emailValue}
            placeholder={"Enter your email"}
            className={isLightTheme ? "authorizationForm__input" : "authorizationForm__input _dark"}
            type={"email"}
            id={"email"}
          ></Input>
        </label>
        <p className="authorizationForm__validText">
          {isFormActive ? (validation?.email ? validation.email : "") : ""}
        </p>
      </div>

      <div>
        <label>
          Password
          <Input
            onChange={onChangePassword}
            value={passwordValue}
            placeholder={"Enter your password"}
            className={isLightTheme ? "authorizationForm__input" : "authorizationForm__input _dark"}
            type={"password"}
            id={"password"}
          ></Input>
        </label>
        <p className="authorizationForm__validText">
          {isFormActive ? (validation?.password ? validation.password : "") : ""}
        </p>
      </div>

      <Button className={"default-button authorizationForm__btn"} text={"Login"}></Button>
      <p className="authorizationForm__footer">
        Forgot your password? <span>Reset password</span>
      </p>
    </form>
  );
};

export default LoginForm;
