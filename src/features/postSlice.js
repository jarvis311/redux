import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from 'axios'

// const initialState = [
//   {
//     id: 1,
//     title:
//       "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
//   },
//   {
//     id: 2,
//     title: "qui est esse",
//     body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
//   },
// ];
  
const POST_URL = 'https://jsonplaceholder.typicode.com/posts'
const initialState = {
  post: [],
  status: 'idel',
  error: null
}
export const fetchPost = createAsyncThunk('post/fetchPost', async() => {
  const response = await axios.get(POST_URL)
    return response.data
})
const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    // METHOS ONE 
    // addPost(state, actions) {
    //   state.push(actions.payload)
    // },

    // METHOS TWO
    // addPost : {
    //   reducer(state, actions){
    //     state.post.push(actions.payload)
    //   },
    //   prepare(title,body,userId){
    //     return {
    //       payload:{
    //         id: nanoid(),
    //         title,
    //         body,
    //         userId
    //       }
    //     }
    //   }
    // },
  },
  extraReducers(builder){
    builder.addCase(fetchPost.pending, (state, actions) => {
      state.status = 'Loading..'
    })
    .addCase(fetchPost.fulfilled, (state,actions) => {
      state.status = 'Succcesfull'
      const loadPost = actions.payload.map(post => {
        return post
      })
      state.post = state.post.concat(loadPost)
    })
    .addCase(fetchPost.rejected, (state, actions) => {
      state.status = 'Error'
      state.error = actions.error.message
    })
  }

});
export const selectAllPost = (state) => state.post.post
export const getPostStatus = (state) => state.post.status
export const getPostError = (state) => state.post.error
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
