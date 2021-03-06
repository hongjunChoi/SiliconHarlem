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
      var id = $(e.currentTarget).attr('id');
      window.companyRouter.navigate('/companies/' + id, {trigger: true});
    },
    render: function () {
      //console.log($(.list-group-item));
      $('.company-list').remove();
      $('.list-group-item').remove();
      /*window.companyCollection.fetch({
        success: function (options) {
          var showTemplate = $('#show-template').html();
          var domElement = Mustache.render(showTemplate, window.model.attributes);
          $(domElement).appendTo($('#show-course-container'));
        }
      }); */
      $( "#info_column" ).append( "<button style='margin-top:-780px' id='signin'  onclick='back()' type='button' class='btn btn-success'>Back</button>" );
      var attr = window.model.attributes;
      var data = {
        name: attr.name,
        description: attr.description,
        website: attr.contact.website
      };
      console.log(data); 
      var companyTemplate = $('#company-template').html();
      var domElement = Mustache.render(companyTemplate, data);
      $(domElement).appendTo($('#company-container'));
    }
  });

  window.companyView = new CompanyView();
});

  function back() {
    $("#info_column").empty();
    $( "#info_column" ).append("<strong><center><p class='company-list'>Company List</p><center></strong>");
    $( "#info_column" ).append("<div id='company-container' style='padding-left:50px'> </div>   <ul class='list-group' style = 'width : 500px'></ul>");
    window.companyRouter.navigate('/', {trigger: true});
    /*window.companyCollection.fetch({
      success: function (options) {
        var json = options.toJSON();
        var button;
        for (var i = 0; i < json.length; i++) {
          button = '<button id=' + json[i]._id + ' class="list-group-item" style = "width:100px; margin-left:250px">' + json[i].name + '</button>';
          $('#info_column ul').append(button);
        }
        //this.renderSideBar();
      }
    }); */
  };

  function createCompany() {
      //var url = '/companies/' + window.model.id;
      var url = '/companies/submit';
      var companyModel = new window.Company(url);
      var name = $('#companyName').val();
      var description = $('#description').val();
      var contact = $('#contact').val();
      var website = $('#website').val();
      var latitude = $('#latitude').val();
      var longitude = $('#longitude').val();
      var data = {
        name: name,
        description: description,
        address: {
          street: "",
          city: "",
          state: "",
          zip: "",
          latitude: latitude,
          longitude: longitude
        },
        contact: {
          website: website,
          email: contact
        }
      }
      companyModel.save(data); // sends post request 
      $("#map-canvas").empty();
      console.log('=============================');
      $.getScript('../../../../map.js', function()
      {
          // script is now loaded and executed.
          // put your dependent JS here.
          console.log("asdfasf");
          alert("your data is successfully updated.");
      });
    }