// Coleção: notificacoes
db.notificacoes.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9141"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    usuario_nome: "João Silva",
    titulo: "Aluguel Confirmado",
    mensagem: "Seu aluguel do armário 1011 foi confirmado.",
    data_envio: ISODate("2023-01-15T08:05:00Z"),
    tipo: "confirmação",
    lida: true,
    prioridade: "normal"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9142"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    usuario_nome: "João Silva",
    titulo: "Pagamento Aprovado",
    mensagem: "Pagamento de R$25.00 aprovado com sucesso.",
    data_envio: ISODate("2023-01-15T18:10:00Z"),
    tipo: "pagamento",
    lida: true,
    prioridade: "normal"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9143"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    usuario_nome: "Maria Oliveira",
    titulo: "Lembrete de Devolução",
    mensagem: "Seu armário 1012 deve ser liberado até 18h hoje.",
    data_envio: ISODate("2023-01-16T16:30:00Z"),
    tipo: "lembrete",
    lida: false,
    prioridade: "alta"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9144"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    usuario_nome: "Carlos Andrade",
    titulo: "Multa Aplicada",
    mensagem: "Multa de R$10.00 por atraso na devolução.",
    data_envio: ISODate("2023-02-20T18:05:00Z"),
    tipo: "multa",
    lida: false,
    prioridade: "alta"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9145"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9004"),
    usuario_nome: "Ana Clara Santos",
    titulo: "Promoção Especial",
    mensagem: "20% de desconto no próximo aluguel!",
    data_envio: ISODate("2023-03-01T09:00:00Z"),
    tipo: "promocional",
    lida: false,
    prioridade: "baixa"
  }
]);
