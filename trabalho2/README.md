# 🏖️ Trankaki - MongoDB

## 📋 Sobre o Projeto
Este projeto consiste na migração do banco de dados do sistema **Trankaki** - um sistema inovador de gerenciamento de aluguel de armários para praias - do **PostgreSQL** para **MongoDB**. O trabalho foi desenvolvido como parte da disciplina de **Banco de Dados II**.

---

## 🏗️ Estrutura do Banco de Dados MongoDB

### 📂 Coleções Criadas

### 1. `usuarios`
Armazena os dados dos usuários do sistema.

```
{
  _id: ObjectId,
  cpf: String,
  nome: String,
  email: String,
  telefone: String,
  senha: String,
  endereco: {
    cep: String,
    estado: String,
    cidade: String,
    logradouro: String
  },
  cartoes: [Array],
  data_cadastro: Date
} 
```
### 2. `praias`
Contém informações sobre as praias onde os armários estão localizados.

```
{
  _id: ObjectId,
  cod_praia: Number,
  nome: String,
  localizacao: {
    latitude: Decimal,
    longitude: Decimal
  },
  cidade: String,
  estado: String,
  total_armarios: Number
} 
```
### 3. `armarios`
Gerencia os armários disponíveis para aluguel.

```
{
  _id: ObjectId,
  cod_armario: Number,
  tamanho: String,
  status: String,
  praia_id: ObjectId,
  praia_nome: String,
  cidade: String,
  estado: String,
  preco_hora: Decimal
}

```
### 4. `alugueis`
Registra os aluguéis realizados pelos usuários.

```
{
  _id: ObjectId,
  usuario_id: ObjectId,
  usuario_nome: String,
  usuario_cpf: String,
  armario_id: ObjectId,
  armario_cod: Number,
  armario_tamanho: String,
  praia_id: ObjectId,
  praia_nome: String,
  data_inicio: Date,
  data_fim: Date,
  valor: Decimal,
  status: String,
  horas_utilizadas: Number
}

```
### 5. `pagamentos`
Controla os pagamentos realizados.

```
{
  _id: ObjectId,
  aluguel_id: ObjectId,
  usuario_id: ObjectId,
  usuario_nome: String,
  data: Date,
  valor: Decimal,
  status: String,
  metodo_pagamento: String,
  cartao_utilizado: Object
}

```
### 6. `multas`
Gerencia as multas aplicadas aos usuários.

```
{
  _id: ObjectId,
  aluguel_id: ObjectId,
  usuario_id: ObjectId,
  usuario_nome: String,
  pagamento_id: ObjectId,
  valor: Decimal,
  motivo: String,
  status: String,
  data_aplicacao: Date,
  data_vencimento: Date
}

```
### 7. `manutencoes`
Registra as manutenções realizadas nos armários.

```
{
  _id: ObjectId,
  armario_id: ObjectId,
  armario_cod: Number,
  funcionario_id: ObjectId,
  funcionario_nome: String,
  funcionario_matricula: Number,
  data_inicio: Date,
  data_conclusao: Date,
  descricao: String,
  tipo: String,
  status: String,
  custo: Decimal
}

```
### 8. `avaliacoes`
Armazena as avaliações dos usuários sobre os armários.

```
{
  _id: ObjectId,
  usuario_id: ObjectId,
  usuario_nome: String,
  armario_id: ObjectId,
  armario_cod: Number,
  praia_id: ObjectId,
  praia_nome: String,
  nota: Decimal,
  comentario: String,
  tipo: String,
  data_avaliacao: Date,
  status: String
}

```
### 9. `funcionarios`
Contém dados dos funcionários do sistema.

```
{
  _id: ObjectId,
  matricula: Number,
  nome: String,
  cargo: String,
  email: String,
  telefone: String,
  data_admissao: Date,
  status: String,
  salario: Decimal
}

```
### 10. `notificacoes`
Gerencia as notificações enviadas aos usuários.

```
{
  _id: ObjectId,
  usuario_id: ObjectId,
  usuario_nome: String,
  titulo: String,
  mensagem: String,
  data_envio: Date,
  tipo: String,
  lida: Boolean,
  prioridade: String
}

```

---

## 🔍 Consultas Principais

Além das coleções criadas, foram desenvolvidas **três consultas principais** para explorar os dados no novo banco **MongoDB**:

### 1. Armários disponíveis na praia de Santos  
Consulta responsável por retornar o **código** e o **tamanho** dos armários disponíveis na praia de Santos.

### 2. Usuários com aluguéis ativos e valores devidos  
Lista o **CPF** e o **nome** dos usuários que possuem aluguéis ativos, além da **soma dos valores devidos** referentes aos seus **aluguéis** e **multas**.

### 3. Duração média e receita total por praia  
Calcula a **duração média dos aluguéis** e a **receita total de cada praia**, incluindo as multas pagas.  
A consulta apresenta os dados das **cinco praias com maior receita total**.

**Essas consultas estão organizadas na pasta "queries"**

---

## 🧰 Ferramentas Utilizadas

Para o desenvolvimento e execução deste projeto, foram utilizadas as seguintes ferramentas:
- **MongoDB Atlas** — serviço em nuvem utilizado para hospedar o banco de dados.  
- **MongoDB Playground (VS Code Extension)** — utilizado como interface de execução e testes das consultas.

---

## 👥 Desenvolvido por

- Beatriz de Oliveira Cavalheri
- Eduarda Moreira da Silva
- Gustavo Orpinelli de Marco
- Maysa Marques Santos de Oliveira
