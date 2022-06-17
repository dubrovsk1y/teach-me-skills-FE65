import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../common/types";

type PostState = {
  selectedPost: PostType | null;
  selectedImage: string | Array<string> | null;
  allPostsList: [];
  myPostsList: [];
  isAllPostsLoading: boolean;
  isAddPostsLoading: boolean;
  isMyPostsLoading: boolean;
  selectedPostLoading: boolean;
  totalAllPostsCounter: number;
};

const initialState: PostState = {
  selectedPost: null,
  selectedImage: null,
  allPostsList: [],
  myPostsList: [],
  isAllPostsLoading: false,
  isAddPostsLoading: false,
  isMyPostsLoading: false,
  selectedPostLoading: false,
  totalAllPostsCounter: 0,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setAllPosts: (state: any, action: any) => {
      state.allPostsList = action.payload.map((post: PostType) => {
        return {
          ...post,
          likeStatus: null,
          save: false,
        };
      });
    },
    setMyPosts: (state: any, action: any) => {
      state.myPostsList = action.payload.map((post: PostType) => {
        return {
          ...post,
          likeStatus: null,
          save: false,
        };
      });
    },
    setLikePost: (state: any, action: any) => {
      const posts = [...state.allPostsList, ...state.myPostsList];
      const post = posts.find((item: any) => item.id === action.payload.id);
      if (post) {
        post.likeStatus = action.payload.value;
      }
    },
    setSavedPost: (state: any, action: any) => {
      const posts = [...state.allPostsList, ...state.myPostsList];
      const post = posts.find((item: any) => item.id === action.payload.id);
      if (post) {
        post.save = action.payload.value;
      }
    },
    setSelectedPost: (state: any, action: any) => {
      state.selectedPost = action.payload;
    },
    setSelectedImage: (state: any, action: any) => {
      state.selectedImage = action.payload;
    },
    setAllPostsLoading: (state: any, action: any) => {
      state.isAllPostsLoading = action.payload;
    },
    setMyPostsLoading: (state: any, action: any) => {
      state.isMyPostsLoading = action.payload;
    },
    setSelectedPostLoading: (state: any, action: any) => {
      state.selectedPostLoading = action.payload;
    },
    setTotalAllPostsCounter: (state: any, action: any) => {
      state.totalAllPostsCount = action.payload;
    },
    loadPostData: (state: any, action: any) => {},
    loadAllPostsData: (state: any, action: any) => {},
    loadMyPostsData: (state: any, action: any) => {},
    createPost: (state: any, action: any) => {},
  },
});

export const {
  loadMyPostsData,
  loadAllPostsData,
  loadPostData,
  setSelectedPost,
  setLikePost,
  setSavedPost,
  setSelectedImage,
  setAllPosts,
  setMyPosts,
  setAllPostsLoading,
  setMyPostsLoading,
  setSelectedPostLoading,
  createPost,
  setTotalAllPostsCounter,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getSelectedPost: (state: any) => state.post.selectedPost,
  getSelectedImage: (state: any) => state.post.selectedImage,
  getPostsList: (state: any, filter: string, type: string) => {
    const posts = type === "MY_POSTS_LIST" ? state.post.myPostsList : state.post.allPostsList;
    switch (filter) {
      case "LIKED_POSTS":
        return posts.filter((post: PostType) => post.likeStatus === "like");
      case "DISLIKED_POSTS":
        return posts.filter((post: PostType) => post.likeStatus === "dislike");
      case "SAVED_POSTS":
        return posts.filter((post: PostType) => post.save);
      case "ALL_POSTS":
        return posts;
      default:
        return posts;
    }
  },
  getAllPostsLoading: (state: any) => state.post.isAllPostsLoading,
  getMyPostsLoading: (state: any) => state.post.isMyPostsLoading,
  getSelectedPostLoading: (state: any) => state.post.selectedPostLoading,
  getTotalAllPostsCounter: (state: any) => state.post.totalAllPostsCount,
};
