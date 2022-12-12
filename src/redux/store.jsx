import { configureStore } from '@reduxjs/toolkit';

import { pokemonApi } from './slices/pokemon';

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});
