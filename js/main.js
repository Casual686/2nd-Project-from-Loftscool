$(document).ready(function(){


//slider
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        items:1,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3000,
        smartSpeed : 1000,
        navText: [ '', '' ]
    });

//vertical accordion
    $( function() {
        $( "#accordion" ).accordion({
          collapsible: true
        });
      } );

//horizontal accordion
$(function(){
	$('.burg-menu').on('click' , function (e) {

    var target = $(event.target),
        link = target.parent(),
        items = $('.burg-menu__item');

    if (link.hasClass('burg-menu__link')) {
    	e.preventDefault();

    	var item = link.parent();

      	if (!item.hasClass('burg-menu__item_active')) {
        	items.removeClass('burg-menu__item_active');
      		item.addClass('burg-menu__item_active');

        } else {
        	item.removeClass('burg-menu__item_active');
        }

    } else {
      items.removeClass('burg-menu__item_active');
    }
	});
});


//fullPage
$(function () {
    //one page initializate
        $('.maincontent').fullpage({
            verticalCentered : false,
            anchors: ['firstPage',
                            'secondPage',
                            'thirdPage',
                            'fourthPage',
                            'fifthPage',
                            'sixthPage',
                            'seventhPage',
                            'eighthPage'],
            menu: '#fixedMenu'
        });

    //buttons
        $('.navigation__link, .page-down__link, .burgers__order_triger, .aside-navigation__link').on('click', function(e) {
            e.preventDefault();

            var $this = $(this),
                    href = parseInt($this.attr('href'));

                    $.fn.fullpage.moveTo(href);
        });
});

//modal windows
$(function () {
    $('.review__text_button').fancybox({
        type : 'inline',
        maxWidth : 460,
        fitToView : false,
        closeBtn   : false,
        padding : 0
    });

    $('.fancybox-close').on('click' , function (e) {
        e.preventDefault();

        $.fancybox.close();
    });

});

//input mask
    jQuery(function($){
       $("#phone").mask("+7(999) 999-99-99");
    });


