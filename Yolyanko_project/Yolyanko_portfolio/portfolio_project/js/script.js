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


    // Expand and collapse text.

    
      $(function(){
      var animspeed = 950; // animation speed in milliseconds
      
      var $blockquote = $('.bigtext');
      var height = $blockquote.height();
      var mini = $('.bigtext p').eq(0).height() + $('.bigtext p').eq(1).height() + $('.bigtext p').eq(2).height() + $('.bigtext p').eq(2).height();
      
      $blockquote.attr('data-fullheight',height+'px');
      $blockquote.attr('data-miniheight',mini+'px');
      $blockquote.css('height',mini+'px');

      
      $('.expand').on('click', function(e){
        $text = $(this).prev();
        
        $text.animate({
          'height': $text.attr('data-fullheight')
        }, animspeed);
        $(this).next('.contract').removeClass('hide');
        $(this).addClass('hide');
      });
      
      $('.contract').on('click', function(e){
        $text = $(this).prev().prev();
        
        $text.animate({
          'height': $text.attr('data-miniheight')
        }, animspeed);
        $(this).prev('.expand').removeClass('hide');
        $(this).addClass('hide');
      });

    });





  
    // $("#basicModal").on("show", function () {
    //     $("#section1").css('position', 'fixed');
    //   });

      
    //   $(body).css({
    //     height: (document.body.scrollTop + window.innerHeight) + 'px',
    //     overflow: 'hidden'
    //   });
    //     //$("#section1").addClass("modal-open");
    // }).on("hidden", function () {
    //   $(body).css({
    //     height: 'auto',
    //     overflow: 'auto'
    //   });
    //     $("#section1").removeClass("modal-open")
    // });
  
  
   