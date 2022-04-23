import React, { FC } from "react";
import './HeaderForm.css';

type HeaderFormProps = {
    onHeaderClick: (name: string) => void;
    activeTab: string;
}

const HeaderForm: FC<HeaderFormProps> = ({onHeaderClick, activeTab}) => {

    const isLoginActive = activeTab === 'login';

    return (
        <div className="headerForm">
            <h3 onClick={() => onHeaderClick('login')} className={isLoginActive ? 'title _title-active' : 'title'}>Login</h3>
            <span>|</span>
            <h3 onClick={() => onHeaderClick('registration')} className={isLoginActive ? 'title' : 'title _title-active'}>Registration</h3>
        </div>
    )
}

export default HeaderForm