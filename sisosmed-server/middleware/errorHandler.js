const errorHandler = (err, req, res, next) => {
  switch (err.name) {
    case "SequelizeValidationError":
      const validate = err.errors.map(el => {
        return el.message;
      })
      res.status(400).json({
        status: 'error',
        message: validate
      })
      break;
    case "notFound":
      res.status(404).json({
        status: 'error',
        message: 'not found!'
      })
      break;
    default:
      res.status(500).json({
        status: 'error',
        message: err
      })
      break;
  }
}

module.exports = errorHandler