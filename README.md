# FlaApp - Relatório e Instruções de Uso

## Visão Geral

O **FlaApp** é um aplicativo mobile desenvolvido em React Native com Expo, focado em torcedores do Flamengo. Ele oferece funcionalidades como login, cadastro, visualização de jogos, artilharia, perfil do usuário e recuperação de senha, 
tudo com navegação moderna e visual personalizado.

---

## Estrutura do Projeto

- **App.js**: Arquivo principal, define as rotas e navegação stack e é a tela inicial.
- **HomePage.js**: Tela principal após login, com informações dos ultimos jogos de cada competição, e com Drawer Navigation (menu lateral).
- **Login.js**: Tela de login do usuário.
- **Cadastro.js**: Tela de cadastro de novo usuário.
- **RecuperaSenha.js**: Tela para recuperação de senha.
- **Artilharia.js**: Tela com informações de artilharia.
- **Perfil.js**: Tela de perfil do usuário, com dados pessoais e opções.
- **assets/**: Pasta com imagens utilizadas no app.

---

## Instalação e Execução

1. **Pré-requisitos**
   - Node.js instalado
   - Expo CLI instalado globalmente (`npm install -g expo-cli`)
   - Editor de código (VS Code recomendado)

2. **Instalação das dependências**
   ```
   npm install
   ```

3. **Executando o projeto**
   ```
   npx expo start
   ```
   - Use o app Expo Go no seu celular para escanear o QR Code e testar.

---

## Navegação

- **Stack Navigation** (App.js): Controla as telas principais (Login, Cadastro, HomePage, Perfil, etc).
- **Drawer Navigation** (HomePage.js): Menu lateral para navegar entre Home, Artilharia, Perfil e Sair.

---

## Funcionalidades

- **Login/Cadastro**: Usuário pode criar conta e acessar o app, pode voltar para a tela inicial tocando na logo, pode ir pro login caso esteja na tela de cadastro mas já tem conta, pode ir para tela de cadastro caso esteja na de login e não tenha conta ainda e pode ir para tela de recuperação de senha.
- **HomePage**: Mostra jogos, placares, tabelas de classificação e menu lateral.
- **Menu Lateral** pode navegar para home, artilharia, perfil ou sair, logo volta para home.
- **Artilharia**: Exibe artilheiros do campeonato, possui o menu lateral, e ao apertar na logo volta para homepage.
- **Perfil**:
  - Mostra nome, email, data de nascimento e status de sócio.
  - Botão "Alterar senha" leva para RecuperaSenha.js.
  - Botão "Sair" retorna para tela inicial.
  - Logo "FlaApp" no rodapé volta para o topo da HomePage.
- **Recuperação de Senha**: Mensagem para redefinir a senha do usuário.

---

## Personalização

- **Dados do Usuário**: Os dados do perfil são recebidos via `FireBase` ou podem ser integrados com backend/fonte de dados real.
- **Cores e fontes**: O tema utiliza as cores do Flamengo (Vermelho, preto e branco) e o uso de fonte Roboto.
