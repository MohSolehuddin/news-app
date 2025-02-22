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
    return response.data;
  }
);
export const fetchAllSources = createAsyncThunk(
  "news/fetchAllSources",
  async (sources: SourceInterface[], thunkAPI) => {
    if (sources.length > 0) return sources;
    const response = await axiosInstance.get("/top-headlines/sources");
    return response.data;
  }
);
export const lastNewsInCountry = createAsyncThunk(
  "news/lastNewsInCountry",
  async (thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?country=${country}`
    );
    return response.data;
  }
);

export const moreLastNewsInCountry = createAsyncThunk(
  "news/moreLastNewsInCountry",
  async (page: number, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?country=${country}&page=${++page}`
    );
    return response.data;
  }
);

export const searchNews = createAsyncThunk(
  "news/searchNews",
  async (query: string, thunkAPI) => {
    const response = await axiosInstance.get(`/top-headlines?q=${query}`);
    return response.data;
  }
);
export const fetchMoreNewsInCountry = createAsyncThunk(
  "news/fetchMoreNewsInCountry",
  async (page: number, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?country=${country}&page=${page}`
    );
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
    return response.data;
  }
);
export const fetchNewsFromSource = createAsyncThunk(
  "news/fetchNewsFromSource",
  async ({ pages, source }: fetchMoreNewsInterface, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?sources=${source}&page=${++pages}`
    );
    return response.data;
  }
);
export const loadMoreNewsInSource = createAsyncThunk(
  "news/loadMoreNewsInSource",
  async ({ pages, source }: fetchMoreNewsInterface, thunkAPI) => {
    const response = await axiosInstance.get(
      `/top-headlines?sources=${source}&page=${++pages}`
    );
    return response.data;
  }
);

interface NewsState {
  newsByCategory: ArticlesInterface[];
  newsInSelectedSource: ArticlesInterface[];
  sources: SourceInterface[];
  sourceName: string;
  loading: statusType;
  articlesActiveLink: string;
  isPagingLimit: boolean;
  selectedSource: SourceInterface;
  pages: number;
}

const initialState: NewsState = {
  newsByCategory: [],
  newsInSelectedSource: [],
  sources: [],
  sourceName: "",
  articlesActiveLink: "",
  pages: 0,
  isPagingLimit: false,
  selectedSource: {} as SourceInterface,
  loading: "idle",
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setSelectedSource: (state, action: PayloadAction<SourceInterface>) => {
      state.selectedSource = action.payload;
    },
    setArticlesActiveLink: (state, action: PayloadAction<string>) => {
      state.articlesActiveLink = action.payload;
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
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);
          state.newsByCategory = articles;
          state.loading = "succeeded";
          state.pages = 1;
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
          const { sources } = action.payload;
          state.sources = sources;
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
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);
          state.newsByCategory = action.payload.articles;
          state.pages = 1;
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
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);

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
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);

          state.newsByCategory = articles;
          state.pages += 1;
          state.loading = "succeeded";
        }
      )
      .addCase(fetchMoreNewsInCountry.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(moreLastNewsInCountry.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        moreLastNewsInCountry.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);

          state.newsByCategory.push(...articles);
          state.pages += 1;
          state.loading = "succeeded";
        }
      )
      .addCase(moreLastNewsInCountry.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(fetchMoreNews.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(
        fetchMoreNews.fulfilled,
        (state, action: PayloadAction<{ articles: ArticlesInterface[] }>) => {
          const { articles } = action.payload;
          articles.length < 20
            ? (state.isPagingLimit = true)
            : (state.isPagingLimit = false);

          state.newsByCategory.push(...articles);
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
        const { articles } = action.payload;
        articles.length < 20
          ? (state.isPagingLimit = true)
          : (state.isPagingLimit = false);

        state.newsInSelectedSource = articles;
        state.pages = 1;
        state.loading = "succeeded";
      })
      .addCase(fetchNewsFromSource.rejected, (state) => {
        state.loading = "failed";
      })
      .addCase(loadMoreNewsInSource.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(loadMoreNewsInSource.fulfilled, (state, action) => {
        const { articles } = action.payload;
        articles.length < 20
          ? (state.isPagingLimit = true)
          : (state.isPagingLimit = false);

        state.pages += 1;
        state.newsInSelectedSource.push(...articles);
        state.loading = "succeeded";
      })
      .addCase(loadMoreNewsInSource.rejected, (state) => {
        state.loading = "failed";
      });
  },
});

export const { reducer: newsReducer } = newsSlice;
export const { setSelectedSource, setArticlesActiveLink } = newsSlice.actions;
