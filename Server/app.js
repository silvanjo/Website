const express = require('express');

const port = 3000;
const vueBuildPath = __dirname + "/../Blog/dist/"

const app = express()

app.use(express.static(vueBuildPath))

app.get('/', (req, res) => {
    res.sendFile(vueBuildPath)
})

app.get('/api/data', (req, res) => {
    const data = {
      message: 'Hello from the server!'
    }
    res.json(data)
})

// Define your routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})