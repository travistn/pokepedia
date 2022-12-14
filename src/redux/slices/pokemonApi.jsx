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
    getPokemonGeneration: builder.query({
      async queryFn(pokeId, _queryApi, _extraOptions, fetchWithBQ) {
        const speciesResult = await fetchWithBQ(
          `https://pokeapi.co/api/v2/pokemon-species/${pokeId}`
        );
        const generationResult = await fetchWithBQ(
          `generation/${speciesResult.data.generation.name}`
        );
        return generationResult;
      },
    }),
    getPokemonSpecies: builder.query({
      query: (pokeId) => `pokemon-species/${pokeId}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonTypesQuery,
  useGetPokemonGenerationQuery,
  useGetPokemonSpeciesQuery,
} = pokemonApi;
