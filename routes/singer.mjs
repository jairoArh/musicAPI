import express from 'express'

import {
  getAll,
  getById,
  save
} from './../controllers/controll-singer.mjs'

const routes = express.Router()

routes.get('/',getAll)
routes.get('/:id',getById)
routes.post('/',save)
routes.put('/:id')

export default routes