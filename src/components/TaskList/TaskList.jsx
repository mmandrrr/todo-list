import { useEffect, useState } from "react"
import Task from "./Task/Task"

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
            <ul className="tasklist_heading">
                <li className="tasklist_item">id</li>
                <li className="tasklist_item">title</li>
                <li className="tasklist_item">description</li>
                <li className="tasklist_item">status</li>
            </ul>
            <div className="tasklist_main">
                {taskList}
            </div>
        </div>
    )
}

export default TaskList