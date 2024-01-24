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
`