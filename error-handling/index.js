module.exports = (app) => {

  app.use((err, req, res) => {
    err.status(404).json({ message: "this routes does not exist" })
  })


  app.use((err, req, res, next) => {


    if (err.name === 'ValidationError') {
      let errorMessages = Object.values(err.errors).map(el => el.message)
      res.status(400).json({ errorMessages })
    }

    if (err.code && err.code === 11000) {
      res.status(409).json({ errorMessages: ['El registro ya se encuentra en la base de datos'] })
    }

  })

};
