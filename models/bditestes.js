'use strict';
module.exports = (sequelize, DataTypes) => {
  const BDItestes = sequelize.define('BDItestes', {
    idPaciente: { 
      type: DataTypes.STRING,
      defaultValue: '' // or whatever you would like
},
    Q1a: DataTypes.STRING(1),
    Q1b: DataTypes.STRING(1),
    Q1c: DataTypes.STRING(1),
    Q1d: DataTypes.STRING(1),
    Q2a: DataTypes.STRING(1),
    Q2b: DataTypes.STRING(1),
    Q2c: DataTypes.STRING(1),
    Q2d: DataTypes.STRING(1),
    Q3a: DataTypes.STRING(1),
    Q3b: DataTypes.STRING(1),
    Q3c: DataTypes.STRING(1),
    Q3d: DataTypes.STRING(1),
    Q4a: DataTypes.STRING(1),
    Q4b: DataTypes.STRING(1),
    Q4c: DataTypes.STRING(1),
    Q4d: DataTypes.STRING(1),
    Q5a: DataTypes.STRING(1),
    Q5b: DataTypes.STRING(1),
    Q5c: DataTypes.STRING(1),
    Q5d: DataTypes.STRING(1),
    Q6a: DataTypes.STRING(1),
    Q6b: DataTypes.STRING(1),
    Q6c: DataTypes.STRING(1),
    Q6d: DataTypes.STRING(1),
    Q7a: DataTypes.STRING(1),
    Q7b: DataTypes.STRING(1),
    Q7c: DataTypes.STRING(1),
    Q7d: DataTypes.STRING(1),
    Q8a: DataTypes.STRING(1),
    Q8b: DataTypes.STRING(1),
    Q8c: DataTypes.STRING(1),
    Q8d: DataTypes.STRING(1),
    Q9a: DataTypes.STRING(1),
    Q9b: DataTypes.STRING(1),
    Q9c: DataTypes.STRING(1),
    Q9d: DataTypes.STRING(1),
    Q10a: DataTypes.STRING(1),
    Q10b: DataTypes.STRING(1),
    Q10c: DataTypes.STRING(1),
    Q10d: DataTypes.STRING(1),
    Q11a: DataTypes.STRING(1),
    Q11b: DataTypes.STRING(1),
    Q11c: DataTypes.STRING(1),
    Q11d: DataTypes.STRING(1),
    Q12a: DataTypes.STRING(1),
    Q12b: DataTypes.STRING(1),
    Q12c: DataTypes.STRING(1),
    Q12d: DataTypes.STRING(1),
    Q13a: DataTypes.STRING(1),
    Q13b: DataTypes.STRING(1),
    Q13c: DataTypes.STRING(1),
    Q13d: DataTypes.STRING(1),
    Q14a: DataTypes.STRING(1),
    Q14b: DataTypes.STRING(1),
    Q14c: DataTypes.STRING(1),
    Q14d: DataTypes.STRING(1),
    Q15a: DataTypes.STRING(1),
    Q15b: DataTypes.STRING(1),
    Q15c: DataTypes.STRING(1),
    Q15d: DataTypes.STRING(1),
    Q16a: DataTypes.STRING(1),
    Q16b: DataTypes.STRING(1),
    Q16c: DataTypes.STRING(1),
    Q16d: DataTypes.STRING(1),
    Q17a: DataTypes.STRING(1),
    Q17b: DataTypes.STRING(1),
    Q17c: DataTypes.STRING(1),
    Q17d: DataTypes.STRING(1),
    Q18a: DataTypes.STRING(1),
    Q18b: DataTypes.STRING(1),
    Q18c: DataTypes.STRING(1),
    Q18d: DataTypes.STRING(1),
    Q19a: DataTypes.STRING(1),
    Q19b: DataTypes.STRING(1),
    Q19c: DataTypes.STRING(1),
    Q19d: DataTypes.STRING(1),
    Q19: DataTypes.STRING(1),
    Q20a: DataTypes.STRING(1),
    Q20b: DataTypes.STRING(1),
    Q20c: DataTypes.STRING(1),
    Q20d: DataTypes.STRING(1),
    Q21a: DataTypes.STRING(1),
    Q21b: DataTypes.STRING(1),
    Q21c: DataTypes.STRING(1),
    Q21d: DataTypes.STRING(1),
    NomeProfissionalAvaliacao:DataTypes.STRING,
    NumeroConselho: DataTypes.STRING,
    Profissao: DataTypes.STRING,
  }, {
      tablename: "BDItestes",
  });
  BDItestes.associate = function(models) {
    // associations can be defined here
  };
  return BDItestes;
};