import React from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import Authorization from "../Authorization";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Information from "../Information";
import Posts from "../Posts";
import Post from "../Post";
import { useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authReducer";

const Router = () => {
  const isLoggedIn = useSelector(AuthSelectors.getAuthStatus);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
            <Route path={"/all-posts"} element={<Posts></Posts>}></Route>
            <Route path={"/my-posts"} element={<Posts></Posts>}></Route>
            <Route path={"/post/:id"} element={<Post></Post>}></Route>
            <Route path={"/information"} element={<Information></Information>}></Route>
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace></Navigate>}></Route>
        </Routes>
      ) : (
        <Routes>
          <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
            <Route path={"/auth"} element={<Authorization></Authorization>}></Route>
            <Route
              path={"/activate/:uuid/:token"}
              element={<RegistrationConfirmation></RegistrationConfirmation>}
            ></Route>
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace></Navigate>}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
