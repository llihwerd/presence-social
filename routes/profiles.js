import { Router } from 'express'
import * as moviesCtrl from '../controllers/movies.js'

const router = Router()

// GET http://localhost:3000/movies
router.get('/', moviesCtrl.index)
// GET http://localhost:3000/movies/new
router.get('/new', moviesCtrl.new)
// GET http://localhost:3000/movies/:movieId
router.get('/:movieId', moviesCtrl.show)
// GET http://localhost:3000/movies/:movieId/edit
router.get('/:movieId/edit', moviesCtrl.edit)
// POST http://localhost:3000/movies
router.post('/', moviesCtrl.create)
// POST http://localhost:3000/movies/:movieId/reviews
router.post('/:movieId/reviews', moviesCtrl.createReview)
// POST http://localhost:3000/movies/:movieId/performers
router.post('/:movieId/performers', moviesCtrl.addToCast)
// DELETE http://localhost:3000/movies/:movieId
router.delete('/:movieId', moviesCtrl.delete)
// PUT http://localhost:3000/movies/:movieId
router.put('/:movieId', moviesCtrl.update)

export {
  router
}
