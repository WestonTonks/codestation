import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import typeSlice from "./typeSlice";
import interviewSlice from "./interviewSlice";

export default configureStore({
  reducer: {
    user: userSlice,
    type: typeSlice,
    interview: interviewSlice,
  },
});
