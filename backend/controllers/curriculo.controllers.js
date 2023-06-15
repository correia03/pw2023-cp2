import { curriculoModel } from '../models/curriculo.model.js';
 

export const salvar = async (req, res) =>{
    const {nome, idade, curso} = req.body;
    //alterar os dados de um nome ja existem-te
    const curriculo = await curriculoModel.findOne({
        where: {
            id: 1,
        },
    });
    if(curriculo){
        curriculo.nome = nome;
        curriculo.idade = idade;
        curriculo.curso = curso;
        await curriculo.save();
        return res.json(curriculo);
    }else{
        //criar dados
        const curriculo = await curriculoModel.create({
            nome: nome,
            idade: idade,
            curso: curso,
        });
        return res.json(curriculo);

    }
};
//obter dados
export const obter = async (a,res) =>{
    const curriculo = await curriculoModel.findOne({
        where: {
            id: 1,
        },
    });
    return res.json(curriculo);
}
//deletar dados 