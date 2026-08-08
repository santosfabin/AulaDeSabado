### Projeto Alpha

Este projeto é uma API REST desenvolvida em Node.js com Express 5 para gerenciamento de usuários e autenticação segura. O sistema utiliza criptografia Bcrypt para proteção de senhas, validação de acessos por meio de tokens JWT injetados em Cookies e persistência de dados local com o banco de dados embarcado RocksDB. Ao iniciar, a aplicação executa um script automatizado de seed para garantir a existência de usuários administradores padrões no banco. 

### 📦 Instalação das Dependências

Copie e cole o comando abaixo no seu terminal para instalar todas as dependências necessárias de uma só vez: 

```
npm i
```

### 🚀 Como Iniciar o Projeto

Siga os blocos de comando abaixo na sequência para configurar o ambiente e rodar o servidor: 

**1. Configurar variáveis de ambiente** 

```
cp .env.example .env
```

*(Abra o arquivo .env gerado e defina os valores para NODE_ENV, PORT e SECRET_KEY antes de prosseguir).* 

**2. Executar a aplicação** 

```
npm start

```
