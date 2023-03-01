import { configureStore } from "@reduxjs/toolkit";
import app from '../appSlice/appSlice';
import task from '../components/TaskList/TaskSlice/TaskSlice'


const store = configureStore({
    reducer : {app, task}
})

export default store