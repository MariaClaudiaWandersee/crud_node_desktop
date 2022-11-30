(async() =>
{
    const database = require('./db');
    const produto = require('./produto');

    await database.sync();
    
    //adicionando dados aos campos criados
    await produto.create(
        {
            Nome:"Primeiro teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome:"Segundo teste",
            DataCriacao: Date()
        }
    )
    await produto.create(
        {
            Nome:"Terceiro teste",
            DataCriacao: Date()
        }
    )


    //Altera registro com id 2
    const alterProd = await produto.findByPk(2);
    alterProd.Nome = "Arquivo Alterado";
    await alterProd.save();
    
    //Exclui registro onde o Id é 1
    produto.destroy({where : {id: 1 }});
    
    //Seleciona o registro de num. 3
    const findProd = await produto.findByPk(3);
    console.log(findProd); //para mostrar em tela
    
    //Seleciona todos os produtos
    const findAllProd = await produto.findAll();
    console.log(findAllProd);//para mostrar em tela

})();