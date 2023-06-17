import { configureStore } from '@reduxjs/toolkit';
import addRecipeReducer from '../features/addPostSlice';

const store = configureStore({
  reducer: {
    allRecipes: addRecipeReducer,
  },
});
export default store;
