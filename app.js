const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 3000;

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Require user routes
const usersRoutes = require('./src/routes/users.route');
const authRoutes = require('./src/routes/authenticate.route');

// using as middleware
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/auth', authRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

