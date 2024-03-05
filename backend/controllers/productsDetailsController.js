const { product } = require("../db"); // Import your product model
const validator = require("validator");

// Controller for fetching all products
const productsDetailsController = async (req, res) => {
  try {
    const products = await product.find(); // Fetch all products from the database
    res.json({products}); // Send products as JSON response
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" }); // Handle database errors
  }
};

// Controller for creating a new product
const productsController = async (req, res) => {
  try {
    // Destructure data from request body
    const {
      name,
      price,
      brandName,
      description,
      starrating,
      size,
      stock,
      categories,
      imageUrl,
    } = req.body;

    // Basic validation (consider a robust validation library for production)
    if (!name || !price || !categories || !imageUrl) {
      return res.status(400).json({
        error: "Please provide name, price, categories, and imageUrl",
      });
    }

    if (!validator.isURL(imageUrl)) {
      return res
        .status(400)
        .json({ error: "Please provide a valid image URL" });
    }

    // Create a new product object
    const newProduct = new product({
      name,
      price,
      brandName,
      description,
      starrating,
      size,
      stock,
      categories,
      imageUrl,
    });

    // Save the product to the database
    const savedProduct = await newProduct.save();

    // Send the saved product as a response with 201 (Created) status code
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create product" }); // Handle errors
  }
};

const productsEdit = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  try {
    // Find the document by id and update it with the values provided in the request body
    const updateProduct = await product.findOneAndUpdate(
      { _id: id }, // Filter by id
      updates, // Apply updates from request body
      {
        new: true, // Return the updated document
        runValidators: true, // Ensure the update respects schema validations
      }
    );

    if (!updateInstructor) {
      return res.status(404).json({ message: "Product Not Found" });
    }

    res.json({
      message: "Products Updated Successfully",
      data: updateInstructor,
    });
  } catch (error) {
    // Handle possible errors, such as validation errors or MongoDB operation errors
    res
      .status(400)
      .json({ message: "Error updating Product", error: error.message });
  }
};

module.exports = {
  productsDetailsController,
  productsController,
  productsEdit,
};
