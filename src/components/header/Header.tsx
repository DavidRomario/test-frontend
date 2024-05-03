import *  as S from "./styled"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <S.Header>
        <S.BoxLogo>

            <Link  to="/">
          <S.Text>Teste Front-end NVSTEC

            </S.Text>
            </Link>
        </S.BoxLogo>
        <S.MenuItens>
            <S.Lista><Link  to="/">Cadastro</Link></S.Lista>
            <S.Lista><Link to="/funcionarios">Funcionários</Link></S.Lista>
        </S.MenuItens>
    </S.Header>
  )
}
