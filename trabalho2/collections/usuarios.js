// Coleção: usuarios
db.usuarios.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    cpf: "12345678901",
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "11987654321",
    senha: "senha123",
    endereco: {
      cep: "01311000",
      estado: "SP",
      cidade: "São Paulo",
      logradouro: "Av. Paulista, 1000"
    },
    cartoes: [
      {
        num_cartao: "4539876543210123",
        bandeira: "Visa",
        validade: "05/27",
        cvv: "123",
        titular: "João Silva"
      }
    ],
    data_cadastro: ISODate("2023-01-01T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    cpf: "23456789012",
    nome: "Maria Oliveira",
    email: "maria.oliv@email.com",
    telefone: "21988776655",
    senha: "mariA123",
    endereco: {
      cep: "20040002",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      logradouro: "Rua do Ouvidor, 50"
    },
    cartoes: [
      {
        num_cartao: "5168123456789012",
        bandeira: "Mastercard",
        validade: "08/26",
        cvv: "456",
        titular: "Maria Oliveira"
      }
    ],
    data_cadastro: ISODate("2023-01-02T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    cpf: "34567890123",
    nome: "Carlos Andrade",
    email: "carlos.andrade@mail.com",
    telefone: "31999887766",
    senha: "carlos#1",
    endereco: {
      cep: "30140010",
      estado: "MG",
      cidade: "Belo Horizonte",
      logradouro: "Av. Afonso Pena, 1500"
    },
    cartoes: [
      {
        num_cartao: "376512345678901",
        bandeira: "American",
        validade: "11/25",
        cvv: "789",
        titular: "Carlos Andrade"
      }
    ],
    data_cadastro: ISODate("2023-01-03T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9004"),
    cpf: "45678901234",
    nome: "Ana Clara Santos",
    email: "ana.santos@example.com",
    telefone: "41977665544",
    senha: "AnaClara2023",
    endereco: {
      cep: "80010000",
      estado: "PR",
      cidade: "Curitiba",
      logradouro: "Rua XV de Novembro, 200"
    },
    cartoes: [
      {
        num_cartao: "4024007195432109",
        bandeira: "Visa",
        validade: "03/28",
        cvv: "234",
        titular: "Ana Clara Santos"
      }
    ],
    data_cadastro: ISODate("2023-01-04T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9005"),
    cpf: "56789012345",
    nome: "Pedro Costa",
    email: "pedro.costa@mail.com",
    telefone: "51988997766",
    senha: "Pedro@321",
    endereco: {
      cep: "90010000",
      estado: "RS",
      cidade: "Porto Alegre",
      logradouro: "Av. Borges de Medeiros, 500"
    },
    cartoes: [
      {
        num_cartao: "5532123456789010",
        bandeira: "Mastercard",
        validade: "09/26",
        cvv: "567",
        titular: "Pedro Costa"
      }
    ],
    data_cadastro: ISODate("2023-01-05T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9006"),
    cpf: "67890123456",
    nome: "Juliana Pereira",
    email: "juliana.pereira@email.com",
    telefone: "61988775533",
    senha: "Ju#2023!",
    endereco: {
      cep: "70040900",
      estado: "DF",
      cidade: "Brasília",
      logradouro: "SQS 102 Bloco A"
    },
    cartoes: [
      {
        num_cartao: "6011123456789012",
        bandeira: "Discover",
        validade: "12/25",
        cvv: "890",
        titular: "Juliana Pereira"
      }
    ],
    data_cadastro: ISODate("2023-01-06T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9007"),
    cpf: "78901234567",
    nome: "Marcos Rocha",
    email: "marcos.rocha@example.com",
    telefone: "71966554433",
    senha: "Mr2023*",
    endereco: {
      cep: "40010010",
      estado: "BA",
      cidade: "Salvador",
      logradouro: "Av. Sete de Setembro, 2000"
    },
    cartoes: [
      {
        num_cartao: "345612345678901",
        bandeira: "American",
        validade: "07/27",
        cvv: "345",
        titular: "Marcos Rocha"
      }
    ],
    data_cadastro: ISODate("2023-01-07T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9008"),
    cpf: "89012345678",
    nome: "Fernanda Lima",
    email: "fernanda.lima@mail.com",
    telefone: "81955443322",
    senha: "FeLi@123",
    endereco: {
      cep: "50010000",
      estado: "PE",
      cidade: "Recife",
      logradouro: "Rua do Riachuelo, 100"
    },
    cartoes: [
      {
        num_cartao: "4929123456789012",
        bandeira: "Visa",
        validade: "02/28",
        cvv: "678",
        titular: "Fernanda Lima"
      }
    ],
    data_cadastro: ISODate("2023-01-08T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9009"),
    cpf: "90123456789",
    nome: "Rafael Souza",
    email: "rafael.souza@email.com",
    telefone: "11944332211",
    senha: "Rafa#2023",
    endereco: {
      cep: "01311000",
      estado: "SP",
      cidade: "São Paulo",
      logradouro: "Rua Augusta, 1500"
    },
    cartoes: [
      {
        num_cartao: "5178234567890123",
        bandeira: "Mastercard",
        validade: "10/26",
        cvv: "901",
        titular: "Rafael Souza"
      }
    ],
    data_cadastro: ISODate("2023-01-09T00:00:00Z")
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9010"),
    cpf: "01234567890",
    nome: "Bianca Almeida",
    email: "bianca.almeida@mail.com",
    telefone: "21933221100",
    senha: "Bea@2023",
    endereco: {
      cep: "22010000",
      estado: "RJ",
      cidade: "Rio de Janeiro",
      logradouro: "Av. Atlântica, 2000"
    },
    cartoes: [
      {
        num_cartao: "6011987654321098",
        bandeira: "Discover",
        validade: "04/27",
        cvv: "012",
        titular: "Bianca Almeida"
      }
    ],
    data_cadastro: ISODate("2023-01-10T00:00:00Z")
  }
]);
