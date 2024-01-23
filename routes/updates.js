import { Router } from 'express'
import * as updatesCtrl from '../controllers/updates.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


// POST localhost:3000/updates
router.post('/', isLoggedIn, updatesCtrl.create)


// GET http://localhost:3000/updates/:updateId
router.get('/:updateId', updatesCtrl.show)


// GET http://localhost:3000/updates/:updateId/edit
router.get('/:updateId/edit', isLoggedIn, updatesCtrl.edit)


// PUT http://localhost:3000/updates/:updateId
router.put('/:updateId', isLoggedIn, updatesCtrl.update)


// DELETE http://localhost:3000/updates/:updateId
router.delete('/:updateId', isLoggedIn, updatesCtrl.deleteUpdate)

// POST http://localhost:3000/updates/:updateId
router.post('/:updateId/comments', updatesCtrl.createComment)

export {
  router
}
