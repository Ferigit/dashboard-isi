import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  authorizedUserData: object | null;
}

const initialState: UserState = {
  authorizedUserData: null,
} as const;

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthorized: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.authorizedUserData>
    ) => {
      state.authorizedUserData = action.payload;
    },
  },
});

export const getUserState = (state: { user: UserState }) => state.user;

export const { setAuthorized } = userSlice.actions;

export default userSlice.reducer;
