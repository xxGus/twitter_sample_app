$(function() {

  // updateRemainingChars();

  // $('textarea#micropost-text').on('keydown', function() {
  //   updateRemainingChars();
  // });

  // function updateRemainingChars() {
  //   chars = document.getElementById('micropost-text').value.length;
  //   $('span#character-count').text("Remaining: " + (140 - chars).toString());
  // }

  $("span#character-count").each(function() {
      var $this = $(this);
      var maxLength = parseInt($this.attr('maxlength'));
      $this.attr('maxlength', null);
      
      var el = $("<span class=\"character-count\">" + maxLength + "</span>");
      el.insertAfter($this);
      
      $this.bind('keyup', function() {
          var cc = $this.val().length;
          
          el.text(maxLength - cc);
          
          if(maxLength < cc) {
              el.css('color', 'red');
          } else {
              el.css('color', null);
          }
      });
  });


});