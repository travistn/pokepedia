import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: (name) => `pokemon/${name}`,
    }),
    getPokemonType: builder.query({
      query: (type) => `type/${type}`,
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
    getPokeDex: builder.query({
      query: (region) => `pokedex/${region}`,
    }),
    getPokemonAbility: builder.query({
      query: (ability) => `ability/${ability}`,
    }),
    getPokemonAbilities: builder.query({
      query: () => 'ability?&limit=1000',
    }),
    getPokemonMoves: builder.query({
      query: () => 'move?&limit=1000',
    }),
    getPokemonMove: builder.query({
      query: (move) => `move/${move}`,
    }),
    getMoveTarget: builder.query({
      query: (move) => `move-target/${move}`,
    }),
    getPokemonItems: builder.query({
      query: () => 'item?&limit=-1',
    }),
    getPokemonItem: builder.query({
      query: (item) => `item/${item}`,
    }),
  }),
});

export const {
  useGetPokemonByNameQuery,
  useGetPokemonTypeQuery,
  useGetPokemonTypesQuery,
  useGetPokemonGenerationQuery,
  useGetPokemonSpeciesQuery,
  useGetPokeDexQuery,
  useGetPokemonAbilityQuery,
  useGetPokemonAbilitiesQuery,
  useGetPokemonMovesQuery,
  useGetPokemonMoveQuery,
  useGetMoveTargetQuery,
  useGetPokemonItemsQuery,
  useGetPokemonItemQuery,
} = pokemonApi;
