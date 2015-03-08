$(function () {
  var CompanyView = Backbone.View.extend({
    el: $('#info_column'),
    events: {
      // TODO: Define events
      'click .list-group-item': 'redirect'
    },

    redirect: function (e) {
      // TODO: prevent default, get the id, and navigate to that course's url.
      e.preventDefault();
      console.log($(e.currentTarget));
      var id = $(e.currentTarget).attr('data-id');
      //window.companyRouter.navigate('/companies/' + id, {trigger: true});
    },

    render: function () {
      /*window.companyCollection.fetch({
        success: function (options) {
          var showTemplate = $('#show-template').html();
          var domElement = Mustache.render(showTemplate, window.model.attributes);
          $(domElement).appendTo($('#show-course-container'));
        }
      }); */
      console.log('rerouted');
    }
  });

  window.companyView = new CompanyView();
});