//form submit
    $(function () {
        var pattEmpty = new RegExp('([^\\s*]+)'),
            pattNumber = new RegExp('^[0-9]+$'),
            pattStreet = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9\\s.-]+$'),
            pattName = new RegExp('^[а-яА-ЯёЁa-zA-Z0-9][а-яА-ЯёЁa-zA-Z0-9-_\.]{5,20}$'),

            //            /--------валидация---------\
            formVal = function(form) {
                    //     /---------проверяем данные-------\
                var checkresult = true,
                    checkData = function(elem) {
                            switch ($(elem).attr('name')) {
                                case 'name' :
                                    return checkName(elem);
                                break;
                                case 'adresse' :
                                    return checkStreet(elem);
                                break;
                                case 'home, block, flat, floor' :
                                    return checkNumber(elem);
                                break;

                                default:
                                        return checkEmpty(elem);

                            }
                        },
            //              /---------Check for empty fields-------\
                        checkEmpty = function (elem) {
                            if (!pattEmpty.test(elem.value)) {
                                showErrorEmpty(elem);
                                return false;
                            } else {
                                return true;
                            }
                        },
            //              /---------Check name-------\
                        checkName = function (elem) {
                            if (!pattEmpty.test(elem.value)) {
                                showErrorEmpty(elem);
                                return false;
                            } else if (!pattName.test(elem.value)) {
                                showError(elem);
                                return false;
                            } else {
                                return true;
                            }
                        },
            //              /---------Check street-------\
                        checkStreet = function (elem) {
                            if (!pattEmpty.test(elem.value)) {
                                showErrorEmpty(elem);
                                return false;
                            } else if (!pattStreet.test(elem.value)) {
                                showError(elem);
                                return false;
                            } else {
                                return true;
                            }
                        },
            //              /---------Check number-------\
                        checkNumber = function (elem) {
                            if (!pattEmpty.test(elem.value)) {
                                showErrorEmpty(elem);
                                return false;
                            } else if (!pattNumber.test(elem.value)) {
                                showError(elem);
                                return false;
                            } else {
                                return true;
                            }
                        },
                        //     /---------выводим ошибку-------\
                        showErrorEmpty = function(elem) {
                            $(elem).qtip({
                                content: {
                                    text: $(elem).attr('data-error')
                                    },
                                show: {
                                    event: event.type, // Use the same show event as the one that triggered the event handler
                                    ready: true // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                                },
                                hide: {
                                    target: $(".form__elem, .form__elem_btn, input[type='reset']")
                                },
                                position: {
                                    my: 'top center',
                                    at: 'center center'
                                },
                                style: {
                                    classes: 'qtip-dark qtip-shadow'
                                }
                            })
                        },
                        showError = function(elem) {
                            $(elem).qtip({
                                content: {
                                    text: $(elem).attr('data-incorrect')
                                    },
                                show: {
                                    event: event.type, // Use the same show event as the one that triggered the event handler
                                    ready: true // Show the tooltip as soon as it's bound, vital so it shows up the first time you hover!
                                },
                                hide: {
                                    target: $('.form__elem, .form__elem_btn')
                                },
                                position: {
                                    my: 'top center',
                                    at: 'center center'
                                },
                                style: {
                                    classes: 'qtip-dark qtip-shadow'
                                }
                            })
                        },
                        //     /---------отправляем данные-------\
                        sendData = function(form) {
                            var name = $('input[name=name]').val();
                                phone = $('input[name=phone]').val(),
                                adresse = $('input[name=adresse]').val();
                                home = $('input[name=home]').val();
                                block = $('input[name=block]').val();
                                flat = $('input[name=flat]').val();
                                floor = $('input[name=floor]').val();


                            $.ajax({
                                url: form.attr('action'),
                                method: 'POST',
                                data: {
                                    name: name,
                                    phone: phone,
                                    adresse: adresse,
                                    home: home,
                                    block: block,
                                    flat: flat,
                                    floor: floor

                                }

                            }).done(function (data){
                                var jsoned = JSON.parse(data);
                                console.log(jsoned);
            //                             /----------modal window----------------\
                                $.fancybox.open({
                                    src  : '#modal-form',
                                    type : 'inline',
                                });

                                $('form')[0].reset();
                            });
                        };
                return {
                                //          /----------принимаем форму----------------\
                    sub : function(elem) {
                        var data = elem.find('input');
                        $.each(data, function(i, val) {
                            if (checkData(val) == false) {
                                checkresult = false;

                            }
                        });
                        if (checkresult == true) {
                            $.each($('.qtip'), function (i, val) {
                                $(this).hide();

                            });
                            sendData(elem);
                            return true;
                        }
                    }
                }
            };

        $('form').on('submit', function(e){
            e.preventDefault();
            formVal().sub($(this));
        });

    });

//          /----------yandex map----------------\
    $(function () {
            ymaps.ready(init);
            var myMap;

            function init(){
                myMap = new ymaps.Map("map", {
                center: [55.752290310390435,37.62027151908032],
                zoom: 13

                });

                var objCoord = [
                    [55.73068636330877,37.61362486273355],
                    [55.74046862254388,37.62701445013592],
                    [55.75575885484138,37.61457893914796]
                ];

                var myPlacemark = new ymaps.GeoObjectCollection (null, {
                        iconLayout: 'default#image',
                        iconImageClipRect: [[0, 0], [0, 0]],
                        iconImageHref: 'img/icons/map-marker.svg',
                        iconImageSize: [46, 57.727]
                    });
                for (var i = 0; i < objCoord.length; i++) {
                    myPlacemark.add(new ymaps.Placemark(objCoord[i]));
                }
                myMap.geoObjects.add(myPlacemark);
                myMap.behaviors.disable('scrollZoom');
            }
    });



});
