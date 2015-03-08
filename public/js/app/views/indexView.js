$(function () {
  var IndexView = Backbone.View.extend({
    el: $('.listen-to'),
    events: {
      // no events
    },

    redirect: function (e) {
      // TODO: prevent default, get the id, and navigate to that course's url.
      e.preventDefault();
      var id = $(e.currentTarget).attr('data-id'); // need to update to reflect html file
      window.courseRouter.navigate('/companies/' + id, {trigger: true});
    },

    renderSideBar: function() {
      var searchTemplate = $('#search-template').html();
      var domElement = Mustache.render(searchTemplate);
      $(domElement).appendTo($('#search-container'));
    },

    render: function () {
      /* TODO: Query for all courses, parse courseModels
      with .toJSON, instantiate a new trie, and render
      the search bar. */

      // is a success callback necessary?
      window.companyCollection.fetch({
        success: function (options) {
          console.log(options.toJSON());
          this.renderSideBar();
        }
      });

    }
  });

  window.indexView = new IndexView();
});