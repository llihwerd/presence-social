import { Router } from 'express'
import * as updatesCtrl from '../controllers/updates.js'

const router = Router()


// POST localhost:3000/updates
router.post('/', updatesCtrl.create)

// DELETE http://localhost:3000/updates/:updateId
router.delete('/:updateId', updatesCtrl.deleteUpdate)

// GET http://localhost:3000/updates/:updateId
router.get('/:updateId', updatesCtrl.show)

// GET http://localhost:3000/updates/:updateId/edit
router.get('/:updateId', updatesCtrl.edit)

export {
  router
}
