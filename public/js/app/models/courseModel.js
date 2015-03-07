$(function () {
  var Course = Backbone.Model.extend({
    // TODO: set the idAttribute and constructor
    idAttribute: '_id',
    initialize: function () {
      this.reviews = new ReviewCollection();
      var url = '/courses/' + this.id + '/reviews/';
      this.reviews.url = url;
    }
  });

  window.Course = Course;
});
