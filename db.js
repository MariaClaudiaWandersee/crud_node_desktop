const Sequelize = require('sequelize'); //para utilizar as dependencias sequelize

const componenteSequelize = new Sequelize('dbProduto','root','',
{
    dialect:'mysql', host:'localhost'
});

//exportando a função/objeto como um módulo. Utilizado para incluir o arquivo js.
module.exports = componenteSequelize;