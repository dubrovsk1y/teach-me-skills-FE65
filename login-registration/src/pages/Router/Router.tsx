import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom'
import HeaderPage from "../../components/HeaderPage";
import Authorization from "../Authorization";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Information from "../Information";
import Posts from "../Posts";
import Post from "../Post";

const Router = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
    return (
        <BrowserRouter>
            {isLoggedIn ? (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/all-posts"} element={<Posts></Posts>}></Route>
                        <Route path={"/my-posts"} element={<Posts></Posts>}></Route>
                        <Route path={"/post"} element={<Post></Post>}></Route>
                        <Route path={"/information"} element={<Information></Information>}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to={"/"} replace></Navigate>}></Route>
                </Routes> 
            ) : (
                <Routes>
                    <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
                        <Route path={"/auth"} element={<Authorization></Authorization>}></Route>
                        <Route path={"/confirmation"} element={<RegistrationConfirmation></RegistrationConfirmation>}></Route>
                    </Route>
                    <Route path="*" element={<Navigate to={"/"} replace></Navigate>}></Route>
                </Routes>
            )}
        </BrowserRouter>
    )
}

export default Router