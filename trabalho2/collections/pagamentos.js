// Coleção: pagamentos
db.pagamentos.insertMany([
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9081"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9061"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    usuario_nome: "João Silva",
    data: ISODate("2023-01-15T00:00:00Z"),
    valor: 25.00,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "4539876543210123",
      bandeira: "Visa"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9082"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9062"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    usuario_nome: "Maria Oliveira",
    data: ISODate("2023-01-16T00:00:00Z"),
    valor: 22.50,
    status: "Pendente",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "5168123456789012",
      bandeira: "Mastercard"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9083"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9063"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    usuario_nome: "Carlos Andrade",
    data: ISODate("2023-02-20T00:00:00Z"),
    valor: 18.00,
    status: "Atrasado",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "376512345678901",
      bandeira: "American"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9084"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9064"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9004"),
    usuario_nome: "Ana Clara Santos",
    data: ISODate("2023-03-10T00:00:00Z"),
    valor: 15.00,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "4024007195432109",
      bandeira: "Visa"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9085"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9065"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9005"),
    usuario_nome: "Pedro Costa",
    data: ISODate("2023-04-05T00:00:00Z"),
    valor: 20.00,
    status: "Atrasado",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "5532123456789010",
      bandeira: "Mastercard"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9086"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9066"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9006"),
    usuario_nome: "Juliana Pereira",
    data: ISODate("2023-05-12T00:00:00Z"),
    valor: 35.00,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "6011123456789012",
      bandeira: "Discover"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9087"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9067"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9007"),
    usuario_nome: "Marcos Rocha",
    data: ISODate("2023-06-18T00:00:00Z"),
    valor: 16.75,
    status: "Atrasado",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "345612345678901",
      bandeira: "American"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9088"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9068"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9008"),
    usuario_nome: "Fernanda Lima",
    data: ISODate("2023-07-22T00:00:00Z"),
    valor: 19.50,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "4929123456789012",
      bandeira: "Visa"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9089"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9069"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9009"),
    usuario_nome: "Rafael Souza",
    data: ISODate("2023-08-30T00:00:00Z"),
    valor: 24.00,
    status: "Atrasado",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "5178234567890123",
      bandeira: "Mastercard"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9090"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9070"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9010"),
    usuario_nome: "Bianca Almeida",
    data: ISODate("2023-09-14T00:00:00Z"),
    valor: 18.00,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "6011987654321098",
      bandeira: "Discover"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9091"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9071"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9001"),
    usuario_nome: "João Silva",
    data: ISODate("2023-10-25T00:00:00Z"),
    valor: 27.50,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "4539876543210123",
      bandeira: "Visa"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9092"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9072"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9002"),
    usuario_nome: "Maria Oliveira",
    data: ISODate("2023-11-05T00:00:00Z"),
    valor: 20.00,
    status: "Atrasado",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "5168123456789012",
      bandeira: "Mastercard"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9093"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9073"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9003"),
    usuario_nome: "Carlos Andrade",
    data: ISODate("2023-12-10T00:00:00Z"),
    valor: 35.00,
    status: "Pendente",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "376512345678901",
      bandeira: "American"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9094"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9074"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9004"),
    usuario_nome: "Ana Clara Santos",
    data: ISODate("2024-01-15T00:00:00Z"),
    valor: 16.75,
    status: "Concluído",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "4024007195432109",
      bandeira: "Visa"
    }
  },
  {
    _id: ObjectId("661a1b2c3d4e5f6a7b8c9095"),
    aluguel_id: ObjectId("661a1b2c3d4e5f6a7b8c9075"),
    usuario_id: ObjectId("661a1b2c3d4e5f6a7b8c9005"),
    usuario_nome: "Pedro Costa",
    data: ISODate("2024-02-20T00:00:00Z"),
    valor: 19.50,
    status: "Pendente",
    metodo_pagamento: "cartao",
    cartao_utilizado: {
      num_cartao: "5532123456789010",
      bandeira: "Mastercard"
    }
  }
]);
