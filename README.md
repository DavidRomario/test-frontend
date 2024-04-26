# Teste de Front-end para Saúde

## Contexo

Você está criando uma plataforma online para contratação de profissionais de saúde. Nessa plataforma você deve exibir todos os cadastros dos profissionais de saúde da plataforma. Separado em partes tem os requisitos para você seguir. E você está criando a área interna, que você consegue administrar e gerenciar todos os profissionais de saúde cadastrados. O objetivo deste projeto é avaliar o desenvolvimento de uma aplicação front-end básica.

## Observações
- Os dados das empresas e funcionários para listagem e filtragem podem utilizar _mocks_ ou uma fake API *(ex: json-server)*, não é necessário desenvolver uma API para o desafio.

## Requisitos do projeto
### Gerais
   - O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto
   - O projeto deve utilizar Git como ferramenta de controle de versão
   - *Possuir testes automatizados é um diferencial*
   - *Estratégias de SEO são um diferencial*

### Funcionais
   1. Cadastrar novos profissionais de saúde:
      - O sistema deverá ter um cadastro de profissionais de saúde
      - O sistema deverá ser capaz de criar, excluir e alterar os profissionais de saúde
      - Deve ser possível inativar um profissionais de saúde (o registro continua, mas com status inativo)
      - O endereço do funcionário deve ser capturado com base no CEP digitado, utilizado uma API de CEP (ex.: https://viacep.com.br/, https://brasilapi.com.br/)
      - Cada profissional de saúde deve ter nome, CPF, RG, data de nascimento, email, telefone, endereço e registro CFM.
      - Todos os campos são obrigatórios, exceto email e telefone.
      - É obrigatório ter um email OU um telefone.
      - Não pode haver dois profissionais de saúde com o mesmo CPF

### Não-funcionais
   1. O sistema poderá armazenar as informações localmente 
      - Poderá ser utilizada memória local usando JSON.
   2. O sistema deve conter Testes unitários *(opcional)*
      - Utilize o Jest (já no projeto) para os testes unitários. Quanto maior o coverage, melhor a nota :).
   3. O sistema deve conter uma forma de validar o funcionamento *(opcional)*
      - Use o Swagger (configuração no projeto), postman ou, no mínimo, um .txt com a descrição das rotas.

### Parte 1: Cadastro de profissionais de saúde
1. Crie uma página de cadastro de profissionais de saúde onde o administrador do sistema pode inserir as seguintes informações:
   - Nome do profissional
   - Registros do profissional (CRM, CFM, Registro de especialidade.)
   - Valor da consulta (preço por hora)
   - Região de atendimento (cidade ou área)
   - Opção de atendimento (presencial, consulta online)
   - Faça o upload de pelo menos uma foto do profissional de saúde

### Parte 2: Listagem dos profissionais de saúde
1. Crie uma página de listagem de profissionais de saúde onde o usuário pode ver uma lista de todos as profissionais de saúde cadastrados. A lista deve incluir o nome, especialidade e a cidade/região de atendimento de cada profissional.

### Parte 3: Edição dos profissionais de saúde
3. Adicione uma funcionalidade que permita ao administrador editar as informações de um profissional de saúde existente. Isso deve incluir a possibilidade de editar todas as informações mencionadas na Parte 1, incluindo o upload de novas fotos se necessário.

### Parte 4: Exclusão dos profissionais de saúde
4. Implemente a capacidade de excluir um profissional da plataforma. Ao excluir um profissional, todas as informações associadas a ele devem ser removidas do sistema.

**Instruções e Notas:**
- A aplicação deve ser desenvolvida utilizando TypeScript e React.JS e/ou com NextJS
- Você não precisa de usar um banco de dados para armazenar as informações dos profissionais de saúde, você poderá usar o local storage ou json simulando API.
- Certifique-se de incluir validações adequadas para garantir que os dados inseridos sejam consistentes e seguros.
- O upload de fotos deve seguir as melhores práticas de segurança e armazenamento de imagens.
- Você tem a liberdade de projetar a interface do usuário da plataforma de acordo com sua preferência.

 #### Avaliação
 - O teste deve ser clonado em seu repositório do Github e, após finalizado, a URL do repositório deverá ser enviada para o contato que lhe enviou o teste
 - Uma breve explicação das decisões tomadas deverá ser enviada para nós, da forma que for acordado entre você e quem lhe enviou o desafio.
 - A avaliação ocorrerá com base na arquitetura, design e qualidade do código, entendimento das regras de negócio, tolerância a falhas e o quão preparado esse serviço estaria para ser rodado em produção.
 - Existem algumas funcionalidades adicionais. Apesar de não serem obrigatórias, terão peso considerável na avaliação.

**Boa sorte.**
