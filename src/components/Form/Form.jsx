

const Form = ({
    title,
    description,
    setTitle,
    setDescription,
    submitForm,
    titleEmpty,
    setTitleEmpty,
    descriptionEmpty,
    setDescriptionEmpty
}) => {

    const validateInput = (e,setEmpty, setInput) => {
        setEmpty(false);
        setInput(e.target.value)
    }

    return(
        <form onSubmit={(e) => submitForm(e, title, description)} className="form">
            <div className="form_title">
                <label htmlFor="title_input">Title:</label>
                <div 
                    className={titleEmpty ? "error" : 'hide'}
                >The Field is Empty</div>
                <input 
                    onChange={(e) => validateInput(e,setTitleEmpty,setTitle)}
                    value={title}
                    name="title_input" 
                    type="text" 
                    className={titleEmpty ? 'form_input form_input-red' : 'form_input'} 
                    placeholder="Enter Title"/>
            </div>
            <div className="form_description">
                <label htmlFor="description_input">Description:</label>
                <div 
                    className={descriptionEmpty ? "error" : 'hide'}
                >The Field is Empty</div>
                <input 
                    onChange={(e) => validateInput(e,setDescriptionEmpty,setDescription)}
                    value={description}
                    name="description_input" 
                    type="text" 
                    className={descriptionEmpty ? 'form_input form_input-red' : 'form_input'} 
                    // style={descriptionEmpty ? {border: '1px solid red'} : {border: '1px solid black'}}
                    placeholder="Enter Description"/>
            </div>
            <input
                type="submit" 
                className="form_btn" 
                value='Create Task'
            />
        </form>
    )
}

export default Form