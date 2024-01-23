import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET http://localhost:3000/profiles
router.get('/', profilesCtrl.index)

// GET http://localhost:3000/profiles/:profileId
router.get('/:profileId', profilesCtrl.show)

// GET http://localhost:3000/profiles/:profileId/edit
router.get('/:profileId/edit', isLoggedIn, profilesCtrl.edit)

// PUT http://localhost:3000/profiles/:profileId
router.put('/:profileId', isLoggedIn, profilesCtrl.update)




export {
  router
}
