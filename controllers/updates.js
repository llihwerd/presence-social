import { Update } from "../models/update.js"


function create(req, res) {
  if (!req.user) {
    console.log('User not authenticated')
    return res.redirect('/auth/login')
  }

  const updateData = {
    ...req.body,
    owner: req.user._id
  }

  Update.create(updateData)
  .then(update => {
      res.redirect(`/profiles/${req.user._id}`)
    })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user._id}`)
  })
}






function show(req, res) {
  Update.findById(req.params.updateId)
  .then(update => {
    res.render('updates/show', {
      update: update,
      title: 'update'
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
    res.redirect(`/profiles/${req.user._id}`)
  })
}



function update(req, res) {
  Update.findByIdAndUpdate(req.params.updateId, req.body, {new: true})
  .then(update => {
    res.redirect(`/updates/${update._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user._id}`)
  })
}



function deleteUpdate(req, res) {
  Update.findByIdAndDelete(req.params.updateId)
  .then(update => {
    res.redirect(`/profiles/${req.user._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user._id}`)
  })
}



export {
  create,
  show,
  edit,
  update,
  deleteUpdate
}