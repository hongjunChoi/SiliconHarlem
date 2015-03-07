$(function () {
  var SearchView = Backbone.View.extend({
    el: $('.listen-to'),
    events: {
      // TODO: Define events
      'keyup #search': 'autocomplete',
      'click .course-link': 'redirect'
    },

    redirect: function (e) {
      // TODO: prevent default, get the id, and navigate to that course's url.
      e.preventDefault();
      var id = $(e.currentTarget).attr('data-id');
      window.courseRouter.navigate('/courses/' + id, {trigger: true});
    },

    autocomplete: function () {
      // TODO: Get the letters typed, put them into trie's getSuggestions, and display them.
      $('#suggestion-container').empty();
      var text = $('#search').val();
      var suggestions = window.searchView.trie.getSuggestions(text);
      //var object = {suggestions: suggestions};
      var suggestionTemplate = $('#suggestion-template').html();
      //var domElement = Mustache.render(suggestionTemplate, object);
      var domElement;
      for (var i = 0; i < suggestions.length; i++) {
        domElement = Mustache.render(suggestionTemplate, suggestions[i]);
        $(domElement).appendTo($('#suggestion-container'));
      }
      //$(domElement).appendTo($('#suggestion-container'));
    },

    renderSearchBar: function () {
      // TODO: Empty the search container and the suggestion container and render the search bar.
      $('#search-container').empty();
      $('#suggestion-container').empty();
      var searchTemplate = $('#search-template').html();
      var domElement = Mustache.render(searchTemplate);
      $(domElement).appendTo($('#search-container'));
    },

    render: function () {
      /* TODO: Query for all courses, parse courseModels
      with .toJSON, instantiate a new trie, and render
      the search bar. */

      // is a success callback necessary?
      window.courseCollection.fetch({
        success: function (options) {
          window.searchView.trie = new Trie(options.toJSON());
          window.searchView.renderSearchBar();
        }
      });

    }
  });

  window.searchView = new SearchView();
});
