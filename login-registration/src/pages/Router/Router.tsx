import React from "react";
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HeaderPage from "../../components/HeaderPage";
import CardList from "../../components/CardList";
import Authorization from "../Authorization";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Information from "../Information";

const Router = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/cards-list"} element={<CardList></CardList>}></Route>
                        <Route path={"/information"} element={<Information></Information>}></Route>
                    </Route>
                </Routes> 
            ) : (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/auth"} element={<Authorization></Authorization>}></Route>
                        <Route path={"/confirmation"} element={<RegistrationConfirmation></RegistrationConfirmation>}></Route>
                    </Route>
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default Router