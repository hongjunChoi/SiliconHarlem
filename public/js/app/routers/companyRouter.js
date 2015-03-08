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
      window.companyCollection.fetch({
        success: function (options) {
          window.model = window.companyCollection.get(id);
          window.companyView.render();
        }.bind(this)
      });
    }
  });

  window.companyRouter = new CompanyRouter();
  Backbone.history.start({pushState: true});
});
