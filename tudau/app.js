const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();
mongoose.connect(process.env.MONGO_URI);

const pageRoutes = require('./routes/pageRoutes');

const app = express();
const PORT = 3000;

// Kích hoạt public
app.use(express.static(path.join(__dirname, 'public')));

// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Sử dụng routes
app.use('/', pageRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`Server chạy tại http://localhost:${PORT}`);
});
// Kết nối MongoDB	
mongoose.connect(process.env.MONGO_URI, {	
  useNewUrlParser: true,	
  useUnifiedTopology: true	
}).then(() => console.log("✅ MongoDB connected"))	
  .catch(err => console.error("❌ MongoDB error:", err));