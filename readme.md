Projeto CRUD de Usuários
Este projeto é uma API REST simples criada com Node.js e Express para gerenciar usuários.

Funcionalidades
🔒 Autenticação via JWT
👤 CRUD de usuários (Criar, Listar, Atualizar, Remover)
📂 Dados armazenados em arquivo users.json
📈 Rota pública /status para checar saúde da aplicação

Como rodar o projeto
Clone o repositório.
Instale as dependências:
npm install
Inicie o servidor:
npm start

Servidor disponível em: http://localhost:3333

Rotas da API
| Método | Rota             | Protegida | Descrição                       |
|:-------|:------------------|:----------|:--------------------------------|
| POST   | /auth/login      | ❌        | Login e obtenção de token       |
| GET    | /status          | ❌        | Verificar status do servidor    |
| POST   | /users           | ✅        | Criar novo usuário              |
| GET    | /users           | ✅        | Listar todos os usuários        |
| PUT    | /users/:id       | ✅        | Atualizar usuário               |
| DELETE | /users/:id       | ✅        | Deletar usuário                 |

Melhorias Possíveis
🔒 Criptografar senha dos usuários (ex.: bcrypt)
🕒 Implementar refresh token para autenticação
🗃️ Substituir o users.json por um banco de dados real (MongoDB, PostgreSQL)
🔄 Operações assíncronas no usersRepository (fs.promises)
📄 Documentação com Swagger
🚀 Deploy da API (ex.: Vercel, Render)

---

Desenvolvido para fins de teste e aprendizado.