import { useEffect, useState } from "react"
import { fetchAllPokemons } from "../components/fetchAllPokemons";
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(()=> {
        fetchAllPokemons()
            .then( pokemons => {
                setIsLoading(false);
                setPokemons( pokemons );
            } )
    }, []);

    return {
        isLoading,
        pokemons
    }
}

export default usePokemon
