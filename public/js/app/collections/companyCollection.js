$(function () {
  var CompanyCollection = Backbone.Collection.extend({
    // TODO: Set the model and the url.
    model: Company,
    url: '/companies'
  });

  window.companyCollection = new CompanyCollection();
});
