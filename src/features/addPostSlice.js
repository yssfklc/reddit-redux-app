import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://www.reddit.com/r/popular.json';

export const loadData = createAsyncThunk('allRecipes/loadData', async () => {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
  // const data = await fetch(url);
  // const response = await data.json();
  // console.log(response);
  // return response;
});

const addPostSlice = createSlice({
  name: 'allRecipes',
  initialState: {
    recipes: [],
    isLoading: false,
    hasError: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadData.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(loadData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasError = false;
        action.payload.data.children.map((item) => state.recipes.push(item));
      })
      .addCase(loadData.rejected, (state, action) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export const selectAllRecipes = (state) => state.allRecipes.recipes;
export const {} = addPostSlice.actions;
export default addPostSlice.reducer;
