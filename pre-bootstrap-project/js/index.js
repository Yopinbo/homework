
function init() {
    window.addEventListener('scroll', function(e){
        var distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 250,
            header = document.querySelector("#header");
        if (distanceY > shrinkOn) {
            $("#header").addClass("smaller");
        } else {
            if ($("#header").hasClass("smaller")) {
                $("#header").removeClass("smaller");
            }
        }
    });
}
window.onload = init();

// $(".project").click(function() {
//   window.location = $(this).find("a").attr("href");
//   return false;
// });

// $(function() {
//   $('#main').smoothState({ debug: true });
// });

// (function ($) {
//   'use strict';

//   var content  = $('#main').smoothState({

//         // onStart runs as soon as link has been activated
//         onStart : {

//           // Set the duration of our animation
//           duration: 250,

//           // Alterations to the page
//           render: function () {

//             // Quickly toggles a class and restarts css animations
//             content.toggleAnimationClass('is-exiting');
//           }
//         },

//     onReady: {
//         duration: 0,
//         // `$container` is a `jQuery Object` of the the current smoothState container
//         // `$newContent` is a `jQuery Object` of the HTML that should replace the existing container's HTML.
//         render: function ($container, $newContent) {
//           // Update the HTML on the page

//           $container.html($newContent);
//         }
//       }
//       }).data('smoothState'); // makes public methods available
// })(jQuery);

