$(function () {
  var CourseCollection = Backbone.Collection.extend({
    // TODO: Set the model and the url.
    model: Course,
    url: '/courses'
  });

  window.courseCollection = new CourseCollection();
});
