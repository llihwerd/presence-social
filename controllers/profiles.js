import { Profile } from "../models/profile.js"
import { Update } from "../models/update.js"


function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles,
      title: 'People'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}





function show(req, res) {
  Profile.findById(req.params.profileId)
  .populate('posts')
  .then(profile => {
    Update.find({_id: {$nin: profile.posts}})
    .then(updates => {
      res.render('profiles/show', {
        profile: profile,
        updates: updates,
        title: 'person'
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



export {
  index,
  show,
}