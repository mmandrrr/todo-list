import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    taskArr: [],
    titleEmpty: false,
    descriptionEmpty: false,
}

const appSlice = createSlice({
    name : 'app',
    initialState,
    reducers : {
        setTitleEmpty: (state, action) => {state.titleEmpty = action.payload},
        setDescriptionEmpty: (state, action) => {state.descriptionEmpty = action.payload},
    }
})

const {reducer, actions} = appSlice;

export default reducer;

export const {
    setTitleEmpty,
    setDescriptionEmpty,
} = actions;