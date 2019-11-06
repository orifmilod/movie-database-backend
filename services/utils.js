// Implement pagination
function paginate({ page = 1, limit = 10 }) {
  console.log('Paginating', limit);
  if (!page || !limit) {
    return this;
  }
  let skip = 0;

  limit = parseInt(limit);
  page = parseInt(page);

  if (page > 1) {
    skip = limit * (page - 1);
  }

  return this.limit(limit).skip(skip);
}

module.exports = paginate;
