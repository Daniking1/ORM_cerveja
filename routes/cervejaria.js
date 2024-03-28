import express from "express"
import { adicionarCerveja, listarNome, editarCerveja, deletarCerveja, listarId, listarPais, listarTipo} from '../controllers/cervejaria.js'
const router = express.Router()

router.post('/cervejas', adicionarCerveja)
router.get('/cervejas', listarNome)
router.put('/cervejas/:id', editarCerveja)
router.delete('/cervejas/:id', deletarCerveja)
router.get('/cervejas/:id', listarId)
router.get('/nacionalidade/:pais', listarPais)
router.get('/tipo/:tipo', listarTipo)

export { router }