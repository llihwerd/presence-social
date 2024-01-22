import { Router } from 'express'
import * as updatesCtrl from '../controllers/updates.js'

const router = Router()


// POST localhost:3000/updates
router.post('/', updatesCtrl.create)


// GET http://localhost:3000/updates/:updateId
router.get('/:updateId', updatesCtrl.show)

// GET http://localhost:3000/updates/:updateId/edit
router.get('/:updateId/edit', updatesCtrl.edit)

// PUT http://localhost:3000/updates/:updateId
router.put('/:movieId', moviesCtrl.update)

// DELETE http://localhost:3000/updates/:updateId
router.delete('/:updateId', updatesCtrl.deleteUpdate)

export {
  router
}
