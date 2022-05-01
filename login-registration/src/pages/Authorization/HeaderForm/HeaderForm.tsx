import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import './HeaderForm.css';

type HeaderFormProps = {
    onHeaderClick: (name: string) => void;
    activeTab: string;
}

const HeaderForm: FC<HeaderFormProps> = ({activeTab, onHeaderClick}) => {
    const isLoginActive = activeTab === 'login';
    const navigate = useNavigate()

    return (
        <div className="headerForm">
            <h3 
                onClick={() => {
                    onHeaderClick('login')
                    navigate('login')
                }} 
                className={isLoginActive ? 'title _title-active' : 'title'}>Login</h3>
            <span>|</span>
            <h3 
                onClick={() => {
                    onHeaderClick('registration')
                    navigate('registration')
                }} 
                className={isLoginActive ? 'title' : 'title _title-active'}>
                Registration
            </h3>
        </div>
    )
}

export default HeaderForm