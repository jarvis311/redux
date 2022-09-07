import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, selectAllPost } from "../features/postSlice";

const ReduxToolkit = () => {
  const dispatch = useDispatch();   

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const post = useSelector(selectAllPost);

  const onSumbmitHandler = (e) => {

    e.preventDefault()  
        //     dispatch(addPost({
        //     id:nanoid(),
        //     title,
        //     body
        // }))  
        // setTitle('')
        // setBody('')

        dispatch(addPost(title, body))
  }
  return (
    <div>
        <form onSubmit={onSumbmitHandler} className="">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={e => setTitle(e.target.value)}
            value={title}
            required
            />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Enter Decription
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            onChange={e => setBody(e.target.value)}
            value={body}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      {post.map((item) => (
        <div key={item.id} className="card my-2 w-50">
          <div className="card-body">
            <h5 className="card-title"> {item.title}</h5>
            <p className="card-text">{item.body}</p>
          </div>
        </div>
      ))}
   
    </div>
  );
};

export default ReduxToolkit;
