const { AddComment, FetchAllComments } = require('../../services/comments');

exports.GetAllComments = async (req, res, next) => {
  try {

  }
  catch (error) {
    
  }
} 


exports.AddComment = async (req, res, next) => {
  try {
    const { comment, IMDbID } = req.body;
    const result = await AddComment(IMDbID, comment);
    return res.status(201).json({ messege: 'Comment has been added successfuly!', result });
  }
  catch (error) {
    return res.status(500).json({ messege: 'Comment has been added successfuly!', result });
  }
}

