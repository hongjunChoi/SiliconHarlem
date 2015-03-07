$(function () {
  var Review = Backbone.Model.extend({
    // TODO: Set the idAttribute and constructor
    idAttribute: '_id',
    initialize: function (url) {
      this.url = url;
    }
  });
  window.Review = Review;
});
