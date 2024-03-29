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
    Update.find({ owner: profile })
    .then(updates => {
      res.render('profiles/show', {
        profile: profile,
        updates: updates,
        title: `${profile.name}'s Presence`
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



function edit(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('profiles/edit', {
      profile: profile,
      title: 'Edit Profile'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



function update(req, res) {
  Profile.findByIdAndUpdate(req.params.profileId, req.body, {new: true})
  .then(profile => {
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}



export {
  index,
  show,
  edit,
  update,
}


