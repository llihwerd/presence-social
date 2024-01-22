import { Profile } from "../models/profile.js"
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
  deleteUpdate
}