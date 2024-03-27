import axios from 'axios';

export interface GetPokemonResponse {
  abilities: { ability: { name: string } }[];
  height: string;
  name: string;
  weight: number;

}

export const getPokemonById = (id: string) => axios.get<GetPokemonResponse>(`pokemon/${id}`);
