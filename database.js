import { Sequelize } from 'sequelize'

const sequelize = new Sequelize(process.env.BANCO_DE_DADOS)

try {
    await sequelize.authenticate()
    console.log('Conectado com sucesso')
} catch (erro) {
    console.log(erro)
}

export default sequelize