import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = { 
    selectedPost: Card | null;
}

const initialState: PostState = {
    selectedPost: null,
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload;
        },
    },
})

export const { setSelectedPost } = postSlice.actions

export default postSlice.reducer

export const PostSelectors = {
    getSelectedPost: (state: any) => state.post.selectedPost,
}