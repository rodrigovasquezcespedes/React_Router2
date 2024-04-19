import { Container, Row, Col } from 'react-bootstrap'
import Image from '../assets/title.png'
import gif from '../assets/image.gif'
import CardPokemon from  '../components/CardPokemon'

const Home = () => {
  return (
    <>
      <Container>
        <Row className='justify-content-center align-items-center'>
          <Col className='text-center'>
            <img src={Image} alt='Imagen' />
            <img className='mx-auto' src={gif} alt='Imagen' />
          </Col>
        </Row>
      </Container>
      <CardPokemon />
    </>
  )
}

export default Home
