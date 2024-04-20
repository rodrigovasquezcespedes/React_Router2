import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Image from '../assets/logo.png'

const NavBar = () => {
  const setActiveClass = ({ isActive }) =>
    isActive ? 'nav-link active text-white fs-5' : 'nav-link fs-6'
  return (
    <Navbar className='bg-danger p-1'>
      <Container>
        <Navbar.Brand to='/'>
          <img className='w-50' src={Image} alt='pokemon' />
        </Navbar.Brand>
        <Nav className='justify-content-end'>
          <NavLink className={setActiveClass} to='/'>
            {' '}
            Home{' '}
          </NavLink>

          <NavLink className={setActiveClass} to='/Pokemones'>
            {' '}
            Pokemones{' '}
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  )
}
export default NavBar
