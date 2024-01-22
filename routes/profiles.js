import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET http://localhost:3000/profiles
router.get('/', profilesCtrl.index)

// GET http://localhost:3000/profiles/:profileId
router.get('/:profileId', profilesCtrl.show)

// DELETE http://localhost:3000/profiles/:profileId
router.delete('/:updateId', profilesCtrl.deleteUpdate)





export {
  router
}
