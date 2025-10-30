// Consulta 1: Armários Disponíveis em Santos

db.armarios.aggregate([
  {
    $match: {
      cidade: "Santos",
      status: "Disponível"
    }
  },
  {
    $project: {
      _id: 0,
      cod_armario: 1,
      tamanho: 1,
      praia_nome: 1,
      cidade: 1
    }
  },
  {
    $sort: {
      cod_armario: 1
    }
  }
]);
