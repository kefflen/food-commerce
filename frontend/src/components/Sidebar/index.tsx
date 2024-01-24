import bugerAndSoda from '../../assets/burger-and-soda.svg'
import burger from '../../assets/burger.svg'
import menu from '../../assets/menu.svg'
import pizza from '../../assets/pizza.svg'
import soda from '../../assets/soda.svg'
import { Container, Menu, MenuItem, Nav } from "./styles"

//TODO: Refatorar para que tenha um componente MenuItem que recebe a imagem e o texto como props
export function Sidebar() {
  return (
    <Container>
      <button type="button">
        <img src={menu}/>
      </button>
      <Nav>
        <Menu>
          <MenuItem>
            <a href="#">
              <img src={burger} alt="Hambugueres" />
              <span>Hambugueres</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={bugerAndSoda} alt="Combos" />
              <span>Combos</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={pizza} alt="Pizzas" />
              <span>Pizzas</span>
            </a>
          </MenuItem>
          <MenuItem>
            <a href="#">
              <img src={soda} alt="Refrigerantes" />
              <span>Refrigerantes</span>
            </a>
          </MenuItem>
        </Menu>
      </Nav>
    </Container>
  )
}