import {Bebida} from '../models/Cervejaria.js'

const adicionarCerveja = async (req, res) => {
    try {
        const { nome, abv, tipo, nacionalidade } = req.body
        if (!nome || !abv || !tipo || !nacionalidade) return res.status(404).send({ mensagem: 'Informações incompletas' })
        const cervejaAdicionada = await Bebida.create({ nome, abv, tipo, nacionalidade })
        res.status(201).send({ cervejaAdicionada })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao adicionar uma nova cerveja' })
    }
}

const listarNome = async (req, res) => {
    try {
        const cervejas = await Bebida.findAll()
        res.status(200).send({ cervejas })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}

const editarCerveja = async (req, res) => {
    try {
        const { id } = req.params
        const { nome, abv, tipo, nacionalidade } = req.body
        const cervejaAtualizada = await Bebida.update({ nome, abv, tipo, nacionalidade }, { where: { id } })
        res.status(200).send({ cervejaAtualizada })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao atualizar dado' })
    }
}

const deletarCerveja = async (req, res) => {
    try {
        const { id } = req.params
        await Bebida.destroy({ where: { id } })
        res.status(200).send({ mensagem: 'Cerveja excluida'})
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao apagar dado' })
    }
}

const listarId = async (req, res) => {
    try {
        const { id } = req.params
        const cervejas = await Bebida.findOne({ where: {id: id}})
        res.status(200).send({ cervejas })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}

const listarPais = async (req, res) => {
    try {
        const { pais } = req.params
        const cervejas = await Bebida.findAll({ where: {nacionalidade: pais}})
        res.status(200).send({ cervejas })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}

const listarTipo = async (req, res) => {
    try {
        const { tipo } = req.params
        const cervejas = await Bebida.findAll({ where: {tipo: tipo}})
        res.status(200).send({ cervejas })
    } catch (erro) {
        console.log(erro)
        res.status(404).send({ mensagem: 'Erro ao buscar dados' })
    }
}
// const listarNomes = (req, res) => {
//     let nome = [req.params.nome]
//     database.query('SELECT * FROM cervejas WHERE nome=$1', nome).then((resultado) => {
//         res.status(200).send({ cervejas: resultado.rows })
//     }, () => {
//         res.status(500).send({ status: 'Erro de database' })
//     })
// }

// const listarNacionalidades = (req, res) => {
//     let nacionalidade = [req.params.nacionalidade]
//     database.query('SELECT * FROM cervejas WHERE nacionalidade=$1', nacionalidade).then((resultado) => {
//         res.status(200).send({ cervejas: resultado.rows })
//     }, () => {
//         res.status(500).send({ status: 'Erro de database' })
//     })
// }

// const ordenarMaiorAbv = (req, res) => {
//     let abv = req.params.abv
//     database.query('SELECT * FROM cervejas ORDER BY abv DESC', abv).then((resultado) => {
//         res.status(200).send({ cervejas: resultado.rows })
//     }, () => {
//         res.status(500).send({ status: 'Erro de database' })
//     })
// }

// const listarTipos = (req, res) => {
//     let tipo = [req.params.tipo]
//     database.query('SELECT * FROM cervejas WHERE tipo=$1', tipo).then((resultado) => {
//         res.status(200).send({ cervejas: resultado.rows })
//     }, () => {
//         res.status(500).send({ status: 'Erro de database' })
//     })
// }

// const listarNomesParciais = (req, res) => {
//     let nome = req.params.nome
//     nome = nome + '%'

//     database.query('SELECT * FROM cervejas WHERE nome ILIKE $1', [nome]).then((resultado) => {
//         res.status(200).send({ cervejas: resultado.rows })
//     }, () => {
//         res.status(500).send({ status: 'Erro de database' })
//     })
// }

export { adicionarCerveja, listarNome, editarCerveja, deletarCerveja, listarId, listarPais, listarTipo}