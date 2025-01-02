import axiosInstance from "@/api/axiosIntance";
import ArticlesInterface from "@/interfaces/articlesInterface";
import statusType from "@/interfaces/statusType";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SourceInterface } from "./sourceInterface";

const country = "us";

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
// https://newsapi.org/v2/everything?q=apple&from=2024-12-31&to=2024-12-31&sortBy=popularity&apiKey=7d08ce04d25f400c8263be612cf5ca41
export const fetchAllSources = createAsyncThunk(
  "news/fetchAllSources",
  async (thunkAPI) => {
    const response = await axiosInstance.get("/top-headlines/sources");
    console.log(response.data);
    return response.data;
  }
);
export const lastNewsInCountry = createAsyncThunk(
  "news/lastNewsInCountry",
  async (thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?country=${country}`
    );
    console.log(response.data);
    return response.data;
  }
);

export const searchNews = createAsyncThunk(
  "news/searchNews",
  async (query: string, thunkAPI) => {
    const response = await axiosInstance.get(`/top-headlines?q=${query}`);
    console.log(response.data);
    return response.data;
  }
);
export const fetchMoreNewsInCountry = createAsyncThunk(
  "news/fetchMoreNewsInCountry",
  async (page: number, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?country=${country}&page=${page}`
    );
    console.log(response.data);
    return response.data;
  }
);

interface fetchMoreNewsInterface {
  pages: number;
  source: string;
}
export const fetchMoreNews = createAsyncThunk(
  "news/fetchMoreNews",
  async ({ pages, source }: fetchMoreNewsInterface, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?sources=${source}&page=${++pages}`
    );
    console.log(response.data);
    return response.data;
  }
);
export const fetchNewsFromSource = createAsyncThunk(
  "news/fetchNewsFromSource",
  async ({ pages, source }: fetchMoreNewsInterface, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?sources=${source}&page=${++pages}`
    );
    console.log(response.data);
    return response.data;
  }
);

interface NewsState {
  newsByCategory: ArticlesInterface[];
  newsInSelectedSource: ArticlesInterface[];
  sources: SourceInterface[];
  sourceName: string;
  loading: statusType;
  selectedSource: string;
  pages: number;
}

const initialState: NewsState = {
  newsByCategory: [],
  newsInSelectedSource: [],
  sources: [],
  sourceName: "",
  pages: 0,
  selectedSource: "",
  loading: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSelectedSource: (state, action: PayloadAction<string>) => {
      state.selectedSource = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNewsByCategory.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchNewsByCategory.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.loading = "succeeded";
          state.newsByCategory = action.payload.articles;
        }
      )
      .addCase(fetchNewsByCategory.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(fetchAllSources.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchAllSources.fulfilled,
        (state, action: PayloadAction<{ sources: SourceInterface[] }>) => {
          state.sources = action.payload.sources;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchAllSources.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(lastNewsInCountry.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        lastNewsInCountry.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.newsByCategory = action.payload.articles;
          state.loading = "succeeded";
        }
      )
      .addCase(lastNewsInCountry.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(searchNews.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        searchNews.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.newsByCategory = action.payload.articles;
          state.loading = "succeeded";
        }
      )
      .addCase(searchNews.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(fetchMoreNewsInCountry.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchMoreNewsInCountry.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.newsByCategory = action.payload.articles;
          state.pages += 1;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchMoreNewsInCountry.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(
        fetchMoreNews.pending,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.loading = "succeeded";
        }
      )
      .addCase(
        fetchMoreNews.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          state.newsByCategory.push(...action.payload.articles);
          state.pages += 1;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchMoreNews.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(fetchNewsFromSource.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchNewsFromSource.fulfilled, (state, action) => {
        state.newsInSelectedSource = action.payload.articles;
        state.loading = "succeeded";
      })
      .addCase(fetchNewsFromSource.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { reducer: newsReducer } = newsSlice;
export const { setSelectedSource } = newsSlice.actions;
