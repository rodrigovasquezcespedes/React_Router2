import React from 'react'
import { usePokemonContext } from '../context/PokemonContext'
import Image from '../assets/pokedex.png'

const PokemonSelect = () => {
  const { pokemonList, selectedPokemon, handlePokemonChange } = usePokemonContext()

  return (
    <div className='container position-relative'>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <div className='position-relative'>
            <img src={Image} alt='Imagen' className='w-100 h-50' />
            <div className='list-container p-2 w-75 h-75 position-absolute top-50 start-50 translate-middle '>
              <div className='border text-white bg-dark w-100 p-2 mx-2 my-5 '>
                <h2 className='text-center text-danger fs-5'>Selecciona tu Pokemon</h2>
                <ul className='list-group list-group-flush' style={{ maxHeight: '150px', overflowY: 'scroll' }}>
                  <li className={`list-group-item bg-dark ${selectedPokemon === ''}`}>
                    <button className='btn btn-link text-white' onClick={() => handlePokemonChange('')}>Seleccionar</button>
                  </li>
                  {pokemonList.map((pokemon, index) => (
                    <li key={index} className={`list-group-item bg-dark ${selectedPokemon === pokemon.name && 'active'}`}>
                      <button className='btn btn-link text-white btn-link' onClick={() => handlePokemonChange(pokemon.name)}>
                        {pokemon.name}
                      </button>
                    </li>
                  ))}
                </ul>
                {selectedPokemon && <p className=' text-dark text-center bg-warning mt-3'>Elegiste: {selectedPokemon}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonSelect
