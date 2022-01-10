"use strict";

class ProductController {
  async upload({ request, response }) {
    try {
      if (request.file("image")) {
        let cloudinary_response = await Cloudinary.upload(
          request.file("image")
        );
        return response.json(cloudinary_response);
      }

      return response.json({ status: false, data: "Please upload an Image." });
    } catch (error) {
      return response.status(500).json({ status: false, error: error.message });
    }
  }
}

module.exports = ProductController;
