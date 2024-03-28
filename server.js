import express from 'express'
import 'dotenv/config'
import { router } from './routes/cervejaria.js'
import sequelize from './database.js'
const app = express()

// try {
//     await sequelize.sync({force: true})
// } catch (erro) {
//     console.log(erro)
// }

app.use(express.json())
app.use(router)

app.listen(3000, () => console.log('Servidor iniciado'))