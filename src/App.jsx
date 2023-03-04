import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

import {Task} from './model/Task';
import { setTitleEmpty,setDescriptionEmpty } from "./appSlice/appSlice";

import './style/App.css';

function App() {

  const dispatch = useDispatch();

  const {titleEmpty} = useSelector(state => state.app),
        {descriptionEmpty} = useSelector(state => state.app);

  const [taskArr, setTaskArr] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const title = data.get('title_input');
    const description = data.get('description_input');

    if(!title) {
      dispatch(setTitleEmpty(true));
    } else if(!description) {
      dispatch(setDescriptionEmpty(true));
    } else {
      const task = new Task(title, description);
      setTaskArr([...taskArr, task])
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Form 
          submitForm={submitForm}
          titleEmpty={titleEmpty}
          descriptionEmpty={descriptionEmpty}
          setTitleEmpty={setTitleEmpty}
          setDescriptionEmpty={setDescriptionEmpty}
        />
        <TaskList 
          taskArr={taskArr}
        />
      </div>
    </div>
  )
}

export default App
