import Pokedex from '../assets/pokedex1.png'
import ProgressBar from 'react-bootstrap/ProgressBar'

const CardPokemon = ({ pokemon }) => {
  const { name, height, weight, types, abilities, sprites, stats } = pokemon

  return (
    <div className='d-flex justify-content-center align-items-center'>
      <div className='col-md-6'>
        <div className='position-relative p-2'>
          <img
            src={Pokedex}
            alt='Imagen'
            className='d-flex justify-content-center align-items-center'
            style={{ maxWidth: '780px' }}
          />
          <div className='list-container position-absolute top-50 start-50 translate-middle'>
            <img
              src={sprites.other.dream_world.front_default}
              alt={name}
              className='img-fluid'
              style={{ maxWidth: '65%', marginTop: '90px', marginLeft: '-25%' }}
            />
          </div>
          <div
            className='border text-white bg-dark'
            style={{ width: '300px', marginLeft: '440px', marginTop: '-415px' }}
          >
            <h3>{name}</h3>
            <span className='card-text'>Altura: {height} decímetros</span>
            <p className='card-text'>Peso: {weight} hectogramos</p>
            <span className='card-text'>Tipo: {types.map(type => type.type.name).join(', ')}</span>
            <p className='card-text'>
              Habilidades: {abilities.map(ability => ability.ability.name).join(', ')}
            </p>
            {stats.map((stat, index) => (
              <div key={index}>
                <p className='card-text p-2'><ProgressBar variant='danger' now={stat.base_stat} label={`${stat.stat.name}: ${stat.base_stat}%`} /></p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardPokemon
