import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ModalWindow from "../ModalWindow/ModalWindow";

import { setModalStatus } from "../TaskSlice/TaskSlice";

const Task = ({
    id,
    title,
    description,
    status
}) => {
    const dispatch = useDispatch();

    const {modalStatus} = useSelector(state => state.task),
          [taskStatus, setTaskStatus] = useState(status);

    const toggleStatus = (e) => {
        e.stopPropagation()
        setTaskStatus(!taskStatus)
    }

    const openModal = () => {
        dispatch(setModalStatus('modal_wrapper'));
    }

    const hideModal = () => {
        dispatch(setModalStatus('modal_wrapper hide'));
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