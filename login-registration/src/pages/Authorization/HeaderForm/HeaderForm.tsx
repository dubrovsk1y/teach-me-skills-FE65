import React from "react";
import "./HeaderForm.css";
import { useDispatch, useSelector } from "react-redux";
import { setAuthorizarionTab, TabsSelectors } from "../../../redux/reducers/tabsReducer";
import classNames from "classnames";

const HeaderForm = () => {
  const dispatch = useDispatch();
  const activeTab = useSelector(TabsSelectors.getAuthorizarionTab);
  const isLoginActive = activeTab === "LOGIN";

  return (
    <div className="headerForm">
      <h3
        onClick={() => dispatch(setAuthorizarionTab("LOGIN"))}
        className={classNames("title", { ["_active"]: isLoginActive })}
      >
        Login
      </h3>
      <span>|</span>
      <h3
        onClick={() => dispatch(setAuthorizarionTab("REGISTRATION"))}
        className={classNames("title", { ["_active"]: !isLoginActive })}
      >
        Registration
      </h3>
    </div>
  );
};

export default HeaderForm;
