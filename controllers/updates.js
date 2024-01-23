import { Update } from "../models/update.js"


function create(req, res) {
  req.body.owner = req.user.profile._id
  Update.create(req.body)
  .then(update => {
      res.redirect(`/profiles/${req.user.profile._id}`)
    })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}






function show(req, res) {
  Update.findById(req.params.updateId)
  .populate('owner')
  .populate('comments')
  .then(update => {
    res.render('updates/show', {
      update: update,
      title: 'Update',
      user: req.user
      })
    })
    .catch(err => {
      console.log(err)
      res.redirect('/')
    })
  }

  




function edit(req, res) {
  Update.findById(req.params.updateId)
  .then(update => {
    res.render('updates/edit', {
      update: update,
      title: 'Edit Update'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



function update(req, res) {
  Update.findByIdAndUpdate(req.params.updateId, req.body, {new: true})
  .then(update => {
    res.redirect(`/updates/${update._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



function deleteUpdate(req, res) {
  Update.findByIdAndDelete(req.params.updateId)
  .then(update => {
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



export {
  create,
  show,
  edit,
  update,
  deleteUpdate
}