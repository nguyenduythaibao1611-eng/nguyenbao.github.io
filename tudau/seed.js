// Chạy 1 lần để nạp sản phẩm mẫu vào MongoDB:  node seed.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const Product = require('./models/sanPhamModel');
const { newProducts, topProducts } = require('./models/productModel');

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        await Product.deleteMany({});
        await Product.insertMany([
            ...newProducts.map(p => ({ ...p, type: 'new' })),
            ...topProducts.map(p => ({ ...p, type: 'top' }))
        ]);
        console.log('✅ Đã nạp', newProducts.length + topProducts.length, 'sản phẩm');
    } catch (e) {
        console.error('❌ Lỗi seed:', e.message);
    } finally {
        await mongoose.disconnect();
    }
})();