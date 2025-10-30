// Coleção: avaliacoes
db.avaliacoes.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9131"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    usuario_nome: "João Silva",
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9041"),
    armario_cod: 1011,
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9021"),
    praia_nome: "Praia do Gonzaga",
    nota: 4.0,
    comentario: "Armário em ótimo estado, mas a localização poderia ser melhor sinalizada.",
    tipo: "limpeza",
    data_avaliacao: ISODate("2023-01-15T10:00:00Z"),
    status: "Publicada"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9132"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    usuario_nome: "Maria Oliveira",
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9042"),
    armario_cod: 1012,
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9021"),
    praia_nome: "Praia do Gonzaga",
    nota: 5.0,
    comentario: "Perfeito! Fácil acesso e ótima organização.",
    tipo: "facilidade",
    data_avaliacao: ISODate("2023-01-16T18:00:00Z"),
    status: "Publicada"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9133"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    usuario_nome: "Carlos Andrade",
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9043"),
    armario_cod: 1021,
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9022"),
    praia_nome: "Praia do Boqueirão",
    nota: 3.0,
    comentario: "Funcionou bem, mas o mecanismo de abertura estava um pouco travado.",
    tipo: "funcionalidade",
    data_avaliacao: ISODate("2023-02-20T17:00:00Z"),
    status: "Publicada"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9134"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9005"),
    usuario_nome: "Pedro Costa",
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9047"),
    armario_cod: 2011,
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9024"),
    praia_nome: "Praia do Guaraú",
    nota: 2.0,
    comentario: "Problemas com a fechadura - tive que trocar de armário.",
    tipo: "segurança",
    data_avaliacao: ISODate("2023-04-05T21:00:00Z"),
    status: "Publicada"
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9135"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9008"),
    usuario_nome: "Fernanda Lima",
    armario_id: ObjectId("661a1b2c3d4e5f6a7b8c9052"),
    armario_cod: 5011,
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9029"),
    praia_nome: "Praia Martim de Sá",
    nota: 5.0,
    comentario: "Atendimento excelente e armário impecável!",
    tipo: "atendimento",
    data_avaliacao: ISODate("2023-07-22T19:00:00Z"),
    status: "Publicada"
  }
]);
