import mongoose from "mongoose"

const Schema = mongoose.Schema


const commentSchema = new Schema({
  content: String,
},{
  timestamps:true
})


const updateSchema = new Schema({
  content: String,
  comments: [commentSchema],
},{
  timestamps: true
})

const Update = mongoose.model('Update', updateSchema)

export {
  Update
}