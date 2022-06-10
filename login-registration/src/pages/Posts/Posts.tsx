import React, { useEffect } from "react";
import "./Posts.css";
import CardList from "../../components/CardList";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, loadAllPostsData } from "../../redux/reducers/postReducer";
import { TabsSelectors, setAllPostsTab } from "../../redux/reducers/tabsReducer";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const isAllPostsLoading = useSelector(PostSelectors.getAllPostsLoading);
  const activeTab = useSelector(TabsSelectors.getAllPostsTab);
  const postsList = useSelector((state) => PostSelectors.getPostsList(state, activeTab, "ALL_POSTS_LIST"));

  useEffect(() => {
    dispatch(loadAllPostsData({}));
  }, []);

  const onTabClick = (tab: string) => {
    dispatch(setAllPostsTab(tab));
  };

  return (
    <div className="posts">
      <div className="posts__container _container">
        <h1 className="posts__title">All posts</h1>
        <Button
          onClick={() => navigate("/add-posts")}
          className={classNames("default-button", "addPostBtn", {
            ["_dark"]: !isLightTheme,
          })}
          text={"Add post"}
        ></Button>
        <div className="posts__tabs">
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
        {isAllPostsLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <CardList data={postsList}></CardList>
        )}
      </div>
    </div>
  );
};

export default Posts;
