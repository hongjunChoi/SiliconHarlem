$(function () {
  var CompanyRouter = Backbone.Router.extend({
    routes: {
      '': 'index',
      'companies/:id': 'getCompany'
      // TODO: Set routes
    },

    index: function () {
     // TODO: Render searchView - should only be one line
     //var view = new SearchView();
     window.indexView.render();
    },

    getCompany: function (id) {
      /* TODO: Render searchView, query for all courses,
      add them to the collection, set window.model to course
      with specific id, and render courseView */
      /*window.companyView.render();
      window.courseCollection.fetch({
        success: function (options) {
          window.courseCollection.add(options);
          window.model = window.courseCollection.get(id);
          window.courseView.render();
        }.bind(this)
      });*/
    }
  });

  window.companyRouter = new CompanyRouter();
  Backbone.history.start({pushState: true});
});
