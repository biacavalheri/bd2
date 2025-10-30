// Consulta 2: Usuários com Aluguéis Ativos e Valores Devidos

db.alugueis.aggregate([
  {
    $match: {
      status: "Ativo"
    }
  },
  {
    $lookup: {
      from: "multas",
      localField: "_id",
      foreignField: "aluguel_id",
      as: "multas"
    }
  },
  {
    $lookup: {
      from: "usuarios",
      localField: "usuario_id",
      foreignField: "_id",
      as: "usuario_info"
    }
  },
  {
    $unwind: "$usuario_info"
  },
  {
    $group: {
      _id: {
        usuario_id: "$usuario_id",
        cpf: "$usuario_info.cpf",
        nome: "$usuario_info.nome"
      },
      total_aluguel: { $sum: "$valor" },
      total_multas: {
        $sum: {
          $sum: "$multas.valor"
        }
      }
    }
  },
  {
    $project: {
      _id: 0,
      cpf: "$_id.cpf",
      nome: "$_id.nome",
      total_devido: {
        $add: ["$total_aluguel", "$total_multas"]
      }
    }
  },
  {
    $match: {
      total_devido: { $gt: 0 }
    }
  },
  {
    $sort: {
      total_devido: -1
    }
  }
]);
