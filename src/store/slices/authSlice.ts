import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  menu: object | null;
  menuTabs: any;
}

const initialState: AuthState = {
  menu: null,
  menuTabs: [],
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
    setMenuTabs: (
      state: Draft<typeof initialState>,
      action: PayloadAction<typeof initialState.menuTabs>
    ) => {
      state.menuTabs = action.payload;
    },
  },
});

export const getAuthState = (state: { auth: AuthState }) => state.auth;

export const { setMenu, setMenuTabs } = authSlice.actions;

export default authSlice.reducer;
