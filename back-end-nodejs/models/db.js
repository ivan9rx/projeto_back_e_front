const Sequelize = require("sequelize");
const sequelize = new Sequelize("celke", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log("conexao com banco de dados realizada");
//   })
//   .catch(() => {
//     console.log("conexao com banco de dados não realizada");
//   });

module.exports = sequelize;
