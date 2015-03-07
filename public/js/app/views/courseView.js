$(function () {
  var CourseView = Backbone.View.extend({
    el: $('#show-course-container'),
    events: {
      // TODO: define the events.
      'click #submit': 'submitReview',
      'click .save': 'updateReview',
      'click .update': 'changeToUpdate',
      'click .delete': 'deleteReview'
    },

    deleteReview: function (e) {
      // TODO: delete the review.
      //console.log(e.target);
      var reviewId = $(e.target).parent().attr('id');
      var url = '/courses/' + window.model.id + '/reviews/' + reviewId;
      // get review id of a collection instead of creating a new reviewModel
      var reviewCollection = window.model.reviews;
      reviewCollection.get(reviewId).url = url;
      reviewCollection.get(reviewId).destroy();
      this.render();
    },

    updateReview: function (e) {
      // TODO: update the review
      var reviewId = $(e.target).parent().attr('id');
      var url = '/courses/' + window.model.id + '/reviews/' + reviewId;
      var inputText = $('.new-text').val();
      console.log(inputText);
      var reviewCollection = window.model.reviews;
      var reviewModel = reviewCollection.get(reviewId);
      reviewModel.url = url;
      //reviewModel.text = inputText;
      console.log(reviewModel);
      reviewModel.save({
        text: inputText
      }, {
        success: function () {
          this.render();
        }.bind(this)
      });
    },

    changeToUpdate: function (e) {
      /* TODO: delete the input, update, and delete fields, and
      render the review-update-template with Mustache. */
      var parent = $(e.target).parent();
      var reviewId = $(e.target).parent().attr('id');
      var previousText = $(parent).children('.review-text').text();
      $(parent).empty();
      var reviewUpdateTemplate = $('#review-update-template').html();
      var domElement = Mustache.render(reviewUpdateTemplate, {text: previousText});
      var targetId = '#' + reviewId;
      $(domElement).appendTo($(targetId));
      //$(parent).removeClass('update');
      //$(parent).remove('.delete');
      //$(parent).remove('.review-text');
      //this.render();
    },

    createReview: function (text) {
      // TODO: create a new review
      //console.log(window.model.id);
      var url = '/courses/' + window.model.id + '/reviews/';
      var reviewModel = new window.Review(url);
      reviewModel.save({
        'text': text
      });
      this.render();
    },

    submitReview: function (e) {
      /* TODO: prevent default, save the new review, and
      clear the textarea. */
      e.preventDefault();
      var text = $('#review-textarea').val();
      this.createReview(text);
      $('#review-textarea').empty();
    },

    readReviews: function () {
      // TODO: get all reviews, parse them with toJSON, and display them
      var reviewCollection = window.model.reviews;
      reviewCollection.fetch({
        success: function (options) {
          //console.log(options);
          var json = options.toJSON();
          //console.log(json);
          //console.log(json);
          var reviewTemplate = $('#review-template').html();
          //console.log(reviewTemplate);
          var renderedReviewTemplate;
          for (var i = 0; i < json.length; i++) {
            renderedReviewTemplate = Mustache.render(reviewTemplate, json[i]);
            $(renderedReviewTemplate).appendTo($('#reviews-container'));
          }
          //console.log($('#show-course-container').html());
        }
      });
    },

    render: function () {
      // TODO: display the course's info and reviews
      $('#show-course-container').empty();
      var showTemplate = $('#show-template').html();
      var domElement = Mustache.render(showTemplate, window.model.attributes);
      $(domElement).appendTo($('#show-course-container'));
      this.readReviews();
    }
  });

  window.courseView = new CourseView();
});
