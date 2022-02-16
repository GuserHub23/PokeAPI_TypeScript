import { useState, ChangeEvent } from "react";
import Loading from "../components/Loading";
import usePokemon from "../hooks/usePokemon"
import { Pokemon } from "../interfaces/fetchAllPokemonResponse";

const HomePage = () => {

  const { isLoading, pokemons} = usePokemon();

  const [ currentPage, setCurrentPage ] = useState(0);
  const [ search, setSearch ] = useState("");

  const filteredPokemons = (): Pokemon[] => {  

    if ( search.length === 0)
      return pokemons.slice(currentPage,currentPage + 12);

    const filtered = pokemons.filter( poke => poke.name.includes( search ) );
    return filtered.slice( currentPage, currentPage + 12);
  }
  const nextPage = pokemons.filter(poke => poke.name.includes( search )).length > currentPage + 12
  const previousPage = currentPage > 0

  const nextPageButton = () => {
    if (nextPage)
      setCurrentPage( currentPage + 12 );
  }
  const previousPageButton = () => {
    if ( previousPage)
      setCurrentPage( currentPage - 12 );
  }

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch( target.value.toLowerCase() );

  }


  return (
    <div className="">
      <h1 className="text-center pt-5">Pokedex</h1>
      <hr />

      <input 
        autoFocus
        type="text"
        className="mb-5 m-auto form-control"
        style={{width: 250}}
        placeholder="search pokemon"
        value={ search }
        onChange={ onSearchChange }
      
      />

      <div className="w-75 m-auto d-flex justify-content-end">
          <button
            onClick={previousPageButton}
            className={`${ previousPage ? 'btn btn-warning py-2 px-3' : 'btn'}`}
          >
            Previous
          </button>

          &nbsp;
          &nbsp;
        
          <button
            onClick={nextPageButton}
            className={`${ nextPage ? 'btn btn-warning py-2 px-3' : 'btn' }`}
          >
            Next
          </button>
      </div>

        <div className="row col mt-5 mb-5">
          <div className="row row-cols-md-6 row-cols-sm-2 gap-1 m-auto justify-content-center">
            {
              filteredPokemons().map( ({id, name, pic}) => (

                <div className="card mb-3  bg-warning" style={{width: 280, height: 350}} key={id}>
                  <div className="row no-gutters">
                    <div className="bg-dark" style={{height: 254}}>
                      <img className="card-img-top text-light" src={pic} alt={name}/>
                    </div>
                    <hr />
                    <div className="col-md-12">
                      <div className="card-body">
                        <h5 className="card-title">{id} - {name}</h5>
                      </div>
                    </div>
                  </div>      
                </div>
              ))
            }
          </div>
        </div>
        
        {
          isLoading && <Loading />
        }

        <div className="w-75 m-auto d-flex justify-content-end mb-5">
          <button
            onClick={previousPageButton}
            className={`${ previousPage ? 'btn btn-warning py-2 px-3' : 'btn'}`}
          >
            Previous
          </button>

          &nbsp;
          &nbsp;
        
          <button
            onClick={nextPageButton}
            className={`${ nextPage ? 'btn btn-warning py-2 px-3' : 'btn' }`}
          >
            Next
          </button>
        </div>

    </div>
  );
}

export default HomePage;

