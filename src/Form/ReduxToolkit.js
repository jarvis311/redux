import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostAuthor from "../features/postAuthor";
import { addAsyncPost, addPost, fetchPost, getPostError, getPostStatus, selectAllPost } from "../features/postSlice";
import { selectAllUser } from "../features/users/userSlice";

const ReduxToolkit = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");
  const [requestStatus, setRequestStatus] = useState('idel')


  const post = useSelector(selectAllPost);
  const users = useSelector(selectAllUser);
  const postStatus = useSelector(getPostStatus)
  const postError = useSelector(getPostError)
  
  const clear = useRef(false)
  useEffect(() => {
    if(clear.current === true){
      if(postStatus === 'idel'){
        dispatch(fetchPost())
      }
    }
    return () => {
      clear.current = true
    }
  }, [dispatch])
  
console.log(post);
  const usersOptions = users.map((user) => (
    <option key={user.userId} value={user.userId}>
      {user.username}
    </option>
  ));
  // const onSumbmitHandler = (e) => {
  //   e.preventDefault();
  //   //     dispatch(addPost({
  //   //     id:nanoid(),
  //   //     title,
  //   //     body
  //   // }))
  //   // setTitle('')
  //   // setBody('')

  //   // second method
  //   dispatch(addPost(title, body, userId));
  // };

  // async Thunk 
  
  const onSumbmitHandler = (e) => {
    e.preventDefault();
    if(requestStatus === 'idel'){
      dispatch(addAsyncPost({title, body, userId})).unwrap()
    }
    
  }

  return (
    <div className="container"> 
      <form onSubmit={onSumbmitHandler} className="col-md-4" style={{margin:'2rem'}}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setTitle(e.target.value)}
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
            onChange={(e) => setBody(e.target.value)}
            value={body}
            required
          />
        </div>
        <select
         className="form-select"
          id="postAuthor"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          <option value="">Select User</option>
          {usersOptions}
        </select>

        <button type="submit" className="btn btn-primary my-2 mx-2">
          Submit
        </button>
      </form>
      {post.map((item) => (
        <div key={item.id} className="card my-2 w-50">
          <div className="card-body">
            <h5 className="card-title"> {item.title}</h5>
            <p className="card-text">{item.body}</p>   
            <PostAuthor userId={post.userId}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReduxToolkit;
