import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { loadData, PostSelectors, setPosts } from "../../redux/reducers/postReducer";
import { setAllPostsTab, TabsSelectors } from "../../redux/reducers/tabsReducer";
import CardList from "../../components/CardList";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import classNames from "classnames";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import Lottie from "react-lottie";
import animationData from "../../lotties/98195-loader.json";

// const MOCK_DATA = [
//   {
//     id: Math.random(),
//     image: "https://pw.artfile.me/wallpaper/24-12-2012/650x366/3d-grafika-abstract-abstrakcii-ostrye-li-692215.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "10.04.2022",
//     lesson_num: 0,
//     title: "Home",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     image: "https://pw.artfile.me/wallpaper/11-07-2015/650x407/3d-grafika-abstrakciya--abstract-vitki-s-949768.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "01.07.2022",
//     lesson_num: 0,
//     title: "My family",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "12.11.2022",
//     lesson_num: 0,
//     title: "Car",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     image: "https://img2.goodfon.ru/wallpaper/nbig/d/b8/abstrakciya-render-fon-chernyy.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "03.04.2022",
//     lesson_num: 0,
//     title: "Friends",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "05.02.2022",
//     lesson_num: 0,
//     title: "Work",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     image: "https://instapik.ru/wp-content/uploads/2020/08/dark-background.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "11.08.2022",
//     lesson_num: 0,
//     title: "Studies",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     image: "https://klike.net/uploads/posts/2019-06/1561182942_2.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "29.01.2022",
//     lesson_num: 0,
//     title: "Learning English",
//     author: 0,
//   },
//   {
//     id: Math.random(),
//     image: "https://cdn.pixabay.com/photo/2019/09/18/21/12/dark-4487690_960_720.jpg",
//     text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia odit nobis alias natus?",
//     date: "17.12.2022",
//     lesson_num: 0,
//     title: "Holidays",
//     author: 0,
//   },
// ];

const Posts = () => {
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const dispatch = useDispatch();
  const isPostsLoading = useSelector(PostSelectors.getPostsLoading);

  useEffect(() => {
    dispatch(loadData({}));
  }, []);

  const activeTab = useSelector(TabsSelectors.getAllPostsTab);
  const postsList = useSelector((state) => PostSelectors.getPostsList(state, activeTab));

  const onTabClick = (tab: string) => {
    dispatch(setAllPostsTab(tab));
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
