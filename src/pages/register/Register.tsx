import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import * as S from "./styled"
import pic from "../../assets/pic.svg"

export default function Register() {
  return (
    <>
    <Header/>
    <S.Main>

        <S.Container>
          <S.ContainerImage>
            <S.Img src={pic} alt="" />
          </S.ContainerImage>
        <S.Form>
          <form action="#">
            <S.FormHeader>
              <h1>Cadastre-se</h1>
            </S.FormHeader>

            <S.InputGroup>

              <S.InputBox>
                <S.Label>Nome</S.Label>
                <S.Input type="text" name="nome" placeholder="Nome" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>Email</S.Label>
                <S.Input type="email" name="email" placeholder="Digite seu email" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>Telefone</S.Label>
                <S.Input type="tel" name="number" placeholder="(xx) xxxxx-xxxx" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>CPF</S.Label>
                <S.Input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>Registro CFM</S.Label>
                <S.Input type="text" name="cfm" placeholder="0000000/UF" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>Data de Nascimento</S.Label>
                <S.Input type="date" name="date" placeholder="0000000/UF" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>CEP</S.Label>
                <S.Input type="text" name="cep" placeholder="00000-000" required></S.Input>
              </S.InputBox>

              <S.InputBox>
                <S.Label>Endereço</S.Label>
                <S.Input type="text" name="endereco" required></S.Input>
              </S.InputBox> 

              <S.InputBox>
                <S.Label>Valor</S.Label>
                <S.Input type="number" name="preco"></S.Input>
              </S.InputBox> 

              <S.InputBox>
                <S.Label>Imagem</S.Label>
                <S.Input type="file" name="imagem"></S.Input>
              </S.InputBox> 

            </S.InputGroup>

            <S.GenderInput>
         
            <S.Title>
              <h6>Consulta</h6>  
            </S.Title>

            <S.GenderGroup>
              <div>
                <input type="radio" />
                <label>Presencial</label>
              </div>

              <div>
                <input type="radio" />
                <label>Online</label>
              </div>
            </S.GenderGroup>

            </S.GenderInput>

            <S.ContainerButton>
              <button>Cadastro</button>
            </S.ContainerButton>

          </form>
        </S.Form>
        </S.Container>
        
    </S.Main>
      <Footer/>
    </>
  )
}