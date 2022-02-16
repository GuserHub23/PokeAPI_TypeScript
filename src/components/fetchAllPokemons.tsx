import { pokemonApi } from "../api/pokemonApi";
import { FetchAllPokemonResponse, Pokemon, SmallPokemon } from "../interfaces/fetchAllPokemonResponse";


export const fetchAllPokemons = async (): Promise<Pokemon[]> => {
    const res = await pokemonApi.get<FetchAllPokemonResponse>('/pokemon?limit=1500');

    const smallPokemonList = res.data.results;

    return transformSmallPokemonIntoPokemon( smallPokemonList );
}

const transformSmallPokemonIntoPokemon = ( smallPokemonList:SmallPokemon[] ): Pokemon[] => {
    
    const pokemonArr: Pokemon[] = smallPokemonList.map( poke => {

        const pokeArr = poke.url.split('/');
        const id = pokeArr[6];
        const pic = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        return {
            id,
            name: poke.name,
            pic,
        }
    });
    
    return pokemonArr;
}

