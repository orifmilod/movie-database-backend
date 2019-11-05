const Comment = require('../models/comment');

async function FetchAllComments ()  {
  const comments = await Comment.find();
  return { comments };
}

async function AddComment (comment, IMDbID)  {
  const newComment = new Comment({ 
    _id : mongoose.Types.ObjectId(), 
    comment,
    movieID: IMDbID
  });
  const data = await newComment.save();
  return data;
}

module.exports = { AddComment, FetchAllComments }