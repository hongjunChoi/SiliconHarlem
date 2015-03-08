$(function () {
  var CompanyCollection = Backbone.Collection.extend({
    // TODO: Set the model and the url.
    model: Company,
    url: '/'
  });

  window.companyCollection = new CompanyCollection();
});
