import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
];
const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    // addPost(state, actions) {
    //   state.push(actions.payload)
    // },

    addPost : {
      reducer(state, actions){
        state.push(actions.payload)
      },
      prepare(title,body){
        return {
          payload:{
            id: nanoid(),
            title,
            body
          }
        }
      }
    }
  },
});
export const selectAllPost = (state) => state.post
export const { addPost } = postSlice.actions;
export default postSlice.reducer;
