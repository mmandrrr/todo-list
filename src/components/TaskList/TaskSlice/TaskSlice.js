import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    modalStatus : 'modal_wrapper hide'
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        setModalStatus: (state, action) => {state.modalStatus = action.payload}
    }
})

const {reducer, actions} = taskSlice;

export default reducer

export const {
    setModalStatus
} = actions;