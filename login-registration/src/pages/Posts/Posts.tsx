import React, { useEffect } from "react";
import "./Posts.css";
import CardList from "../../components/CardList";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, loadData } from "../../redux/reducers/postReducer";
import { TabsSelectors, setAllPostsTab } from "../../redux/reducers/tabsReducer";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";
import classNames from "classnames";

const Posts = () => {
  const dispatch = useDispatch();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const isPostsLoading = useSelector(PostSelectors.getPostsLoading);
  const activeTab = useSelector(TabsSelectors.getAllPostsTab);
  const postsList = useSelector((state) => PostSelectors.getPostsList(state, activeTab));

  useEffect(() => {
    dispatch(loadData({}));
  }, []);

  const onTabClick = (tab: string) => {
    dispatch(setAllPostsTab(tab));
  };

  return (
    <div className="posts">
      <div className="posts__container _container">
        <h1 className="posts__title">All posts</h1>
        <Button
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
        {isPostsLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <CardList data={postsList}></CardList>
        )}
      </div>
    </div>
  );
};

export default Posts;
