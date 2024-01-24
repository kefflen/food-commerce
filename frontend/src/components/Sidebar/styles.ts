import styled from "styled-components"
//The sidebar should have a background color darker that the background color of vite template
export const Container = styled.aside`
  width: 7.75rem;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  overflow: hidden;

  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
  }
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`

export const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

`

export const MenuItem = styled.li`
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  a svg {
    width: 50%;
    fill: ${({ theme }) => theme.colors.white};
  }
`