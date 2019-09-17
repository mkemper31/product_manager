const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema({
    title: { type: String, minlength: [4, 'Product name must be at least 4 characters long'] },
    price: { type: Number, required: [true, 'Price must be entered'], min: [0, "Price may not be negative"] },
    image_url: { type: String, default: '', },
}, {timestamps: true });
mongoose.model('Product', ProductSchema);
