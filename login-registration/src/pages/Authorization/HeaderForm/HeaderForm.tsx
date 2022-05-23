import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, registartion } from "../../../redux/actions/actions";
import { LOGIN } from "../../../redux/types";
import './HeaderForm.css';
import classNames from "classnames"

const HeaderForm = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state: any) => state.tabReducer.activeTab)

    const isLoginActive = activeTab === LOGIN

    const onClick = (isLogin: boolean) => {
        dispatch(isLogin ? login() : registartion())
    }

    return (
        <div className="headerForm">
            <h3 onClick={() => onClick(true)} className={classNames('title', {['_title-active']: isLoginActive})}>Login</h3>
            <span>|</span>
            <h3 onClick={() => onClick(false)} className={classNames('title', {['_title-active']: !isLoginActive})}>Registration</h3>
        </div>
    )
}

export default HeaderForm