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

### 2. Inicializando a aplicação
Execute o seguinte comando e aguarde instalar as dependências e executar a aplicação.

```bash
docker-compose up -d
```

A aplicação Bits Task estará disponível em http://localhost:3000 por padrão, e o banco de dados estará rodando em http://localhost:5432.

### 3. Configurando o ambiente
Neste contexto, um arquivo .env já configurado foi fornecido para facilitar o teste da execução da API.

### 4. Documentação da aplicação
A documentação foi criada com Swagger e ReDoc, contendo todos os endpoints da aplicação. Você poderá testá-los.
#### A documentaçãp com ReDoc estará disponível na porta http://localhost:3000/docs
#### A documentaçãp com Swagger estará disponível na porta http://localhost:3000/api-docs/
#### Fica a critério qual agradar










