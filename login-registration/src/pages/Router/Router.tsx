import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HeaderPage from "../../components/HeaderPage";
import CardList from "../../components/CardList";
import Authorization from "../Authorization";
import RegistrationConfirmation from "../RegistrationConfirmation";
import LoginForm from "../Authorization/LoginForm";
import RegistrationForm from "../Authorization/RegistrationForm";

const Router = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/cards-list"} element={<CardList></CardList>}></Route>
                        {/* another pages */}
                    </Route>
                </Routes> 
            ) : (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/authorization"} element={<Authorization></Authorization>}>                            
                            <Route path={"/authorization/registration"} element={<RegistrationForm></RegistrationForm>}></Route>                            
                            <Route path={"/authorization/login"} element={<LoginForm></LoginForm>}></Route>
                        </Route>
                        <Route path={"confirmation"} element={<RegistrationConfirmation></RegistrationConfirmation>}></Route>
                    </Route>
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default Router