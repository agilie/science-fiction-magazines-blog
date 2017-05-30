
(function() {
    "use strict";

    var toggles = document.querySelectorAll(".hamburger-menu");

    for (var i = toggles.length - 1; i >= 0; i--) {
        var toggle = toggles[i];
        toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
        toggle.addEventListener( "click", function(e) {
            e.preventDefault();
            (this.classList.contains("active") === true) ? this.classList.remove("active") &&  $('.menu-overlay').fadeToggle( 'slow', 'linear' ) && $('.menu .menu-list').fadeToggle( 'slow', 'linear' ) : this.classList.add("active");
            $('.menu-overlay').fadeToggle( 'slow', 'linear' );
            $('.menu .menu-list').fadeToggle( 'slow', 'linear' );
        });
    }

    $(".cut-this").dotdotdot({
        ellipsis	: '... ',
        wrap		: 'word'
    });

})();