(function($) {

  // Cache DOM
  var $doc = $(document),
    $closeBtn = $doc.find('.modal__close');

  // Bind Events
  $('.modal__trigger').on('click', function(evt) {

    // Modal variables of clicked modal trigger
    var $actionBtn = $(this),
      $modalBg = $actionBtn.closest('.modal').find('.modal__bg'),
      $popup = $actionBtn.closest('.modal').find('.modal__popup');

    // Open modal associated with the modal trigger that was clicked
    openModal();

    // Custom functions
    function openModal() {
      $modalBg.addClass('modal__bg--is-visible');
      $popup.addClass('modal__popup--is-visible');
    }

    function closeModal() {
      $modalBg.removeClass('modal__bg--is-visible');
      $popup.removeClass('modal__popup--is-visible');
      return false;
    }

    // Bind Events for current modal
    $closeBtn.on('click', closeModal);

    $doc.on('keyup', function(evt) {
      // keyCode 27 is the "esc" key
      if (evt.keyCode === 27) {
        closeModal();
      }
    });

    // Prevent default action of modal trigger link
    evt.preventDefault();

  });

})(jQuery);