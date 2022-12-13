import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonTypes: builder.query({
      query: () => 'type/?limit=18',
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonTypesQuery } = pokemonApi;
