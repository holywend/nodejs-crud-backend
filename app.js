const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 3100;
const envConfig = require('dotenv').config({path: './.env'});
const frontend = envConfig.parsed.ALLOWED_FRONTEND_URL

console.log(frontend);
// allow CORS from port:3000
app.use(cors({
  origin: frontend // Allow requests from this origin
}));


// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

// Require user routes
const usersRoutes = require('./src/routes/users.route');
const registrationRoutes = require('./src/routes/registration.route');
const authRoutes = require('./src/routes/auth.route');
const employeesRoutes = require('./src/routes/employees.route');

// // using as middleware
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/registration', registrationRoutes);
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/employees', employeesRoutes);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

