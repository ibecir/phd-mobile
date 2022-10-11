import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import {AuthService} from '@services';
import {LoginParams, LoginResponse} from '../../services/types';

interface AuthState {
  token: string;
  isLoading: boolean;
  isSignedOut: boolean;
}

const initialState: AuthState = {
  token: '',
  isLoading: false,
  isSignedOut: true,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(
        signin.fulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isSignedOut = false;
          state.isLoading = false;
          state.token = action.payload.accessToken;
        },
      )
      .addCase(signin.pending, state => {
        state.isLoading = true;
      });
  },
});

export const {setToken, setLoading} = authSlice.actions;

export const signin = createAsyncThunk(
  'auth/signin',
  async (credentials: LoginParams, {rejectWithValue}) => {
    return AuthService.login(credentials).catch(error => {
      return rejectWithValue(
        error?.response?.data || error || 'Something went wrong',
      );
    });
  },
);

export default authSlice.reducer;
