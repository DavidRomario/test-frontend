import styled from "styled-components";


export const Main = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #CCCCFF;
`
export const Container = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, .212);
  align-items: center;
  background: #e0d0ff;
  margin: 5rem;
  border-radius: 10px;

`

export const ContainerImage = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0d0ff;
  padding: 1rem;

`

export const Img = styled.img`
  width: 80%;

`

export const Form = styled.form`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #fff;
  padding: 1rem;
  border-radius: 0 10px 10px 0;

  @media (max-width: 1200px) {
  width: 80%; 
}

`

export const FormHeader = styled.div`
  margin-bottom: 3rem
`

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`
export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.1rem;
`

export const Input = styled.input`
  margin: 0.6rem 0;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #0000001c;
  min-width: 207px;
  &:hover {
      background-color: #eeeee7;
    }
`
export const CurrencyInput = styled(Input)`
margin: 0.6rem 0;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 6px #0000001c;
  min-width: 207px;
  &:hover {
      background-color: #eeeee7;
    }

    @media (max-width: 1200px) {
    width: 50%; 
}
`;

export const Label = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: #000000c0;
`

export const Title = styled.div`
  & h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #000000c0;
    }
`
export const GenderGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  width: 40%;
  & input {
    margin-right: 5px;
  }
`

export const GenderInput = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`

export const ContainerButton = styled.div`
& button {
  width: 100%;
  margin-top: 3rem;
  border: none;
  background-color: #6c63ff;
  padding: 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;

  &:hover {
      background-color: #6b63fff1;
    }
  }
`
export const Image = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 10px
`
