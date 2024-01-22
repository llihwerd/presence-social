import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'

const router = Router()

// GET http://localhost:3000/movies
router.get('/', profilesCtrl.index)

// GET http://localhost:3000/movies/:movieId
router.get('/:profileId', profilesCtrl.show)




export {
  router
}
