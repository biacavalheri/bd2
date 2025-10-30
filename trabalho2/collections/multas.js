// Coleção: multas
db.multas.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9101"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9063"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    usuario_nome: "Carlos Andrade",
    pagamento_id: ObjectId("661a1b2c3d4e5f6a7b8c9083"),
    valor: 10.00,
    motivo: "Atraso na devolução",
    status: "Pendente",
    data_aplicacao: ISODate("2023-02-20T18:05:00Z"),
    data_vencimento: ISODate("2023-03-05T23:59:59Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9102"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9065"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9005"),
    usuario_nome: "Pedro Costa",
    pagamento_id: ObjectId("661a1b2c3d4e5f6a7b8c9085"),
    valor: 15.00,
    motivo: "Atraso no pagamento",
    status: "Pendente",
    data_aplicacao: ISODate("2023-04-10T12:00:00Z"),
    data_vencimento: ISODate("2023-04-25T23:59:59Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9103"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9067"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9007"),
    usuario_nome: "Marcos Rocha",
    pagamento_id: ObjectId("661a1b2c3d4e5f6a7b8c9087"),
    valor: 12.50,
    motivo: "Danos ao armário",
    status: "Pendente",
    data_aplicacao: ISODate("2023-06-20T09:30:00Z"),
    data_vencimento: ISODate("2023-07-05T23:59:59Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9104"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9069"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9009"),
    usuario_nome: "Rafael Souza",
    pagamento_id: ObjectId("661a1b2c3d4e5f6a7b8c9089"),
    valor: 20.00,
    motivo: "Atraso na devolução",
    status: "Pendente",
    data_aplicacao: ISODate("2023-09-01T14:15:00Z"),
    data_vencimento: ISODate("2023-09-15T23:59:59Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9105"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9072"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    usuario_nome: "Maria Oliveira",
    pagamento_id: ObjectId("661a1b2c3d4e5f6a7b8c9092"),
    valor: 8.00,
    motivo: "Atraso no pagamento",
    status: "Pendente",
    data_aplicacao: ISODate("2023-11-10T16:45:00Z"),
    data_vencimento: ISODate("2023-11-25T23:59:59Z")
  }
]);
