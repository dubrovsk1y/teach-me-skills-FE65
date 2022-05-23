import { createSlice } from "@reduxjs/toolkit";
import { Card } from "../../common/types";

type PostState = { 
    selectedPost: Card | null;
    selectedImage: string | Array<string> | null;
    cardsList: [];
}

const initialState: PostState = {
    selectedPost: null,
    selectedImage: null,
    cardsList: [],
}

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setSelectedPost: (state: any, action) => {
            state.selectedPost = action.payload;
        },
        setSelectedImage: (state: any, action) => {
            state.selectedImage = action.payload
        },
        loadData: (state: any, action) => {
            state.cardsList = action.payload.map((card: any) => {
                return {
                    ...card,
                    likeStatus: null,
                    save: false,
                }
            })
        },
        setLikePost: (state: any, action) => {
            const card = state.cardsList.find((item: any) => item.id === action.payload.id)
            if (card) {
                card.likeStatus = action.payload.value                
            }
        },
        setSavedPost: (state: any, action) => {
            const card = state.cardsList.find((item: any) => item.id === action.payload.id)
            if (card) {
                card.save = action.payload.value               
            }
        },
    },
})

export const { setSelectedPost, loadData, setLikePost, setSavedPost, setSelectedImage } = postSlice.actions

export default postSlice.reducer

export const PostSelectors = {
    getSelectedPost: (state: any) => state.post.selectedPost,
    getSelectedImage: (state: any) => state.post.selectedImage,
    getCards: (state: any, filter: any) => {
        const cards = state.post.cardsList
        switch (filter) {
            case 'LIKED_POSTS': 
                return cards.filter((item: any) => item.likeStatus === 'like')                                
            case 'DISLIKED_POSTS':
                return cards.filter((item: any) => item.likeStatus === 'dislike')
            case 'SAVED_POSTS':
                return cards.filter((item: any) => item.save)
            case 'ALL_POSTS':
            default:                
            return cards
        }
    }
}