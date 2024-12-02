import { useEffect, useLayoutEffect } from "react";
import { data } from "./user.js";
import { createSlice } from "@reduxjs/toolkit";
let id = 0;
const userSlice = createSlice({
  name: "users",
  initialState: data,
  reducers: {
    adduser: (state, action) => {
      let newuser = { ...action.payload, cart: [], id: id++ };
      state.users.push(newuser);
    },
    addtocart: (state, action) => {
      let userEmail = action.payload.userEmail;
      let item = action.payload.item;
      for (let user of state.users) {
        if (user.email == userEmail) {
          user.cart.push(item);
          break;
        }
      }
    },
    remove: (state, action) => {
      let itemId = action.payload.itemId;
      let userEmail = action.payload.userEmail;
      for (let index in state.users) {
        if (state.users[index].email == userEmail) {
          state.users[index].cart = state.users[index].cart.filter((item) => {
            return item.id != itemId;
          });
        }
      }
    },
  },
});

export const { addtocart, adduser, remove } = userSlice.actions;
export default userSlice.reducer;
