import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, registartion } from "../../../redux/actions/actions";
import { LOGIN } from "../../../redux/types";
import './HeaderForm.css';

const HeaderForm = () => {
    const dispatch = useDispatch()
    const activeTab = useSelector((state: any) => state.activeTab)

    const isLoginActive = activeTab === LOGIN

    const onClick = (isLogin: boolean) => {
        dispatch(isLogin ? login() : registartion())
    }

    return (
        <div className="headerForm">
            <h3 
                onClick={() => onClick(true)} 
                className={isLoginActive ? 'title _title-active' : 'title'}>Login</h3>
            <span>|</span>
            <h3 
                onClick={() => onClick(false)} 
                className={isLoginActive ? 'title' : 'title _title-active'}>
                Registration
            </h3>
        </div>
    )
}

export default HeaderForm