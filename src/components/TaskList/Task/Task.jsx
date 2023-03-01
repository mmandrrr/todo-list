import { useState } from "react";

import ModalWindow from "../ModalWindow/ModalWindow";

const Task = ({
    id,
    title,
    description,
    status
}) => {

    const [taskStatus, setTaskStatus] = useState(status);
    const [modalStatus, setModalStatus] = useState('modal_wrapper hide')

    const toggleStatus = (e) => {
        e.stopPropagation()
        setTaskStatus(!taskStatus)
    }

    const openModal = () => {
        setModalStatus('modal_wrapper')
    }

    const hideModal = () => {
        setModalStatus('modal_wrapper hide')
    }

    return(
        <>
            <div
                onClick={openModal}
                className="tasklist_task"
            >
                <div className="task_id">{id}.</div>
                <div className="task_title">{title}</div>
                <div className="task_description">{description}</div>
                <div className="task_status">
                    <span 
                        onClick={e => toggleStatus(e)}
                        className={taskStatus ? 'checkbox checked' : 'checkbox'}
                    ></span>
                </div>
            </div>
            <ModalWindow 
                    title={title}
                    description={description}
                    taskStatus={taskStatus}
                    modalStatus={modalStatus}
                    hideModal={hideModal}
            />
        </>
    )
}

export default Task