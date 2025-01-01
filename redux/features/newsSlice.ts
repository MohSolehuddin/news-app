import axiosInstance from "@/api/axiosIntance";
import ArticlesInterface from "@/interfaces/articlesInterface";
import statusType from "@/interfaces/statusType";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export const fetchNewsByCategory = createAsyncThunk(
  "news/fetchNewsByCategory",
  async (category: string, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?category=${category}`
    );
    console.log(response.data.articles);
    return response.data;
  }
);

interface NewsState {
  newsByCategory: ArticlesInterface[];
  loading: statusType;
}

const initialState: NewsState = {
  newsByCategory: [],
  loading: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchNewsByCategory.fulfilled,
        (state, action: PayloadAction<{ articles: any[] }>) => {
          state.loading = "succeeded";
          state.newsByCategory = action.payload.articles;
        }
      )
      .addCase(fetchNewsByCategory.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { reducer: newsReducer } = newsSlice;
