<h1 align="center">
  Scanner CNAB
</h1>

<p align = "center">
Este é o backend da aplicação Scanner CNBA - Que tem fins de facilitar o escaneamento de documentos CNAB.txt
</p>

<p align="center">
  <a href="#instalação">Instalação</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#endpoints">Endpoints</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="#swagger">Swagger</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
</p>

## **Instalação**

A seguir esta o passo-a-passo de instalação e execução em ambiente de desenvolvimento<br/>

<p>1. Clone o repositório:</p>

```
git clone https://github.com/vagnermengali/scanner-cnab.git
```
<p>2. Adentre na pasta raiz do projeto:</p>
  
```
cd scanner_cnab
```
<p>4. Crie seu ambiente virtual:</p>
  
```
python -m venv venv    
```
<p>5. Ative seu ambiente virtual:</p>
  
```
source venv/bin/activate  
```
<p>6. Instale as dependências do projeto:</p>
  
```
pip install -r requirements.txt 
```
<p>6. Crie as migrações:</p>
  
```
python manage.py makemigrations 
```
<p>6. Aplique as migrações:</p>
  
```
python manage.py migrate
```
<p>6. Ative o server:</p>

```
python manage.py runserver
```

## **Endpoints**

A API tem um total de 4 endpoints, podendo escanear o documento CNAB, listar transações, loja específica e deleção de todas as transações para um novo escaneamento. <br/>

A url base da API é 

## Rotas que não precisam de autenticação

<h2 align ='center'> Listando transações </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`GET /api/transaction/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 200`

```
[
  'total': 2,
  'results': 
  {
    "id": 0,
    "transaction": "string",
    "date": "string",
    "value": string,
    "hour": "string",
    "store": "string"
  },
  {
    "id": 1,
    "transaction": "string",
    "date": "string",
    "value": string,
    "hour": "string",
    "store": "string"
  }
]
```

<h2 align ='center'> Deletando transações </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`DELETE /api/transaction/delete/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`DELETE /api/transaction/delete/ - FORMATO DA RESPOSTA - STATUS 204`

```

```

<h2 align ='center'> Buscar transações de loja específica  </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`GET /api/transaction/store/store_name/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`GET /api/transaction/store/store_name/ - FORMATO DA RESPOSTA - STATUS 200`

```
[
  'total': 2,
  'results': 
  {
    "id": 0,
    "transaction": "string",
    "date": "string",
    "value": string,
    "hour": "string",
    "store": "string"
  },
  {
    "id": 1,
    "transaction": "string",
    "date": "string",
    "value": string,
    "hour": "string",
    "store": "string"
  }
]
```

<h2 align ='center'> Escaneamento do documento CNAB </h2>

Nessa aplicação o usuário sem fazer login ou se cadastrar pode ver as transações do documento escaneado:
Aqui conseguimos ver os usuários, suas tecnologias e seus trabalhos cadastrados.

`POST /api/transaction/file-scan/ - FORMATO DA REQUISIÇÃO`

```
Não é necessário um corpo da requisição.
```

`POST /api/transaction/file-scan/ - FORMATO DA RESPOSTA - STATUS 200`

```
{
    "details": "Scan completed successfully"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso você acabe errando e mandando algum campo errado, a resposta de erro será assim:
Não há transações a serem listadas.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Transaction list is empty"
}
```

Não há transações a serem listadas.

`DELETE /api/transaction/delete/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Transaction list is empty"
}
```

Buscar por histórico de transações de loja específica com lista de transação vazia.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Store not found",
    "stores": []
}
```
Buscar por histórico de transações de loja específica não encontrada.

`GET /api/transaction/ - FORMATO DA RESPOSTA - STATUS 404`

```json
{
    "details": "Store not found",
    "stores": [
        "Padaria dos sonhos",
        "Churrascaria Bom bife"
    ]
}
```
## **Swagger**

São algumas rotas voltada a documentação em geral da aplicação

`api/schema/ `

`api/docs/redoc/ `

`api/docs/swagger-ui/ `

---

<p align ='center'> Copyright <a href="https://github.com/vagnermengali">Vagner Mengali</a> 2023 </p>
