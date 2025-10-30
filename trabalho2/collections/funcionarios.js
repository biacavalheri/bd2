// Coleção: funcionarios
db.funcionarios.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9121"),
    matricula: 1001,
    nome: "Carlos Silva",
    cargo: "Gerente de Manutenção",
    email: "carlos.silva@trankaki.com",
    telefone: "11987654321",
    data_admissao: ISODate("2022-01-15T00:00:00Z"),
    status: "Ativo",
    salario: 4500.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9122"),
    matricula: 1002,
    nome: "Ana Oliveira",
    cargo: "Técnico de Suporte",
    email: "ana.oliveira@trankaki.com",
    telefone: "11987654322",
    data_admissao: ISODate("2022-03-20T00:00:00Z"),
    status: "Ativo",
    salario: 3200.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9123"),
    matricula: 1003,
    nome: "Pedro Santos",
    cargo: "Atendente",
    email: "pedro.santos@trankaki.com",
    telefone: "11987654323",
    data_admissao: ISODate("2022-05-10T00:00:00Z"),
    status: "Ativo",
    salario: 2800.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9124"),
    matricula: 1004,
    nome: "Mariana Costa",
    cargo: "Supervisor de Praia",
    email: "mariana.costa@trankaki.com",
    telefone: "11987654324",
    data_admissao: ISODate("2022-02-28T00:00:00Z"),
    status: "Ativo",
    salario: 3800.00
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9125"),
    matricula: 1005,
    nome: "Lucas Fernandes",
    cargo: "Auxiliar de Limpeza",
    email: "lucas.fernandes@trankaki.com",
    telefone: "11987654325",
    data_admissao: ISODate("2022-04-15T00:00:00Z"),
    status: "Ativo",
    salario: 2200.00
  }
]);
