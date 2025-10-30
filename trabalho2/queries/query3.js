// Consulta 3: Duração Média e Receita Total por Praia

db.alugueis.aggregate([
  {
    $match: {
      data_fim: { $ne: null }
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
      from: "pagamentos",
      localField: "_id",
      foreignField: "aluguel_id",
      as: "pagamentos"
    }
  },
  {
    $addFields: {
      duracao_horas: {
        $divide: [
          { $subtract: ["$data_fim", "$data_inicio"] },
          3600000 // milissegundos em uma hora
        ]
      },
      valor_multas: {
        $sum: "$multas.valor"
      },
      tem_pagamento_atrasado: {
        $in: ["Atrasado", "$pagamentos.status"]
      }
    }
  },
  {
    $group: {
      _id: {
        praia_id: "$praia_id",
        praia_nome: "$praia_nome",
        cidade: "$cidade"
      },
      duracao_media: { $avg: "$duracao_horas" },
      receita_alugueis: { $sum: "$valor" },
      receita_multas: { $sum: "$valor_multas" },
      total_alugueis: { $sum: 1 }
    }
  },
  {
    $project: {
      _id: 0,
      nome: "$_id.praia_nome",
      cidade: "$_id.cidade",
      duracao_media: { $round: ["$duracao_media", 2] },
      receita_total: {
        $round: [
          { $add: ["$receita_alugueis", "$receita_multas"] },
          2
        ]
      },
      total_alugueis: 1
    }
  },
  {
    $sort: { receita_total: -1 }
  },
  {
    $limit: 5
  }
]);
