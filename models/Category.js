const mongoose = require("mongoose");
const slugify = require("slugify");

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },

});

CategorySchema.pre("validate", function (next) {
  this.slug = slugify(this.name, {
    lower: true,
    stirct: true,
  });
  next();
});

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
