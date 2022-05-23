import { createSlice } from "@reduxjs/toolkit";

type TabsState = {
    authorizationTab: string,
    informationTab: string,
    allPostsTab: string,
}

const initialState: TabsState = {
    authorizationTab: 'LOGIN',
    informationTab: 'TAB_1',
    allPostsTab: 'ALL_POSTS',
}

const tabsSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        setAuthorizarionTab: (state, action) => {
            state.authorizationTab = action.payload
        },
        setInformationTab: (state, action) => {
            state.informationTab = action.payload
        },
        setAllPostsTab: (state, action) => {
            state.allPostsTab = action.payload
        },
    }
})

export const { setAuthorizarionTab, setInformationTab, setAllPostsTab } = tabsSlice.actions

export default tabsSlice.reducer

export const TabsSelectors = {
    getAuthorizarionTab: (state: any) => state.tabs.authorizationTab,
    getInformationTab: (state: any) => state.tabs.informationTab,
    getAllPostsTab: (state: any) => state.tabs.allPostsTab,
}