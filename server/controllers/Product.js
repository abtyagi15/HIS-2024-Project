exports.getAllProducts = async (req, res) => {
    const products = await Product.find().populate("user", "firstName lastName email");
    return res.json({
        success: true,
        products,
    });
};

exports.createDonation = async (req, res) => {
    const { contactNo, category, imageUrl, price, latitude, longitude } = req.body;
    const product = new Product({
        user: req.user._id,
        contactNo,
        category,
        imageUrl,
        price,
        latitude,
        longitude,
    });
    await product.save();
    return res.json({
        success: true,
        message: "Donation created successfully",
    });
}