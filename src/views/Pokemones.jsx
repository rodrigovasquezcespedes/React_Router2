import { usePokemonContext } from '../context/PokemonContext'
import Image from '../assets/pokedex.png'
import { useNavigate } from 'react-router-dom'

const PokemonSelect = () => {
  const { pokemonList, selectedPokemon, handlePokemonChange } = usePokemonContext()
  const navigate = useNavigate()

  const handleDetailPokemon = () => {
    navigate(`/Pokemones/${selectedPokemon}`)
  }

  return (
    <div className='container position-relative '>
      <div className='row justify-content-center '>
        <div className='col-md-4'>
          <div className='position-relative p-1'>
            <img src={Image} alt='Imagen' className='w-100 h-50' />
            <div className='list-container p-2  w-75 h-75 position-absolute top-50 start-50 translate-middle '>
              <div className='border text-white bg-dark w-100  p-1 mx-2 my-5  '>
                <h2 className='text-center text-danger fs-5'>
                  Selecciona el Pokemon
                </h2>
                <ul className='list-group list-group-flush' style={{ maxHeight: '201px', overflowY: 'scroll' }}>
                  <li className={`list-group-item bg-secondary ${selectedPokemon === ''}`}>
                    <button className='btn btn-link text-white' onClick={() => handlePokemonChange('')}>
                      Seleccionar
                    </button>
                  </li>
                  {pokemonList.map((pokemon, index) => (
                    <li key={index} className={`list-group-item bg-secondary ${selectedPokemon === pokemon.name && 'bg-danger'}`}>
                      <button className='btn btn-link text-white btn-link' onClick={() => handlePokemonChange(pokemon.name)}>
                        {pokemon.name}
                      </button>
                    </li>
                  ))}
                </ul>
                <button disabled={!selectedPokemon} onClick={handleDetailPokemon} type='button' className='btn bg-warning text-dark my-1  w-100'>
                  Ver Detalle
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonSelect
