import { useEffect, useState } from "react";

import Task from "./Task/Task";
import Heading from './Heading/Heading';

const TaskList = ({
    taskArr
}) => {

    const [taskList, setTaskList] = useState([])

    useEffect(()=> {
        if(taskArr.length > 0) {
            setTaskList(
                taskArr.map(({id,title,description,status},i) => {
                    return(
                        <Task 
                            key={id}
                            title={title}
                            description={description}
                            status={status}
                            id={i + 1}
                        />
                    )
                })
            )
        }
    },[taskArr])

    return(
        <div className="tasklist">
            <Heading />
            <div className="tasklist_main">
                {taskList}
            </div>
        </div>
    )
}

export default TaskList