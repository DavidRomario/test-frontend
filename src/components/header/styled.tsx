import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
`
  const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
  `

export const Header = styled.header`
width: 100%;
height: 80px;
background-color: #4A5051;
display: flex;
align-items: center;
`

export const BoxLogo = styled.div`
height: 38vh;
width: 100%;
display: flex;
align-items: center;
justify-content: space-evenly;
color: white;
@media (max-width: 500px) {
    flex-direction: row;
    padding-left: 20px;
   
}
`

export const Text = styled.p`
width: 100%;
padding-left: 50px
`

export const Lista = styled.li`
    list-style: none;
    width: 100%;
    ${center}
    a{
    color: white;  
    text-decoration: none;
    }
    @media (max-width: 500px) {
    height: 5vh;
    }
`

export const MenuItens = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 250px;
`