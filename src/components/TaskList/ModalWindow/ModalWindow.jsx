const ModalWindow = ({
    title,
    description,
    taskStatus,
    modalStatus,
    hideModal
}) => {

    return(
        <div className={modalStatus}>
            <div className="modal">
                <h2 className="modal_title">{title}</h2>
                <div className="modal_description">
                    <h3>Description:</h3>
                    <p>{description}</p>
                </div>
                <div className="modal_status">
                    Status: <span className={taskStatus ? 'checkbox checked' : 'checkbox'}></span>
                </div>
                <div
                    onClick={hideModal}
                    className="modal_close"
                >Close</div>
            </div>
        </div>
    )
}

export default ModalWindow