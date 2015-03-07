$(function () {
  var ReviewCollection = Backbone.Collection.extend({
    // TODO: Set the model.
    model: Review
  });

  window.ReviewCollection = ReviewCollection;
});
