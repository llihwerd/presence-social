import { Profile } from "../models/profile.js"


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
  .then(profile => {
    res.render('profiles/show', {
      profile: profile,
      title: 'Person',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}



export {
  index,
  show
}