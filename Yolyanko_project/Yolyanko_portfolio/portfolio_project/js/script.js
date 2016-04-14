$(document).ready(function(){
  // Show image on modal
    $('.materialboxed').materialbox();
  });
          
          $(function () {
            // Slideshow 4
            $("#slider4").responsiveSlides({
              auto: false,
              pager: false,
              nav: true,
              speed: 500,
              namespace: "callbacks",
              before: function () {
                $('.events').append("<li>before event fired.</li>");
              },
              after: function () {
                $('.events').append("<li>after event fired.</li>");
              }
            });
          });
        $('#basicModal').on('shown.bs.modal', function () {
      $('#myInput').focus()
    })
     
    // Jump to different section when link is clicked.
    $(function() {
        
        $(".button").on("click", function( e ) {
            
            e.preventDefault();
        
            $("body, html").animate({ 
                scrollTop: $( $(this).attr('href') ).offset().top 
            }, 600);
            
        });
            
    });


// Collapsible navbar hides on click
    $(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});




  
   