import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IFood } from "../../../types/foods";
import { getAllFoods } from "../../../api";
import data from "../../../data/foods.json";

console.log(data);
export interface IFoodState {
  foodState: IFood[];
  loading: boolean;
  error: string | null;
}

//const foods=JSON.parse(data.foods)

const initialState: IFoodState = {
  foodState: data.foods,
  loading: false,
  error: null,
};

// Thunk action to fetch initial data
// export const fetchInitialFoods = createAsyncThunk(
//   "food/fetchInitialFoods",
//   async () => {
//     try {
//       const foods = await getAllFoods();
//       return foods;
//     } catch (error) {
//       throw new Error("Failed to fetch initial foods");
//     }
//   }
// );

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    // Other reducers...
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(fetchInitialFoods.pending, (state) => {
  //         state.loading = true;
  //         state.error = null;
  //       })
  //       .addCase(fetchInitialFoods.fulfilled, (state, action) => {
  //         state.loading = false;
  //         state.error = null;
  //         state.foodState = action.payload;
  //       })
  //       .addCase(fetchInitialFoods.rejected, (state, action) => {
  //         state.loading = false;
  //         state.error = action.error.message ?? "Failed to fetch initial foods";
  //       });
  //   },
});

export const foodReducer = foodSlice.reducer;
