import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import HeaderPage from "../../components/HeaderPage";
import Authorization from "../Authorization";
import RegistrationConfirmation from "../RegistrationConfirmation";
import Information from "../Information";
import Posts from "../Posts";
import AddPosts from "../AddPosts";
import Post from "../Post";
import { useDispatch, useSelector } from "react-redux";
import { AuthSelectors } from "../../redux/reducers/authReducer";
import { loadUserInfoData } from "../../redux/reducers/userReducer";

const Router = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(AuthSelectors.getAuthStatus);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(loadUserInfoData({}));
    }
  }, [isLoggedIn]);

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderPage isLoggedIn={isLoggedIn}></HeaderPage>}>
            <Route path={"/all-posts"} element={<Posts isPersonal={false}></Posts>}></Route>
            <Route path={"/my-posts"} element={<Posts isPersonal={true}></Posts>}></Route>
            <Route path={"/add-posts"} element={<AddPosts></AddPosts>}></Route>
            <Route path={"/post/:id"} element={<Post></Post>}></Route>
            <Route path={"/information"} element={<Information></Information>}></Route>
          </Route>
          <Route path="*" element={<Navigate to={"/all-posts"} replace></Navigate>}></Route>
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
          <Route path="*" element={<Navigate to={"/auth"} replace></Navigate>}></Route>
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;
