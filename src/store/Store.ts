import { createSlice, configureStore } from '@reduxjs/toolkit';

interface Product {
  id: number;
  name: string;
  image: string;
  liked: boolean;
  description: string;
}

const productSlice = createSlice({
  name: 'products',
  initialState: [] as Product[],
  reducers: {
    addProduct: (state, action) => {
      state.push(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter(product => product.id !== action.payload);
    },
    toggleLike: (state, action) => {
      const product = state.find(p => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
  },
});

export const { addProduct, deleteProduct, toggleLike } = productSlice.actions;
export const store = configureStore({ reducer: productSlice.reducer });
