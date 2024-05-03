import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Employer() {
  const [users, setUsers] = useState(Object.keys(localStorage).map((key) => {
    return JSON.parse(localStorage.getItem(key) || "");
  }));

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sx'));
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");

  const handleClickOpen = (cpf) => {
    setOpen(true);
    setSelectedUser(cpf);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteUser = (cpf) => {
    localStorage.removeItem(cpf);
    setUsers((prevUsers) => prevUsers.filter((user) => user.cpf !== cpf));
    handleClose();
  };

  return (
    <>
      <Header />
      <S.Main>

      <S.ContainerForm>
        <S.Title>
          <h1>Usuários</h1>
        </S.Title>
        {users.map((user, index) => (
          <S.Lista key={index}>
            <S.ContainerList>
                <S.Img src={user.imagem} /> 
              <S.UserInfo>
                <S.Span>Nome: {user.nome}</S.Span>
                <S.Span>CFM: {user.cfm}</S.Span>
                <S.Span>Cidade: {user.address.cidade}</S.Span>
              </S.UserInfo>
            </S.ContainerList>
            <S.ContainerBtn>
              <Link to={`/?nome=${user.nome}&email=${user.email}&telefone=${user.telefone}&cpf=${user.cpf}&cfm=${user.cfm}&date=${user.date}&logradouro=${user.address.logradouro}&bairro=${user.address.bairro}&cidade=${user.address.cidade}&uf=${user.address.uf}&complemento=${user.address.complemento}&cep=${user.address.cep}&numero=${user.address.numero}&preco=${user.preco}&imagem=${user.imagem}&consulta=${user.consulta}&isEditing=true`}>
                <S.Button>Editar</S.Button>
              </Link>
              <S.Button onClick={() => handleClickOpen(user.cpf)}>Excluir</S.Button>
            </S.ContainerBtn>
          </S.Lista>
        ))}
        <Dialog
          fullScreen={fullScreen}
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle id="responsive-dialog-title">{"Confirmar exclusão"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Tem certeza que deseja excluir este usuário?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose}>Cancelar</Button>
            <Button onClick={() => handleDeleteUser(selectedUser)} autoFocus>Confirmar</Button>
          </DialogActions>
        </Dialog>
      </S.ContainerForm>
      </S.Main>
      <Footer />
    </>
  );
}
