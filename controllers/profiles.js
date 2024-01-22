import { Movie } from "../models/movie.js"
import { Performer } from "../models/performer.js"

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie'
  })
}

function create(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Movie.create(req.body)
  .then(movie => {
    res.redirect(`/movies/${movie._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies/new')
  })
}

// async function otherCreate(req, res) {
//   try {
//     req.body.nowShowing = !!req.body.nowShowing
//     const movie = await Movie.create(req.body)
//     res.redirect('/movies/new')
//   } catch (error) {
//     console.log(error)
//     res.redirect('/movies/new')
//   }
// }

function index(req, res) {
  Movie.find({})
  .then(movies => {
    res.render('movies/index', {
      movies: movies,
      title: 'All Movies'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Movie.findById(req.params.movieId)
  .populate('cast')
  .then(movie => {
    Performer.find({_id: {$nin: movie.cast}})
    .then(performers => {
      res.render('movies/show', {
        movie: movie,
        title: 'Movie Detail',
        performers: performers
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function deleteMovie(req, res) {
  Movie.findByIdAndDelete(req.params.movieId)
  .then(movie => {
    res.redirect('/movies')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function edit(req, res) {
  Movie.findById(req.params.movieId)
  .then(movie => {
    res.render('movies/edit', {
      movie: movie,
      title: 'Edit Movie'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function update(req, res) {
  req.body.nowShowing = !!req.body.nowShowing
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  Movie.findByIdAndUpdate(req.params.movieId, req.body, {new: true})
  .then(movie => {
    res.redirect(`/movies/${movie._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function createReview(req, res) {
  Movie.findById(req.params.movieId)
  .then(movie => {
    movie.reviews.push(req.body)
    movie.save()
    .then(() => {
      res.redirect(`/movies/${req.params.movieId}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/movies')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

function addToCast(req, res) {
  Movie.findById(req.params.movieId)
  .then(movie => {
    movie.cast.push(req.body.performerId)
    movie.save()
    .then(() => {
      res.redirect(`/movies/${movie._id}`)
    })
    .catch(err => {
      console.log(err)
      res.redirect('/movies')
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/movies')
  })
}

export {
  newMovie as new,
  create,
  index,
  show,
  deleteMovie as delete,
  edit,
  update,
  createReview,
  addToCast
}