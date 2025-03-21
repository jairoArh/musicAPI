import express from 'express'

import {
  getAll,
  save
} from './../controllers/controll-song.mjs'

const routes = express.Router()

routes.get('/',getAll)
routes.post('/:id',save)

export default routes