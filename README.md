# Bits Task

## Descrição
Bits Task é uma API Rest de lista de tarefas desenvolvida em Node.js utilizando o framework Express. O banco de dados PostgresSQL é gerenciado pelo Docker Compose e armazenado em um contêiner. Esta aplicação é projetada para ajudar os usuários a organizarem suas tarefas diárias de forma eficiente.

## Requisitos
Certifique-se de ter o Node.js e o Docker Compose instalados em sua máquina antes de prosseguir.

- Node.js: [Download aqui](https://nodejs.org/)
- Docker Compose: [Download aqui](https://docs.docker.com/compose/install/)

## Configuração

### 1. Clonando o repositório
Clone o repositório Bits Task para o seu ambiente local:

```bash

git clone https://github.com/aleviannaf/bits-task.git
cd bits-task
```

### 2. Instalando as dependências
Instale as dependências necessárias executando o seguinte comando no terminal:

```bash

npm install
```

### 3. Configurando o ambiente
Nessa aplicação foi submetido um arquivo .env para usar no teste da execução da API

### 4. Inicializando o banco de dados
Certifique-se de que o Docker esteja em execução e execute o seguinte comando para iniciar o banco de dados:

```bash

docker-compose up -d
npm run typeorm migration:generate src/migrations/InitialMigration -- -d src/data-source
npm run typeorm migration:run -- -d src/data-source
```
Isso iniciará um contêiner PostgreSQL com as configurações fornecidas no arquivo docker-compose.yml.

Depois de iniciado o docker composer, execute o seguinte código:

```bash

npm run typeorm migration:generate src/migrations/InitialMigration -- -d src/data-source
npm run typeorm migration:run -- -d src/data-source
```
Isso criarar e executara a migration do typeorm.

### 5. Inicializando a aplicação
Após a configuração, inicie a aplicação com o seguinte comando:

```bash

npm start
```
A aplicação Bits Task estará disponível em http://localhost:3000 por padrão.

### 6. Documentação da aplicação
A documentação foi criada com swagger e redoc. Ela contem todos os endpoints da aplicação. Você poderá testar eles.
A documentaçãp estará disponível na porta http://localhost:3000/docs 









