var ui = (function() {

    function initDatePicker() {
        // Rewritten to a reusable method which reduces duplication of code - you should now just need to
        // use the same data-role/data-field references on any copy of the form and it'll work

        $("[data-role='form-wrapper']").each(function() {
            var currentFormWrapper = $(this);
            var entryDate = currentFormWrapper.find("[data-field='entry-date']");

            entryDate.datepicker({
                dateFormat: 'dd/mm/yy',
                beforeShow: function(textbox, instance) {
                    if ($(window).width() < 767 && entryDate.parents(".form").length) {
                        $('#ui-datepicker-div').wrap("<div class='datepicker-wrapper show'></div>");
                    }
                },
                onClose: function(textbox, instance) { 
                    if ($(window).width() < 767 && entryDate.parents(".form").length) {
                        // Fading out here so as to not clash with the datepicker fadeout animation
                        $('.datepicker-wrapper').fadeOut('fast', function() {
                            $('#ui-datepicker-div').unwrap();
                        });
                    }
                },
                minDate: 0
            });


            // Not sure if this is needed. Was on the glasgow form
            // function validateParkingForm() {
            //     if (entryDate.val() === null || entryDate.val() === '') {
            //         return false;
            //     }
            //     return true;
            // } 


        });

    }

    // function initFastClick() {
    //     FastClick.attach(document.body);
    // }

    function initSlider() {
        $('.slider').slick();
    }

    function initClickBox() {
        // makes entire 'div'/section clickable to the first link within
        $(".clickBox").click(function() {
            window.location = $(this).find("a").attr("href");
        });
    }

    /*Custom Select Dropdown*/
    function initCustomSelect() {

        $('.selectbox').select2({
            minimumResultsForSearch: Infinity,
            width: "100%"
        });
        // $('.custom-select').select2({
        //     closeOnSelect: true
        // });
    }

    function initVideoHeroPopUp() {
        var playButton = $('.hero__play');
        var closeIcon = $('[data-modal="videoHeroClose"]');

        playButton.click(function() {
            var videoPlaceholder = $(this).closest('.hero').next().find('[data-role="youtube-video-placeholder"]');

            // Add the inline iframe when the play button is clicked
            videoPlaceholder.html('<iframe width="100%" height="100%" ' + 'src="https://www.youtube.com/embed/' + videoPlaceholder.attr('data-youtube-video-id') + '?autoplay=1" ' + 'frameborder = "0" allow = "autoplay; encrypted-media" allowfullscreen ></iframe>');
        });

        // remove the inline iframe when the close icon is clicked
        closeIcon.click(function() {
            var videoPlaceholder = $(this).closest('.modal--video').find('[data-role="youtube-video-placeholder"]');
            videoPlaceholder.html('');
        });
    }

    function initLazyLoading(){
        $('.lazy').lazy();
    }

    (function initAll() {
      // initFastClick();  // this possibly breaks the select and datepicker on iOS devices, uncomment if this is the case
        initClickBox();
        initCustomSelect();
        initDatePicker();
        initVideoHeroPopUp();
        initLazyLoading();
        initSlider();

        $(window).resize(function() {

        }).resize();

    })();

    // return {

    // }
})();