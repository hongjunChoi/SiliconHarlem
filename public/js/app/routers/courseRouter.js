$(function () {
  var CourseRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'courses/:id': 'getCourse'
      // TODO: Set routes
    },

    index: function () {
     // TODO: Render searchView - should only be one line
     //var view = new SearchView();
     window.searchView.render();
    },

    getCourse: function (id) {
      /* TODO: Render searchView, query for all courses,
      add them to the collection, set window.model to course
      with specific id, and render courseView */
      window.searchView.render();
      window.courseCollection.fetch({
        success: function (options) {
          window.courseCollection.add(options);
          window.model = window.courseCollection.get(id);
          window.courseView.render();
        }.bind(this)
      });
    }
  });

  window.courseRouter = new CourseRouter();
  Backbone.history.start({pushState: true});
});
