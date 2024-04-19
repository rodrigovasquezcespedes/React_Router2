import React from 'react'
import { usePokemonContext } from '../context/PokemonContext'

const PokemonSelect = () => {
  const { pokemonList, selectedPokemon, handlePokemonChange } = usePokemonContext()

  return (
    <div className='container'>
      <div className='row justify-content-center'>
        <div className='col-md-6'>
          <div className='border p-4'>
            <h2 className='text-center mb-3'>Selecciona tu Pokemon</h2>
            <select className='form-select mb-3' value={selectedPokemon} onChange={(e) => handlePokemonChange(e.target.value)}>
              <option value=''>Select a Pokemon</option>
              {pokemonList.map((pokemon, index) => (
                <option key={index} value={pokemon.name}>
                  {pokemon.name}
                </option>
              ))}
            </select>
            {selectedPokemon && <p className='text-center'>You selected: {selectedPokemon}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonSelect
