import *  as S from "./styled"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>
          <S.Text>Teste Front-end NVSTEC</S.Text>
        </S.BoxLogo>
        <S.MenuItens>
            <S.Lista><Link  to="/">Cadastro</Link></S.Lista>
            <S.Lista><Link to="/funcionarios">Funcionarios</Link></S.Lista>
        </S.MenuItens>
    </S.Header>
  )
}
