import { useState, useEffect } from "react";
import { commentCreate, commentsLoad } from "./redux/action";
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';
import SingleComment from "./SingleComment";


function Comments (props) {
    const [textComment, setTextComment] = useState('')
    const comments = useSelector(state => {
        const { commentsReducer } = state
        return commentsReducer.comments
    })
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setTextComment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id));
        setTextComment('')
    }

    useEffect(() => {
        dispatch(commentsLoad())
    }, [])

    return (
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input type="text" value={textComment} onChange={handleInput} />
                <input type="submit" hidden />
            </form>
            {!!comments.length && comments.map(result => {
                return <SingleComment key={result.id} data={result}/>
            })}
        </div>
    )
}

export default Comments;