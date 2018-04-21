var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },

  link: {
    type: String,
    required: true
  },

  saved: {
    type: Boolean, 
    required: false,
    default: false
  }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
