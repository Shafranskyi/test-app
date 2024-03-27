import axios from 'axios';

export interface GetPokemonItemResponse {
  name: string;
  url: string;
}

export interface GetPokemonResponse {
  results: GetPokemonItemResponse[];
}

export const getPokemons = () => axios.get<GetPokemonResponse>('pokemon');
