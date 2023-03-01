import { useState } from "react";

const Task = ({
    id,
    title,
    description,
    status
}) => {

    const [taskStatus, setTaskStatus] = useState(status);

    const toggleStatus = () => {
        setTaskStatus(!taskStatus)
    }

    return(
        <div className="tasklist_task">
            <div className="task_id">{id}.</div>
            <div className="task_title">{title}</div>
            <div className="task_description">{description}</div>
            <div className="task_status">
                <span 
                    onClick={toggleStatus}
                    className={taskStatus ? 'checked' : null}
                ></span>
            </div>
        </div>
    )
}

export default Task