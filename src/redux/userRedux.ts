import { createSlice, PayloadAction } from "@reduxjs/toolkit";
type User={
    username:string;
    password:string;
}

type State = {
    user: User | null;
    isFetching: boolean;
    error: boolean;
};

type InitialState = {
  user: User | null;
  isFetching: boolean;
  error: boolean;
};
const initialState: InitialState = {
  user: null,
  isFetching: false,
  error: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state: State) => {
        state.isFetching=true
        state.error=false

    },
    loginSuccess: (state: State, action: PayloadAction<User>) => {
        state.isFetching=false
        state.user=action.payload

    },
    loginFailed: (state: State) => {
        state.isFetching=false
        state.error=true
    },
  },
});
export const { login,loginSuccess,loginFailed } = userSlice.actions;
export default userSlice.reducer;
