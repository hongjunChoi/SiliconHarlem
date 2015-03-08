$(function () {
  var Company = Backbone.Model.extend({
    // TODO: set the idAttribute and constructor
    idAttribute: '_id',
    initialize: function (url) {
      this.url = url;
    }
  });

  window.Company = Company;
});
