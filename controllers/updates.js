import { Update } from "../models/update.js"



function create(req, res) {
  Update.create(req.body)
  .then(update => {
      res.redirect(`profiles`)
    })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles`)
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
  Update.findByIdAndUpdate(req.params.updateId)
  .then(update => {
    res.render('updates/edit', {
      update: update,
      title: 'Edit Update'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles/show')
  })
}



function deleteUpdate(req, res) {
  Update.findByIdAndDelete(req.params.updateId)
  .then(update => {
    res.redirect('/profiles/show')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles/show')
  })
}



export {
  create,
  show,
  edit,
  deleteUpdate
}