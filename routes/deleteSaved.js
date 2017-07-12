// Require our savedArticle and comment models
var SavedArticle = require('../models/article');

module.exports = function(req, res) {

  // Remove saved article
  SavedArticle
    .remove({_id: req.params.id})
    .exec(function(err,data) {
      if (err) {
      // console.log(err);
      res.json({status: 'error'})
    } else {
      res.json({status: 'deleted'})
    }
  })
}