import styled from "styled-components";

export const Main = styled.main `
width: 100%;
min-height: 100vh;`

export const ContainerForm = styled.div `
    width: 80%;
    height: auto;
    margin: 15px auto;
    padding: 3rem;
    background-color: #CCCCFF;
    border-radius: 10px;
    box-shadow: 2px 2px 10px 2px rgba( 0.5, 0.5, 0.5, 0.5);
    `
export const Title = styled.div `
   display: flex;
   justify-content: center;
    `

export const Lista = styled.div `
    display: flex;
    justify-content: space-around;
    margin-top: 1rem;
    padding: 1rem;
    background-color: #f2f5ff;
    border-radius: 20px;
    `

export const ContainerList = styled.div `
    display: flex;
    padding: 1rem;
    width: 85%;

    `
export const ContainerBtn = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem;
    width: 15%
    `

export const Img = styled.img `
    width: 85px;
    height: 85px;
    border-radius: 10px;
    `
export const Button = styled.button `
    width: 85px;
    margin-top: 5px;
    border: none;
    background-color: #6c63ff;
    padding: 6px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    color: #fff;;
    `
export const Span = styled.span `
    margin: 5px 0;
    `

export const UserInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`