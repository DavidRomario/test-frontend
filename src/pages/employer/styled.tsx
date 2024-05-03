import styled from "styled-components";

export const Main = styled.main `
width: 100%;
min-height: 100vh;`

export const ContainerForm = styled.div `
    width: 80%;
    height: auto;
    margin: 15px auto;
    padding: 48px;
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
    margin-top: 16px;
    padding: 16px;
    background-color: #f2f5ff;
    border-radius: 20px;
    `

export const ContainerList = styled.div `
    display: flex;
    padding: 16px;
    width: 85%;

    `
export const ContainerBtn = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px;
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
    font-size: 16px;
    font-weight: 500;
    color: #fff;;
    `
export const Span = styled.span `
    margin: 5px 0;
    font-size: 20px;
    `

export const UserInfo = styled.div`
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`
export const Switch = styled.div`
    display: flex;
    align-items: center;
    font-size: 20px;
`