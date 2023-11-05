import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITMES } from "@/constants";
const initialState = {
  activeMenuItem: MENU_ITMES?.PENCIL,
  actionMenuItem: null,
};
export const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    onMenuItem: (state, action) => {
        console.log(action)
      state.activeMenuItem = action.payload;
      console.log(state.activeMenuItem);
    },
    onActionItem: (state, action) => {
      state.actionMenuItem = action.payload;
    },
  },
});

export const { onMenuItem,onActionItem } = menuSlice.actions;
export default menuSlice.reducer;
