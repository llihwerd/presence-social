import mongoose from "mongoose"

const Schema = mongoose.Schema


const commentSchema = new Schema({
  content: String,
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
},{
  timestamps:true
})


const updateSchema = new Schema({
  content: String,
  comments: [commentSchema],
  owner: { type: Schema.Types.ObjectId, ref: 'Profile' },
},{
  timestamps: true
})

const Update = mongoose.model('Update', updateSchema)

export {
  Update
}


