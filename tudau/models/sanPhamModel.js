const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        default: null
    },
    tag: {
        type: String,
        default: null
    }, 
    type: {
        type: String,
        enum: ['new', 'top'],
        required: true
    }
})
const slide = [
  { image: "banner1.jpg" },
  { image: "banner2.jpg" },
  { image: "banner3.jpg" },
  { image: "banner4.jpg" },
];
module.exports = mongoose.model('Product', productSchema);