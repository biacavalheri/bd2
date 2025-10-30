// Coleção: armarios
db.armarios.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9041"),
    cod_armario: 1011,
    tamanho: "P",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9021"),
    praia_nome: "Praia do Gonzaga",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 5.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9042"),
    cod_armario: 1012,
    tamanho: "M",
    status: "Ocupado",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9021"),
    praia_nome: "Praia do Gonzaga",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 7.50
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9043"),
    cod_armario: 1021,
    tamanho: "G",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9022"),
    praia_nome: "Praia do Boqueirão",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 10.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9044"),
    cod_armario: 1022,
    tamanho: "P",
    status: "Manutenção",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9022"),
    praia_nome: "Praia do Boqueirão",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 5.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9045"),
    cod_armario: 1031,
    tamanho: "M",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9023"),
    praia_nome: "Praia do José Menino",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 7.50
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9046"),
    cod_armario: 1032,
    tamanho: "G",
    status: "Ocupado",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9023"),
    praia_nome: "Praia do José Menino",
    cidade: "Santos",
    estado: "SP",
    preco_hora: 10.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9047"),
    cod_armario: 2011,
    tamanho: "P",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9024"),
    praia_nome: "Praia do Guaraú",
    cidade: "Peruíbe",
    estado: "SP",
    preco_hora: 5.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9048"),
    cod_armario: 3011,
    tamanho: "M",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9025"),
    praia_nome: "Praia Grande",
    cidade: "Ubatuba",
    estado: "SP",
    preco_hora: 7.50
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9049"),
    cod_armario: 3021,
    tamanho: "G",
    status: "Ocupado",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9026"),
    praia_nome: "Praia do Tenório",
    cidade: "Ubatuba",
    estado: "SP",
    preco_hora: 10.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9050"),
    cod_armario: 4011,
    tamanho: "P",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9027"),
    praia_nome: "Praia de Maresias",
    cidade: "São Sebastião",
    estado: "SP",
    preco_hora: 5.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9051"),
    cod_armario: 4021,
    tamanho: "M",
    status: "Manutenção",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9028"),
    praia_nome: "Praia da Baleia",
    cidade: "São Sebastião",
    estado: "SP",
    preco_hora: 7.50
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9052"),
    cod_armario: 5011,
    tamanho: "G",
    status: "Disponível",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9029"),
    praia_nome: "Praia Martim de Sá",
    cidade: "Caraguatatuba",
    estado: "SP",
    preco_hora: 10.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9053"),
    cod_armario: 6011,
    tamanho: "P",
    status: "Ocupado",
    praia_id: ObjectId("661a1b2c3d4e5f6a7b8c9030"),
    praia_nome: "Praia dos Sonhos",
    cidade: "Itanhaém",
    estado: "SP",
    preco_hora: 5.00
  }
]);
