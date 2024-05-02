import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import * as S from "./styled"
import pic from "../../assets/pic.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

interface Address {
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  complemento?: string;
  cep?: string;
  numero?: string
}

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  cpf: string;
  cfm: string;
  date: string;
  address: Address;
  preco: string;
  imagem: string | null;
  consulta: "presencial" | "online";
}

export default function Register() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [formData, setFormData] = useState<FormData>({
    nome: params.get("nome") || "",
    email: params.get("email") || "",
    telefone: params.get("telefone") || "",
    cpf: params.get("cpf") || "",
    cfm: params.get("cfm") || "",
    date: params.get("date") || "",
    address: {
      logradouro: params.get("logradouro") || "",
      bairro: params.get("bairro") || "",
      cidade: params.get("cidade") || "",
      uf: params.get("uf") || "",
      complemento: params.get("complemento") || "",
      numero: params.get("numero") || "",
    },
    preco: params.get("preco") || "",
    imagem: params.get("imagem") || null,
    consulta: params.get("consulta") === "presencial" ? "presencial" : "online",
  });

    useEffect(() => {
    if (params.get("consulta") && params.get("consulta") !== formData.consulta) {
      setFormData((prev) => ({ ...prev, consulta: params.get("consulta") === "presencial" ? "presencial" : "online" }));
    }
  }, [params, formData.consulta]);


  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cep = e.target.value.replace(/[^\d-]/g, "");
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => response.json())
        .then((data: Address) => {
          setFormData((prev) => ({
            ...prev,
            address: {
              ...prev.address,
              ...data,
            },
          }));
        })
        .catch((error) => console.error(error));
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setFormData((prev) => ({ ...prev, imagem: e.target.result }));
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { nome, email, telefone, cpf, cfm, date, address, preco, imagem, consulta } = formData;
    if (localStorage.getItem(cpf) && !params.get("isEditing")) {
      alert("CPF já cadastrado!");
    return;
  }
    const newFormData: FormData = { nome, email, telefone, cpf, cfm, date, address, preco, imagem, consulta };
    localStorage.setItem(cpf, JSON.stringify(newFormData));
    params.get("isEditing") ? alert("Usuário atualizado com sucesso!") : alert("Cadastro inserido com sucesso!")
    setFormData({
      nome: "",
      email: "",
      telefone: "",
      cpf: "",
      cfm: "",
      date: "",
      address: {
        logradouro: "",
        bairro: "",
        cidade: "",
        uf: "",
        complemento: "",
        numero: "",
      },
      preco: "",
      imagem: null,
      consulta: "presencial",
    });
  };

  return (
    <>
      <Header />
      <S.Main>
        <S.Container>
          <S.ContainerImage>
            <S.Img src={pic} alt="" />
          </S.ContainerImage>
          <S.Form onSubmit={handleSubmit} action="#">
            <S.FormHeader>
              <h1>Cadastre-se</h1>
            </S.FormHeader>
            <S.InputGroup>
              <S.InputBox>
                <S.Label>Nome</S.Label>
                <S.Input type="text" name="nome" placeholder="Digite seu nome" value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Email</S.Label>
                <S.Input type="email" name="email" placeholder="Digite seu email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Telefone</S.Label>
                <S.Input type="tel" name="telefone" placeholder="(xx) xxxxx-xxxx" value={formData.telefone} onChange={(e) => setFormData({ ...formData, telefone: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>CPF</S.Label>
                <S.Input type="text" name="cpf" placeholder="xxx.xxx.xxx-xx" value={formData.cpf} onChange={(e) => setFormData({ ...formData, cpf: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Registro CFM</S.Label>
                <S.Input type="text" name="cfm" placeholder="0000000/UF" value={formData.cfm} onChange={(e) => setFormData({ ...formData, cfm: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Data de Nascimento</S.Label>
                <S.Input type="date" name="date" placeholder="0000000/UF" value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>CEP</S.Label>
                <S.Input type="text" name="cep" placeholder="00000-000" onChange={handleCepChange} value={formData.address.cep} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Logradouro</S.Label>
                <S.Input type="text" name="logradouro" value={formData.address.logradouro} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, logradouro: e.target.value } })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Número</S.Label>
                <S.Input type="text" name="numero" value={formData.address.numero} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, numero: e.target.value } })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Bairro</S.Label>
                <S.Input type="text" name="bairro" value={formData.address.bairro} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, bairro: e.target.value } })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Cidade</S.Label>
                <S.Input type="text" name="cidade" value={formData.address.cidade} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, cidade: e.target.value } })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Estado</S.Label>
                <S.Input type="text" name="uf" value={formData.address.uf} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, uf: e.target.value } })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Complemento</S.Label>
                <S.Input type="text" name="complemento" value={formData.address.complemento} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, complemento: e.target.value } })} />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Valor da consulta</S.Label>
                <S.Input type="number" name="preco" value={formData.preco} onChange={(e) => setFormData({ ...formData, preco: e.target.value })} required />
              </S.InputBox>
              <S.InputBox>
                <S.Label>Imagem</S.Label>
                {formData.imagem && <img width="40px" height="40px" src={formData.imagem} alt="Imagem selecionada" />}
                <S.Input type="file" name="imagem" onChange={handleImageChange} accept="image/*" required />
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
              <button type="submit">Cadastro</button>
            </S.ContainerButton>
          </S.Form>
        </S.Container>
      </S.Main>
      <Footer />
    </>
  );
}
