import { createSlice } from "@reduxjs/toolkit";
import { MENU_ITMES, COLORS } from "@/constants";

const initialState = {
  [MENU_ITMES?.PENCIL]: {
    color: COLORS?.BLACK,
    size: 3,
  },
  [MENU_ITMES?.ERASER]: {
    color: COLORS?.WHITE,
    size: 3,
  },
  [MENU_ITMES?.UNDO]: {},
  [MENU_ITMES?.REDO]: {},
  [MENU_ITMES?.DOWNLOAD]: {},
};
export const toolboxSlice = createSlice({
  name: "toolbox",
  initialState,
  reducers: {
    switchColor: (state, action) => {
      state[action?.payload?.item].color = action?.payload?.color;
    },
    reSizeBrush: (state, action) => {
      state[action?.payload?.item].size = action?.payload?.size;
    },
  },
});

export const { switchColor, reSizeBrush } = toolboxSlice.actions;
export default toolboxSlice.reducer;
