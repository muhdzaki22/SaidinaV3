$(document).ready(function(){

    $('.nvs_tgl').click(function () {
      $('body').toggleClass('menu-open');
      console.log('jalan');
    });


    //Add Toogle
    $( "<div class='sub_tog'><i class='bi bi-chevron-down'></i></div>" ).insertAfter( ".main_nav ul > li.menu-item-has-children > a" );
    $(document).on('click','.sub_tog',function(){
        $('.sub_tog').not(this).next().removeClass('show');
        $(this).next().toggleClass('show');
    });

    //loader
    $('#page').show();
    $('.loader').hide();

    $('.hero_slider').owlCarousel({
        loop:false,
        margin:11,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    })

    $('.story_slider').owlCarousel({
        loop:false,
        margin:11,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:4,
                margin:6
            },
            600:{
                items:4
            },
            1000:{
                items:8
            }
        }
    })

    $('.private_slider').owlCarousel({
        loop:false,
        margin:15,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2,
                margin:6
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    })



    $('.gallery_slide .gallery').addClass( 'owl-carousel' );
    $('.gallery_slide .gallery').owlCarousel({
        loop:false,
        margin:11,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1,
                margin:6
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })


    $('.tour_slider').owlCarousel({
        loop:false,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:1,
                nav:false
            },
            1000:{
                items:1,
                nav:false,
                loop:false
            }
        }
    })

    //Why Decrant Slider
      var owl = $('.svr_list');
      owl.owlCarousel({
        margin: 11,
        loop: false,
        dots: false,
        responsive: {
          0: {
            items: 2,
            margin: 11
          },
          600: {
            items: 2,
            margin: 11
          },
          1000: {
            items: 4,
            margin: 20
          }
        }
      })

    //Running Post
    $('.rn_post ul').infiniteslide({
      // up/down/left/right
      'direction': 'left',
      'speed': 30,
      'responsive': true,
      'clone': 1
    });

});

