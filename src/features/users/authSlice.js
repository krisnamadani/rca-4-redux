import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  isLoginPending: false,
  isLoginSuccess: false,
  errorMessages: "",
  user: {},
};

function callLoginApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === "admin@gmail.com" && password === "admin") {
        resolve({ email });
      } else {
        reject("Email or password is invalid");
      }
    }, 1000);
  });
}

export const authLoginAPI = createAsyncThunk(
  "auth/login",
  async ({ email, password }) => {
    try {
      const response = await callLoginApi(email, password);
      return response.email;
    } catch (error) {
      throw error;
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      state.isLoginSuccess = false;
      state.user = {};
    },
  },
  extraReducers(builder) {
    builder
      .addCase(authLoginAPI.pending, (state) => {
        state.isLoginPending = true;
      })
      .addCase(authLoginAPI.fulfilled, (state, action) => {
        state.isLoginPending = false;
        state.isLoginSuccess = true;
        state.user = action.payload;
      })
      .addCase(authLoginAPI.rejected, (state, action) => {
        state.isLoginPending = false;
        state.isLoginSuccess = false;
        state.errorMessages = action.error.message;
      });
  },
});

export default authSlice.reducer;
export const { logOut } = authSlice.actions;
