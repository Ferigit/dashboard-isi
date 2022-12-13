import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  menu: object | null;
}

const initialState: AuthState = {
  menu: null,
} as const;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMenu: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.menu>
    ) => {
      state.menu = action.payload;
    },
  },
});

export const getAuthState = (state: { auth: AuthState }) => state.auth;

export const { setMenu } = authSlice.actions;

export default authSlice.reducer;
