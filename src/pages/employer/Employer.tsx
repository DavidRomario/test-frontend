import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Employer() {
  const [users, setUsers] = useState(Object.keys(localStorage).map((key) => {
    return JSON.parse(localStorage.getItem(key) || "");
  }));

  const handleDeleteUser = (cpf: string) => {
    localStorage.removeItem(cpf);
    setUsers((prevUsers) => prevUsers.filter((user) => user.cpf !== cpf));
    window.location.reload();
  };

  return (
    <>
      <Header />
      <S.ContainerMain>
        <S.Title>
          <h1>Usuários</h1>
        </S.Title>
        {users.map((user, index) => (
          <S.Lista key={index}>
            <div>
              {user.imagem && <img width="40px" height="40px" src={user.imagem} alt="Imagem do usuário" />}
              <span>Nome: {user.nome}</span>
              <span>CFM: {user.cfm}</span>
              <span>Cidade: {user.address.cidade}</span>
            </div>
            <S.ContainerBtn>
              <Link to={`/register?nome=${user.nome}&email=${user.email}&telefone=${user.telefone}&cpf=${user.cpf}&cfm=${user.cfm}&date=${user.date}&logradouro=${user.address.logradouro}&bairro=${user.address.bairro}&cidade=${user.address.cidade}&uf=${user.address.uf}&complemento=${user.address.complemento}&cep=${user.address.cep}&numero=${user.address.numero}&preco=${user.preco}&imagem=${user.imagem}&consulta=${user.consulta}&isEditing=true`}>
                <S.Button>Editar</S.Button>
              </Link>
              <S.Button onClick={() => handleDeleteUser(user.cpf)}>Excluir</S.Button>
            </S.ContainerBtn>
          </S.Lista>
        ))}
      </S.ContainerMain>
      <Footer />
    </>
  );
}