const { addComment, fetchAllComments } = require('../../services/comments');

exports.getAllComments = async (req, res) => {
  try {
    const { query } = req;
    const { comments } = await fetchAllComments(query);
    if (comments.length < 1) {
      return res
        .status(404)
        .json({ message: 'No comments found in database!' });
    }
    return res.status(200).json(comments);
  } catch (error) {
    return res.status(500).json({
      messege: 'Something went wrong, when trying to fetch comments!',
      error
    });
  }
};

exports.addComment = async (req, res) => {
  try {
    const { comment, movieTitle } = req.body;
    const result = await addComment(comment, movieTitle);
    return res
      .status(201)
      .json({ messege: 'Comment has been added successfuly!', result });
  } catch (error) {
    return res
      .status(400)
      .json({ messege: 'Bad request! Could not find movie title', error });
  }
};
