import React, { useEffect } from "react";
import "./MyPosts.css";
import CardList from "../../components/CardList";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setMyPostsTab, TabsSelectors } from "../../redux/reducers/tabsReducer";
import { loadMyPostsData, PostSelectors } from "../../redux/reducers/postReducer";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";
import classNames from "classnames";

const MyPosts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const activeTab = useSelector(TabsSelectors.getMyPostsTab);
  const postsList = useSelector((state) => PostSelectors.getPostsList(state, activeTab, "MY_POSTS_LIST"));
  const isMyPostsLoading = useSelector(PostSelectors.getMyPostsLoading);

  useEffect(() => {
    dispatch(loadMyPostsData({}));
  }, []);

  const onTabClick = (tab: string) => {
    dispatch(setMyPostsTab(tab));
  };

  return (
    <div className="myPosts">
      <div className="myPosts__container _container">
        <h1 className="myPosts__title">My posts</h1>
        <Button
          onClick={() => navigate("/add-posts")}
          className={classNames("default-button", "addPostBtn", {
            ["_dark"]: !isLightTheme,
          })}
          text={"Add post"}
        ></Button>
        {/* НУЖНЫ ЛИ ЗДЕСЬ ТАБЫ С СОРТИРОВКОЙ? */}
        <div className="myPosts__tabs">
          <Tab
            onClick={() => onTabClick("ALL_POSTS")}
            className={classNames("tab", {
              ["_active"]: activeTab === "ALL_POSTS",
            })}
            text={"All"}
          ></Tab>
          <Tab
            onClick={() => onTabClick("LIKED_POSTS")}
            className={classNames("tab", {
              ["_active"]: activeTab === "LIKED_POSTS",
            })}
            text={<span className="material-symbols-outlined"> thumb_up </span>}
          ></Tab>
          <Tab
            onClick={() => onTabClick("DISLIKED_POSTS")}
            className={classNames("tab", {
              ["_active"]: activeTab === "DISLIKED_POSTS",
            })}
            text={<span className="material-symbols-outlined"> thumb_down </span>}
          ></Tab>
          <Tab
            onClick={() => onTabClick("SAVED_POSTS")}
            className={activeTab === "SAVED_POSTS" ? "tab _active" : "tab"}
            text={<span className="material-symbols-outlined"> bookmark </span>}
          ></Tab>
        </div>
        {isMyPostsLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <CardList data={postsList}></CardList>
        )}
      </div>
    </div>
  );
};

export default MyPosts;
