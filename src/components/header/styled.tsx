import styled,{createGlobalStyle, css} from "styled-components";


export const GlobalStyle = createGlobalStyle`
*{
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
font-family: "Roboto", sans-serif;
margin: 0;
box-sizing: border-box;
padding: 0;


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
background-color: #8f98b3;
display: flex;
align-items: center;
`

export const BoxLogo = styled.div`
width: 100%;
display: flex;
align-items: center;
flex-decoration: none;
a{
text-decoration: none;
}
`

export const Text = styled.p`
width: 100%;
padding-left: 50px;
color: #FFFFFF;
font-size: 20px;
 `

export const Lista = styled.li`
list-style: none;
width: 100%;
${center}
a{
color: #FFFFFF;  
text-decoration: none;
font-size: 20px;
}
`

export const MenuItens = styled.ul`
display: flex;
justify-content: space-between;
margin-right: 25px;
width: 30%;
`