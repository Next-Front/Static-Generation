import { pokeApi } from "api";
import { PokemonDetail } from "interface/IResponsePokeDetail";

export const getPokemonInfo = async ( nameOrId: string ) => {
  try {
    const { data } = await pokeApi.get<PokemonDetail>(`/pokemon/${ nameOrId }`);
    return data
  } catch (error) {
    return null;
  }
}