import { createSlice, configureStore, current } from "@reduxjs/toolkit";

let approval: any = [];

if (typeof window !== "undefined") {
  try {
    approval = JSON.parse(localStorage.getItem("approvals")!);
  } catch (err) {}
}

const approvalSlice = createSlice({
  name: "approval",
  initialState: {
    approval: approval ? approval : [],
  },
  reducers: {
    setApprovals: (state, action) => {
      state.approval = action.payload;
      localStorage.setItem("approvals", JSON.stringify(action.payload));
    },
    removeApprovals: (state, action) => {
      const data = [...state.approval]?.filter(
        (ele: any) => ele.reel_id !== action.payload.id
      );
      state.approval = data;
      localStorage.setItem("approvals", JSON.stringify(data));
    },
    updateApprovals: (state, action) => {
      const data = [...state.approval]?.filter(
        (ele: any) => ele.reel_id !== action.payload.id
      );
      state.approval = data;
      localStorage.setItem("approvals", JSON.stringify(data));
    },
  },
});

export const { setApprovals, removeApprovals, updateApprovals } =
  approvalSlice.actions;
export default approvalSlice.reducer;
