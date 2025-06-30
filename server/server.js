const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const playerRoutes = require('./routes/playerRoutes');
const blogRoutes = require('./routes/blogRoutes');
const contactRoutes = require('./routes/contactRoutes'); // ✅ NEW
require('./config/db'); // ✅ Connect to MySQL
const stadiumRoutes = require('./routes/stadiumRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// ✅ API Routes
app.use('/api/players', playerRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/contact', contactRoutes); // ✅ NEW
app.use('/api/stadiums', stadiumRoutes);

// ✅ Home Route
app.get('/', (req, res) => {
  res.send('✅ Cricket Blog API is Running!');
});

// ✅ Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
