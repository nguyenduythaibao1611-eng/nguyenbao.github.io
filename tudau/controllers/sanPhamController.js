const Product = require('../models/sanPhamModel');
const { slide } = require('../models/productModel');

exports.getHomePage = async (req, res) => {
    try {
        const newProducts = await Product.find({ type: "new" });
        const topProducts = await Product.find({ type: "top" });

        res.render('layout', {
            newProducts,
            topProducts,
            slide
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Error loading products');
    }
}