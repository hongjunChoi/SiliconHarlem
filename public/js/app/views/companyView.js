$(function () {
  var CompanyView = Backbone.View.extend({
    el: $('.listen-to'),
    events: {
      // TODO: Define events
      'click .company-link': 'redirect'
    },

    redirect: function (e) {
      // TODO: prevent default, get the id, and navigate to that course's url.
      e.preventDefault();
      var id = $(e.currentTarget).attr('data-id');
      window.courseRouter.navigate('/companies/' + id, {trigger: true});
    },

    render: function () {
      /* TODO: Query for all courses, parse courseModels
      with .toJSON, instantiate a new trie, and render
      the search bar. */

      // is a success callback necessary?
      window.companyCollection.fetch({
        success: function (options) {
          var showTemplate = $('#show-template').html();
          var domElement = Mustache.render(showTemplate, window.model.attributes);
          $(domElement).appendTo($('#show-course-container'));
        }
      });

    }
  });

  window.companyView = new CompanyView();
});
