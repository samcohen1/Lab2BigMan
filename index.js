const path = require('path') // used later in the exercise
const express = require('express')
const app = express()

// keep the first 3 lines from before
const mainRouter = require('./mainRoutes')

app.use(mainRouter)

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
