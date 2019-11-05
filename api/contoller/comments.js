const { AddComment, FetchAllComments } = require('../../services/comments');

exports.GetAllComments = async (req, res, next) => {
  try {
    const comments = await FetchAllComments();
    if(!comments) {
      return res.status(404).json({ message: 'No comments found in database!' });
    }
    return res.status(200).json(comments);
  }
  catch (error) {
    return res.status(500).json({ messege: 'Something went wrong when fetching comments!', error });
  }
} 


exports.AddComment = async (req, res, next) => {
  try {
    const { comment, movieTitle } = req.body;
    const result = await AddComment(comment, movieTitle);
    return res.status(201).json({ messege: 'Comment has been added successfuly!', result });
  }
  catch (error) {
    return res.status(500).json({ messege: 'Something went wrong when adding comment!', error });
  }
}

