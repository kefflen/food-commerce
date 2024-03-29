
import { useState } from 'react'
import BugerAndSoda from '../../assets/burger-and-soda.svg?react'
import Burger from '../../assets/burger.svg?react'
import MenuIcon from '../../assets/menu.svg?react'
import Pizza from '../../assets/pizza.svg?react'
import Soda from '../../assets/soda.svg?react'
import { Container, Menu, MenuItem, Nav } from "./styles"

//TODO: Refatorar para que tenha um componente MenuItem que recebe a imagem e o texto como props
export function
 Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen(!menuOpen)
  }

  return (
    <Container isExpanded={menuOpen}>
      <button type="button"
        onClick={handleToggleMenu}
      >
        <MenuIcon />
      </button>
      <Nav>
        <Menu>
          <MenuItem>
            <a href="#">
              <Burger/>
              <span>Hambugueres</span>
            </a>
          </MenuItem>
          <MenuItem className='active'>
            <a href="#">
              <BugerAndSoda />
              <span>Combos</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <Pizza />
              <span>Pizzas</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <Soda />
              <span>Refrigerantes</span>
            </a>
          </MenuItem>
        </Menu>
      </Nav>
    </Container>
  )
}