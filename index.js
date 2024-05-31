const express = require('express');
const path = require('path');
const mysql = require('mysql2/promise');
// const bcrypt = require('bcrypt'); // Assuming you'll implement password hashing

const app = express();
const port = parseInt(process.env.PORT) || process.argv[3] || 8080;
const config = require('./config');

// Connect to MariaDB database
const connection = mysql.createPool({
  host: config.host || 'localhost',
  user: config.user || 'root',
  password: config.password || '',
  database: config.database || 'db_logreg'
});

app.use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs');

// Improved login route with password hashing (replace with your logic)
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const [rows] = await connection.query('SELECT * FROM users WHERE username = ?', [username]);
    const user = rows[0];

    if (!user) {
      return res.render('login', { error: 'Invalid username or password' });
    }

    // Hash password for comparison (assuming password is hashed in database)
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.render('login', { error: 'Invalid username or password' });
    }

    // Login successful (redirect or display success message)
    res.send('Login successful!');  // Replace with appropriate action
  } catch (error) {
    console.error(error);
    res.render('login', { error: 'An error occurred during login' });
  }
});

app.get('/', (req, res) => {
  res.render('login');
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
