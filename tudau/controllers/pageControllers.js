const { newProducts, topProducts, slide } = require('../models/productModel');

exports.home = (req, res) => {
    res.render('index', { newProducts, topProducts, slide });
}
exports.about = (req, res) => {
    res.render('about')
}
exports.contact = (req, res) => {
    res.render('contact')
}