
function main() {

    (function () {
        'use strict';

        // 키 다운 속도 + 버튼 클릭 href 적용
        document.querySelectorAll('.link-button').forEach(function(button) {
            button.addEventListener('click', function() {
                var href = button.getAttribute('data-href');
                if (href) {
                    var targetElement = document.querySelector(href);
                    if (targetElement) {
                        var targetOffset = targetElement.getBoundingClientRect().top;
                        var startPosition = window.pageYOffset;
                        var duration = 700; // 이동하는 데 걸리는 시간 (밀리초)

                        var startTime = null;
                        function scrollToElement(timestamp) {
                            if (!startTime) startTime = timestamp;
                            var progress = timestamp - startTime;
                            var percentage = Math.min(progress / duration, 1);
                            window.scrollTo(0, startPosition + targetOffset * percentage);
                            if (percentage < 1) {
                                requestAnimationFrame(scrollToElement);
                            }
                        }

                        requestAnimationFrame(scrollToElement);
                    }
                }
            });
        });



        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 50
                    }, 900);
                    return false;
                }
            }
        });


        // Show Menu on Book
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        });

        // document.addEventListener("DOMContentLoaded", function () {
        //     const button = document.querySelector(".sc-button");
        //     const contentDiv = document.querySelector(".content");
        //
        //     button.addEventListener("click", function () {
        //         contentDiv.classList.toggle("closed");
        //     });
        // });
        // Hide nav on click
        $(".navbar-nav li a").click(function (event) {
            // check if window is small enough so dropdown is created
            var toggle = $(".navbar-toggle").is(":visible");
            if (toggle) {
                $(".navbar-collapse").collapse('hide');
            }
        });

        // graph isotope filter
        $(window).load(function() {
            var $container = $('.graph-items');
            $container.isotope({
                filter: '*',
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            $('.cat a').click(function() {
                $('.cat .active').removeClass('active');
                $(this).addClass('active');
                var selector = $(this).attr('data-filter');
                $container.isotope({
                    filter: selector,
                    animationOptions: {
                        duration: 750,
                        easing: 'linear',
                        queue: false
                    }
                });
                return false;
            });

        });


        // Nivo Lightbox
        $('.graph-item a').nivoLightbox({
            effect: 'slideDown',
            keyboardNav: true,
        });

    }());

}
main();