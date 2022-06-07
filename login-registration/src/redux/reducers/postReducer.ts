import { createSlice } from "@reduxjs/toolkit";
import { PostType } from "../../common/types";

type PostState = {
  selectedPost: PostType | null;
  selectedImage: string | Array<string> | null;
  postsList: [];
  postsLoading: boolean;
  selectedPostLoading: boolean;
};

const initialState: PostState = {
  selectedPost: null,
  selectedImage: null,
  postsList: [],
  postsLoading: false,
  selectedPostLoading: false,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPosts: (state: any, action: any) => {
      state.postsList = action.payload.map((post: PostType) => {
        return {
          ...post,
          likeStatus: null,
          save: false,
        };
      });
    },
    setLikePost: (state: any, action: any) => {
      const post = state.postsList.find((item: any) => item.id === action.payload.id);
      if (post) {
        post.likeStatus = action.payload.value;
      }
    },
    setSavedPost: (state: any, action: any) => {
      const post = state.postsList.find((item: any) => item.id === action.payload.id);
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
    setPostsLoading: (state: any, action: any) => {
      state.postsLoading = action.payload;
    },
    setSelectedPostLoading: (state: any, action: any) => {
      state.selectedPostLoading = action.payload;
    },
    loadPost: (state: any, action: any) => {},
    loadData: (state: any, action: any) => {},
  },
});

export const {
  loadData,
  loadPost,
  setSelectedPost,
  setLikePost,
  setSavedPost,
  setSelectedImage,
  setPosts,
  setPostsLoading,
  setSelectedPostLoading,
} = postSlice.actions;

export default postSlice.reducer;

export const PostSelectors = {
  getSelectedPost: (state: any) => state.post.selectedPost,
  getSelectedImage: (state: any) => state.post.selectedImage,
  getPostsList: (state: any, filter: any) => {
    const posts = state.post.postsList;
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
  getPostsLoading: (state: any) => state.post.postsLoading,
  getSelectedPostLoading: (state: any) => state.post.selectedPostLoading,
};
