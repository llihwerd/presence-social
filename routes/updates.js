import { Router } from 'express'
import * as updatesCtrl from '../controllers/updates.js'

const router = Router()


// POST localhost:3000/performers
router.post('/', updatesCtrl.create)

export {
  router
}