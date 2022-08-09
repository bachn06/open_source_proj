import { configureStore } from "@reduxjs/toolkit";
import userReducer from "app/userSlice";
import categoriesReducer from "app/categoriesSlice";
import productsReducer from "app/productsSlice";
import purchaseReducer from "app/purchaseSlide";
import uiReducer from "app/uiSlice";
import postsReducer from "app/postsSlice";

export const store = configureStore({
	reducer: {
		users: userReducer,
		categories: categoriesReducer,
		products: productsReducer,
		purchase: purchaseReducer,
		posts: postsReducer,
		ui: uiReducer,
	},
});
