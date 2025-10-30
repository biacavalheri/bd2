// Coleção: manutencoes
db.manutencoes.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9111"),
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9041"),
    armario_cod: 1011,
    funcionario_id: ObjectId("661a1b2c3d4e5f6a7b8c9121"),
    funcionario_nome: "Carlos Silva",
    funcionario_matricula: 1001,
    data_inicio: ISODate("2023-03-05T09:00:00Z"),
    data_conclusao: ISODate("2023-03-05T11:30:00Z"),
    descricao: "Fechadura com defeito",
    tipo: "Corretiva",
    status: "Concluída",
    custo: 45.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9112"),
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9044"),
    armario_cod: 1022,
    funcionario_id: ObjectId("661a1b2c3d4e5f6a7b8c9122"),
    funcionario_nome: "Ana Oliveira",
    funcionario_matricula: 1002,
    data_inicio: ISODate("2023-04-10T14:00:00Z"),
    data_conclusao: ISODate("2023-04-12T16:00:00Z"),
    descricao: "Troca da porta danificada",
    tipo: "Corretiva",
    status: "Concluída",
    custo: 120.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9113"),
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9047"),
    armario_cod: 2011,
    funcionario_id: ObjectId("661a1b2c3d4e5f6a7b8c9123"),
    funcionario_nome: "Pedro Santos",
    funcionario_matricula: 1003,
    data_inicio: ISODate("2023-05-15T10:30:00Z"),
    data_conclusao: null,
    descricao: "Problema no sistema eletrônico",
    tipo: "Corretiva",
    status: "Em Andamento",
    custo: 85.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9114"),
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9051"),
    armario_cod: 4021,
    funcionario_id: ObjectId("661a1b2c3d4e5f6a7b8c9124"),
    funcionario_nome: "Mariana Costa",
    funcionario_matricula: 1004,
    data_inicio: ISODate("2023-06-20T08:00:00Z"),
    data_conclusao: ISODate("2023-06-20T10:45:00Z"),
    descricao: "Limpeza interna completa",
    tipo: "Preventiva",
    status: "Concluída",
    custo: 25.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9115"),
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9053"),
    armario_cod: 6011,
    funcionario_id: ObjectId("661a1b2c3d4e5f6a7b8c9125"),
    funcionario_nome: "Lucas Fernandes",
    funcionario_matricula: 1005,
    data_inicio: ISODate("2023-07-25T13:00:00Z"),
    data_conclusao: ISODate("2023-07-25T17:00:00Z"),
    descricao: "Pintura externa",
    tipo: "Preventiva",
    status: "Concluída",
    custo: 75.00
  }
]);
