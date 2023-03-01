import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: '',
    description: '',
    taskArr: [],
    titleEmpty: false,
    descriptionEmpty: false,
}

const appSlice = createSlice({
    name : 'app',
    initialState,
    reducers : {
        setTitle: (state,action) => {state.title = action.payload},
        setDescription: (state,action) => {state.description = action.payload},
        setTitleEmpty: (state, action) => {state.titleEmpty = action.payload},
        setDescriptionEmpty: (state, action) => {state.descriptionEmpty = action.payload},
    }
})

const {reducer, actions} = appSlice;

export default reducer;

export const {
    setTitle,
    setDescription,
    setTitleEmpty,
    setDescriptionEmpty,
} = actions;