import styled from "styled-components";

export const ContainerMain = styled.div `
    width: 80%;
    height: 85vh;
    margin: 15px auto;
    padding: 3rem;
    background-color: azure;
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
    background-color: aliceblue;
    border-radius: 20px;
    `
export const ContainerBtn = styled.div `
    display: flex;
    flex-direction: column;
    padding: 1rem;
    `
export const Button = styled.button `
    width: 100%;
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