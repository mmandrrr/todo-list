import { useState } from "react";

import Form from './components/Form/Form';
import TaskList from './components/TaskList/TaskList';

import {Task} from './model/Task';

import './style/App.css';

function App() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskArr, setTaskArr] = useState([]);
  const [titleEmpty, setTitleEmpty] = useState(false);
  const [descriptionEmpty, setDescriptionEmpty] = useState(false);

  const submitForm = (e, title, description) => {
    e.preventDefault();

    if(!title) {
      setTitleEmpty(true);
    } else if(!description) {
      setDescriptionEmpty(true);
    } else {
      const task = new Task(title, description);
      setTaskArr([...taskArr, task])
    }
  }


  return (
    <div className="App">
      <div className="container">
        <Form 
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          submitForm={submitForm}
          titleEmpty={titleEmpty}
          setTitleEmpty={setTitleEmpty}
          descriptionEmpty={descriptionEmpty}
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
