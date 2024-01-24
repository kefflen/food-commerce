import styled, { css } from "styled-components"
type ContainerProps = {
  isExpanded: boolean
}
export const Container = styled.aside<ContainerProps>`
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.red};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  overflow: hidden;
  transition: width 0.3s ease-in-out;

  ${({ isExpanded }) => {
    return isExpanded? css`
      width: 16.3rem;
      ${MenuItem} a {
        flex-direction: row;
        gap: 0.5rem;
        padding: 0 .5rem;
        justify-content: flex-start;
        width: 100%;
      }
    ` : css`
      width: 7.5rem;
    `
  }}

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
  width: 100%;
`

export const Menu = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`

export const MenuItem = styled.li`
  width: 100%;
  &.active {
    width: 100%;
    border-left: 0.5rem solid ${({ theme }) => theme.colors.yellow};
    color: ${({ theme }) => theme.colors.yellow};
    svg {
      fill: ${({ theme }) => theme.colors.yellow};
    }
  }

  a {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  a svg {
    width: 5rem;
    fill: ${({ theme }) => theme.colors.white};
  }
`