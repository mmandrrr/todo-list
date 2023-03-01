import { useDispatch } from "react-redux";

import { setTitle, setDescription } from "../../appSlice/appSlice";

const Form = ({
    title,
    description,
    submitForm,
    titleEmpty,
    descriptionEmpty,
    setTitleEmpty,
    setDescriptionEmpty
}) => {
    const dispatch = useDispatch()

    const validateInput = (e,setEmpty, setInput) => {
        dispatch(setEmpty(false));
        dispatch(setInput(e.target.value));
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