import React, { FC, useEffect, useState } from "react";
import "./Posts.css";
import Input from "../../components/Input";
import CardList from "../../components/CardList";
import Button from "../../components/Button";
import Tab from "../../components/Tab";
import { Theme, useThemeContext } from "../../context/themeModeContext";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostSelectors, loadAllPostsData, loadMyPostsData } from "../../redux/reducers/postReducer";
import { TabsSelectors, setAllPostsTab, setMyPostsTab } from "../../redux/reducers/tabsReducer";
import Lottie from "react-lottie";
import { defaultOptions } from "../../lotties/defaultOptions";
import classNames from "classnames";
import Pagination from "../../components/Pagination";
import { ALL_POSTS, DISLIKED_POSTS, LIKED_POSTS, SAVED_POSTS } from "../../constants/constants";

type PostsProps = {
  isPersonal: boolean;
};

const Posts: FC<PostsProps> = ({ isPersonal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { theme } = useThemeContext();
  const isLightTheme = theme === Theme.Light;
  const isAllPostsLoading = useSelector(PostSelectors.getAllPostsLoading);
  const isMyPostsLoading = useSelector(PostSelectors.getMyPostsLoading);
  const activeTab = useSelector(isPersonal ? TabsSelectors.getMyPostsTab : TabsSelectors.getAllPostsTab);
  const postsList = useSelector((state) =>
    PostSelectors.getPostsList(state, activeTab, isPersonal ? "MY_POSTS_LIST" : "ALL_POSTS_LIST")
  );

  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(2);
  const [page, setPage] = useState(1);
  const [ordering, setOrdering] = useState("date");
  const totalCount = useSelector(PostSelectors.getTotalAllPostsCounter);
  const pagesCount = Math.ceil(totalCount / limit);

  const TABS = [
    {
      tabName: "All",
      id: Math.random(),
      tab: ALL_POSTS,
    },
    {
      tabName: <span className="material-symbols-outlined"> thumb_up </span>,
      id: Math.random(),
      tab: LIKED_POSTS,
    },
    {
      tabName: <span className="material-symbols-outlined"> thumb_down </span>,
      id: Math.random(),
      tab: DISLIKED_POSTS,
    },
    {
      tabName: <span className="material-symbols-outlined"> bookmark </span>,
      id: Math.random(),
      tab: SAVED_POSTS,
    },
  ];

  useEffect(() => {
    const offset = (page - 1) * limit;
    dispatch(isPersonal ? loadMyPostsData({}) : loadAllPostsData({ search, limit, offset, ordering }));
  }, [search, limit, page, ordering, isPersonal]);

  const onTabClick = (tab: string) => {
    dispatch(isPersonal ? setMyPostsTab(tab) : setAllPostsTab(tab));
  };

  const onSearch = (event: any) => {
    setSearch(event.target.value);
    setPage(1);
  };

  const onLimitChange = (event: any) => {
    setLimit(event.target.value);
    setPage(1);
  };

  const onChangeSelect = (event: any) => {
    setOrdering(event.target.value);
    setPage(1);
  };

  const onPrevClick = () => setPage(page - 1);
  const onNextClick = () => setPage(page + 1);
  const onLastClick = () => setPage(pagesCount);
  const onFirstClick = () => setPage(1);

  return (
    <div className="posts">
      <div className="posts__container _container">
        <h1 className="posts__title">{isPersonal ? "My posts" : "All posts"}</h1>
        <Button
          onClick={() => navigate("/add-posts")}
          className={classNames("default-button", "addPostBtn", {
            ["_dark"]: !isLightTheme,
          })}
          text={"Add post"}
        ></Button>
        <Input value={search} onChange={onSearch} placeholder="Search" type="text"></Input>
        <div className="posts__tabs">
          {TABS.map((item) => {
            return (
              <Tab
                onClick={() => onTabClick(item.tab)}
                className={classNames("tab", {
                  ["_active"]: activeTab === item.tab,
                })}
                text={item.tabName}
                key={item.id}
              ></Tab>
            );
          })}
        </div>
        <Input className="posts__totalPostsOnPage" type={"number"} value={limit} onChange={onLimitChange} />
        {!isPersonal && (
          <select className="posts__sortSelect" onChange={onChangeSelect}>
            <option value={"date"}>Date</option>
            <option value={"title"}>Title</option>
            <option value={"text"}>Text</option>
            <option value={"lesson_num"}>Lesson</option>
          </select>
        )}
        {isAllPostsLoading || isMyPostsLoading ? (
          <Lottie options={defaultOptions} height={400} width={400} />
        ) : (
          <CardList data={postsList}></CardList>
        )}
        <Pagination
          pageNum={page}
          pagesCount={pagesCount}
          onPrevClick={onPrevClick}
          onNextClick={onNextClick}
          onFirstClick={onFirstClick}
          onLastClick={onLastClick}
        ></Pagination>
      </div>
    </div>
  );
};

export default Posts;
