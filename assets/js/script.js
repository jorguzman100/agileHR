
/*--------------------------------------------------------------
  # PWA - Progressive Web Application
--------------------------------------------------------------*/

// Register the service worker
window.addEventListener('load', e => {
  /* new PWAConfApp(); */
  registerSW();
});

async function registerSW() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('./sw.js');
    } catch (e) {
      alert('ServiceWorker registration failed. Sorry about that.');
    }
  } else {
    document.querySelector('.alert').removeAttribute('hidden');
  }
}




$(document).ready(() => {

  /*--------------------------------------------------------------
  # General
  --------------------------------------------------------------*/

  // Smooth Scroll Tutorial Using jQuery: https://www.youtube.com/watch?v=6Bd37vCHQ_U
  // Select all links with hashes
  const generalSmoothScroll = () => {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function (event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
          &&
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 80
            }, 1500, function () {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
  }


  // Back to top button
  const generalBackToTopBtn = () => {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        $('header').addClass('transparentHeader');
        $('header').removeClass('solidHeader');
      } else {
        $('.back-to-top').fadeOut('slow');
        $('header').addClass('solidHeader');
        $('header').removeClass('transparentHeader');
      }
    });

    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500);
      return false;
    });
  }

  // Animate On Scroll - events
  document.addEventListener('aos:in', ({ detail }) => {
    setTimeout(() => {
      if (document.getElementById('highImpactChart')) {
        displayHighImpactChart();
      }
    }, 2000);
  });

  // Ajax factory
  /* const runAjax = ({ url }, { type }, { data }, { successFunction }) => {
    $.ajax({
      url: url,
      type: type,
      data: data,
      success: (data) => {
        console.log('Ajax succeded');
        console.log('data: ', data)
        successFunction(data);
      },
      error: function (error) {
        console.log(error)
      },
    })
  } */


  /*--------------------------------------------------------------
  # Header
  --------------------------------------------------------------*/
  // Navbar Dropdown hover
  /* const headerDropdownHover = () => {
    $('.dropdown').hover(() => {
      $('.dropdown').addClass('show');
      $('.dropdown-menu').addClass('show');
    }, () => {
      $('.dropdown').removeClass('show');
      $('.dropdown-menu').removeClass('show');
    });
  } */

  // Change container attribute on toggle button click
  $('.navbar-toggler').on('click', () => {
    if ($('.navbar button').attr('aria-expanded') === 'false') {
      $('.navbar .container').attr('style', 'display:block');
    } else {
      $('.navbar .container').attr('style', 'display:flex');
    }
  });




  /*--------------------------------------------------------------
  # A high impact HR
  --------------------------------------------------------------*/

  // Create the High Impact HR Chart
  /* const displayHighImpactChart = () => {
    let ctx = document.getElementById('highImpactChart').getContext('2d');
    Chart.defaults.global.defaultFontSize = 20;
    Chart.defaults.global.defaultFontColor = 'rgba(55,81,126,1)';
    let chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'bar',

      // The data for our dataset
      data: {
        labels: ['Adapts to market 2.5x',
          'Creates products 2.4x',
          'Improves proceses 2x',
          'Lower costs 2x',
          'Wins market 1.4x',
          'Customer needs 1.3x'],
        datasets: [{
          label: 'Below average HR performance',
          backgroundColor: 'rgba(71, 178, 228, 0.2)',
          borderColor: 'rgba(71, 178, 228, .2)',
          borderWidth: 1,
          data: [29, 30, 40, 35, 65, 70]
        }, {
          label: 'Average  HR performance',
          backgroundColor: 'rgba(71, 178, 228, 0.5)',
          borderColor: 'rgba(71, 178, 228, 0.5)',
          borderWidth: 1,
          data: [60, 55, 65, 55, 70, 90]
        }, {
          label: 'High-Impact HR performance',
          backgroundColor: 'rgba(71, 178, 228, 1)',
          borderColor: 'rgba(71, 178, 228, 1)',
          borderWidth: 1,
          data: [85, 80, 90, 85, 95, 100]
        }]
      },

      // Configuration options go here
      options: {
        responsive: true,
        legend: {
          position: 'top',
        },
        title: {
          display: false,
          text: ''
        },
        tooltips: {
        },
        responsiveAnimationDuration: 2000,
      },

    });
    chart.canvas.parentNode.style.height = '300px';
    chart.canvas.parentNode.style.width = '100%';
  } */


  // Echart

  const displayHighImpactChart = () => {
    // based on prepared DOM, initialize echarts instance
    var myChart = echarts.init(document.getElementById('highImpactChart'));

    // specify chart configuration item and data
    var option = {
      legend: {},
      tooltip: {},
      color: ['rgba(71, 178, 228, 0.2)', 'rgba(71, 178, 228, 0.5)', 'rgba(71, 178, 228, 1)'],
      grid: {
        left: '10%',
        right: '10%',
        bottom: 100,
        height: 220,
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          rotate: 45,
        }
      },
      yAxis: {},
      series: [
        { type: 'bar' },
        { type: 'bar' },
        { type: 'bar' },
      ],
      dataset: {
        source: [
          ['HR Performance', 'Below average HR performance', 'Average HR performance', 'High-Impact HR performance'],
          ['Adapts to market', 30, 60, 85],
          ['New products', 30, 55, 80],
          ['Better processes', 40, 65, 90],
          ['Lower costs', 35, 55, 85],
          ['Wins compet.', 65, 70, 95],
          ['Customer needs', 70, 90, 100],
        ]
      },

      toolbox: {
        show: true,
        orient: 'vertical',
        feature: {
          dataZoom: {
            yAxisIndex: "none"
          },
          dataView: {
            readOnly: false
          },
          magicType: {
            type: ["line", "bar"]
          },
          restore: {},
          saveAsImage: {}
        }
      },

    };

    // use configuration item and data specified to show chart
    myChart.setOption(option);
  }



  /*--------------------------------------------------------------
  # Why agile HR
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # What we do
  --------------------------------------------------------------*/

  // Hide whatWeDo card image on hover
  const wwdHideCardImageHover = () => {
    $('.frontCard').hover((event) => {
      if ($(event.target).attr('class') === 'card text-white behindCard') {
        $($($(event.target).prev('.card-body')[0]).children()[0]).hide(200);
      } else if ($(event.target).attr('class') === 'emptyDiv mb-0'
        || $(event.target).attr('class') === 'card-body mt-0'
        || $(event.target).attr('class') === 'card-footer text-muted text-center'
      ) {
        $($($(event.target).parent().prev('.card-body')[0]).children()[0]).hide(200);
      } else if ($(event.target).is('li')) {
        console.log('li detected');
        $($($(event.target).parent().parent().parent().prev('.card-body')[0]).children()[0]).hide(200);
      } else {
        $($($(event.target).parent().parent().prev('.card-body')[0]).children()[0]).hide(200);
      }
    }, () => {
      $('.frontCard img').show(500);
    });
  }


  /*--------------------------------------------------------------
  # How we do it
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # Call to action
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # Why us
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # About us
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # Contact
  --------------------------------------------------------------*/

  const displaySuccessAlert = (alertName) => {
    $("#name").val('');
    $("#email").val('');
    $("#mobile").val('');
    $("#subject").val('');
    $("#message").val('');
    $('.validate').fadeOut(500);
    $(alertName).fadeIn(1500);
    setTimeout(() => {
      $(alertName).fadeOut(1500);
    }, 5000);
  }

  // Validate the input fields
  $("#name").on('input', () => {
    if ($("#name").val().length < 3) {
      $("#name").next().fadeIn(1500);
    } else {
      $("#name").next().fadeOut(500);
    }
  });
  $("#email").on('input', () => {
    if ($("#email").val().length < 3) {
      $("#email").next().fadeIn(1500);
    } else {
      $("#email").next().fadeOut(500);
    }
  });
  $("#subject").on('input', () => {
    if ($("#subject").val().length < 8) {
      $("#subject").next().fadeIn(1500);
    } else {
      $("#subject").next().fadeOut(500);
    }
  });
  $("#message").on('input', () => {
    if ($("#message").val().length < 3) {
      $("#message").next().fadeIn(1500);
    } else {
      $("#message").next().fadeOut(500);
    }
  });

  const validateInputFields = () => {
    let allValid = true;

    if ($("#name").val().length < 3) {
      $("#name").next().fadeIn(1500);
      allValid = false;
    }
    if ($("#email").val().length < 3) {
      $("#email").next().fadeIn(1500);
      allValid = false;
    }
    if ($("#subject").val().length < 8) {
      $("#subject").next().fadeIn(1500);
      allValid = false;
    }
    if ($("#message").val().length < 3) {
      $("#message").next().fadeIn(1500);
      allValid = false;
    }

    if (allValid === false) {
      $('.alert-danger').fadeIn(1500);
      setTimeout(() => {
        $('.alert-danger').fadeOut(500);
      }, 5000);
    } else {
      return allValid
    }
  }

  // Send the message

  // EmailJS option
  // Source: Send Email directly from JavaScript
  // https://www.youtube.com/watch?v=x7Ewtay0Q78
  const sendEmail = (data) => {
    emailjs.send('service_b5di5q9', 'contact_form', data)
      .then((res) => {
        displaySuccessAlert('#formSuccessAlert');
      }, (error) => {
        console.log('EmailJS error');
        console.log(error);
      });
  }


  $('#submitMessageBtn').on('click', () => {
    let allImputsValid = validateInputFields();
    if (allImputsValid) {

      // Smtp option / EmailJS option
      let data = {
        "name": $("#name").val(),
        "email": $("#email").val(),
        "mobile": $("#mobile").val(),
        "subject": $("#subject").val(),
        "message": $("#message").val(),
      }
      sendEmail(data);

      // Ajax option
      /* runAjax(
        { url: '/api/clients' },
        { type: 'POST' },
        {
          data: {
            "name": $("#name").val(),
            "email": $("#email").val(),
            "subject": $("#subject").val(),
            "message": $("#message").val(),
          }
        },
        { successFunction: displaySuccessAlert }
      ); */
    }
  });


  /*--------------------------------------------------------------
  # Newsletter
  --------------------------------------------------------------*/

  const displayNewsletterSuccessAlert = () => {
    $("#newsSubscribeInput").val('');
    $("#newsSubscribeInput").parent().siblings('.validate').fadeOut(500);
    $('#newsSubscribeInput').parent().siblings('.alert-success').fadeIn(1500);
    setTimeout(() => {
      $('#newsSubscribeInput').parent().siblings('.alert-success').fadeOut(1500);
    }, 5000);
  }

  // Validate the newsletter input field
  $("#newsSubscribeInput").on('input', () => {
    if ($("#newsSubscribeInput").val().length < 3) {
      $("#newsSubscribeInput").parent().siblings('.validate').fadeIn(1500);
    } else {
      $("#newsSubscribeInput").parent().siblings('.validate').fadeOut(500);
    }
  });

  // EmailJS option
  // Source: Send Email directly from JavaScript
  // https://www.youtube.com/watch?v=x7Ewtay0Q78
  const sendNewsletterEmail = (data) => {
    emailjs.send('service_b5di5q9', 'newsletter_form', data)
      .then((res) => {
        displayNewsletterSuccessAlert();
      }, (error) => {
        console.log('EmailJS error');
        console.log(error);
      });
  }

  // Send the newsletter email
  $('#newsSubscribeBtn').on('click', () => {
    if ($("#newsSubscribeInput").val().length < 3) {
      $("#newsSubscribeInput").parent().siblings('.validate').fadeIn(1500);
    } else {
      // EmailJS option
      let data = {
        "email": $("#newsSubscribeInput").val(),
      }
      sendNewsletterEmail(data);

      // Ajax option
      /* runAjax(
        { url: '/api/newsLetterEmails' },
        { type: 'POST' },
        {
          data: {
            "email": $("#newsSubscribeInput").val(),
          }
        },
        { successFunction: displayNewsletterSuccessAlert }
      ); */
    }
  });


  /*--------------------------------------------------------------
  # Footer
  --------------------------------------------------------------*/

  /*--------------------------------------------------------------
  # Init
  --------------------------------------------------------------*/
  const init = () => {
    $('.alert-success').fadeOut();
    $('.alert-danger').fadeOut();
    $('.validate').fadeOut();
    generalSmoothScroll();
    generalBackToTopBtn();
    /* headerDropdownHover(); */
    wwdHideCardImageHover();

    // EmailJS
    emailjs.init("user_bI7greHlerPybmnk4Vcam");
  }

  init();
});
