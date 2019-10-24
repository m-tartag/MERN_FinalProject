const express = require('express');
const chalk = require('chalk');
const connectDB = require('./config/db');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Init Middleware (Built-in Body Parser)
app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('API Connected');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.blue.inverse(`Server Connected @ Port: ${PORT}`));
});
