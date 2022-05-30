import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = {
  selectedPost: Card | null;
  selectedImage: string | Array<string> | null;
  postsList: [];
  postsLoading: boolean;
};

const initialState: PostState = {
  selectedPost: null,
  selectedImage: null,
  postsList: [],
  postsLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: any, action) => {
      state.postsList = action.payload.map((post: any) => {
        return {
          ...post,
          likeStatus: null,
          save: false,
        };
      });
    },
    loadData: (state: any, action) => {},
    setSelectedPost: (state: any, action) => {
      state.selectedPost = action.payload;
    },
    loadPost: (state: any, action) => {},
    setLikePost: (state: any, action) => {
      const card = state.cardsList.find((item: any) => item.id === action.payload.id);
      if (card) {
        card.likeStatus = action.payload.value;
      }
    },
    setSavedPost: (state: any, action) => {
      const card = state.cardsList.find((item: any) => item.id === action.payload.id);
      if (card) {
        card.save = action.payload.value;
      }
    },
    setSelectedImage: (state: any, action) => {
      state.selectedImage = action.payload;
    },
    setPostsLoading: (state, action) => {
      state.postsLoading = action.payload;
    },
  },
});

export const {
  setSelectedPost,
  loadData,
  loadPost,
  setLikePost,
  setSavedPost,
  setSelectedImage,
  setPosts,
  setPostsLoading,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getSelectedPost: (state: any) => state.post.selectedPost,
  getSelectedImage: (state: any) => state.post.selectedImage,
  getPostsList: (state: any, filter: any) => {
    const posts = state.post.postsList;
    switch (filter) {
      case "LIKED_POSTS":
        return posts.filter((post: any) => post.likeStatus === "like");
      case "DISLIKED_POSTS":
        return posts.filter((post: any) => post.likeStatus === "dislike");
      case "SAVED_POSTS":
        return posts.filter((post: any) => post.save);
      case "ALL_POSTS":
        return posts;
      default:
        return posts;
    }
  },
  getPostsLoading: (state: any) => state.post.postsLoading,
};
