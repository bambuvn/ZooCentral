"use strict";

$(document).ready(function () {
  events();
});

function events() {
  $("a.homePage").click(function () {
    $("#ticket-content").addClass('d-none');
    $("div.zs-slideshow").css('z-index', '2');
    $(".shadow-inner-content").removeClass("d-none");
    $(".header-event").addClass("d-none");
    $("title").text("Zoo Central");
    $("#bd-content").empty();
    $("#content-home").removeClass('d-none');
    scollToTop();
    return false;
  });
  $("a.about").click(function () {
    $("#bd-content").load("./modules/about.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '2');
      $(".shadow-inner-content").removeClass("d-none");
      $(".header-event").addClass("d-none");
      $("title").text("About - Zoo Central");
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.tickets").click(function () {
    $("#ticket-content").removeClass('d-none');
    $("#bd-content").addClass('d-none');
    $("#content-home").addClass('d-none');
    $("div.zs-slideshow").css('z-index', '-999');
    $(".shadow-inner-content").addClass("d-none");
    $(".header-event").removeClass("d-none");
    $("title").text("Tickets - Zoo Central");
    $("#image-header").attr("src", "images/ticket/header.png");
    $("#iconHeader").attr({
      'data-src': 'images/ico/ticket-icon.png',
      'src': 'images/ico/ticket-icon.png'
    });
    $('#iconHeader img').attr('src', 'images/ico/ticket-icon.png');
    $(".header-content #title").text("Tickets");
    $(".header-content #date").html('Wildly fun events at the Central Florida Zoo');
    $(".header-content #times").html('');
    $(".header-content #address").html('');
    scollToTop();
    return false;
  });
  $("a.event").click(function () {
    $("#bd-content").load("./modules/events/event.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Events - Zoo Central");
      $("#image-header").attr("src", "images/event/ev-header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/events.png',
        'src': 'images/ico/events.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/events.png');
      $(".header-content #title").text("EVENTS");
      $(".header-content #date").html('Wildly fun events at the Central Florida Zoo');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.event1").click(function () {
    $("#bd-content").load("./modules/events/event1.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Sunset at the Zoo, presented by GrayRobinson - Zoo Central");
      $("#image-header").attr("src", "images/event/sunset-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/events.png',
        'src': 'images/ico/events.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/events.png');
      $(".header-content #title").text("Sunset at the Zoo, presented by GrayRobinson");
      $(".header-content #date").html('<i class="fa fa-calendar" aria-hidden="true"></i> August 20, 2020');
      $(".header-content #times").html('<i class="fa fa-clock-o" aria-hidden="true"></i> 5:30 pm - 9:00 pm');
      $(".header-content #address").html('<i class="fa fa-map-marker" aria-hidden="true"></i> 3755 W. Seminole Blvd, Sanford, FL 32771');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.event2").click(function () {
    $("#bd-content").load("./modules/events/event2.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Family Sunset at the Zoo - Zoo Central");
      $("#image-header").attr("src", "images/event/20072419-scaled.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/events.png',
        'src': 'images/ico/events.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/events.png');
      $(".header-content #title").text("Family Sunset at the Zoo");
      $(".header-content #date").html('<i class="fa fa-calendar" aria-hidden="true"></i> August 28, 2020');
      $(".header-content #times").html('<i class="fa fa-clock-o" aria-hidden="true"></i>  5:30 pm - 8:00 pm');
      $(".header-content #address").html('<i class="fa fa-map-marker" aria-hidden="true"></i> 3755 W. Seminole Blvd, Sanford, FL 32771');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.event3").click(function () {
    $("#bd-content").load("./modules/events/event3.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Sunset at the Zoo, presented by GrayRobinson - Zoo Central");
      $("#image-header").attr("src", "images/event/sunset1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/events.png',
        'src': 'images/ico/events.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/events.png');
      $(".header-content #title").text("Sunset at the Zoo, presented by GrayRobinson");
      $(".header-content #date").html('<i class="fa fa-calendar" aria-hidden="true"></i> September 17, 2020');
      $(".header-content #times").html('<i class="fa fa-clock-o" aria-hidden="true"></i>  5:30 pm - 9:00 pm');
      $(".header-content #address").html('<i class="fa fa-map-marker" aria-hidden="true"></i> 3755 W. Seminole Blvd, Sanford, FL 32771');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.event4").click(function () {
    $("#bd-content").load("./modules/events/event4.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Sunset at the Zoo, presented by GrayRobinson - Zoo Central");
      $("#image-header").attr("src", "images/event/sunset2.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/events.png',
        'src': 'images/ico/events.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/events.png');
      $(".header-content #title").text("Sunset at the Zoo, presented by GrayRobinson");
      $(".header-content #date").html('<i class="fa fa-calendar" aria-hidden="true"></i> October 15, 2020');
      $(".header-content #times").html('<i class="fa fa-clock-o" aria-hidden="true"></i>  5:30 pm - 9:00 pm');
      $(".header-content #address").html('<i class="fa fa-map-marker" aria-hidden="true"></i> 3755 W. Seminole Blvd, Sanford, FL 32771');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.map").click(function () {
    $("#bd-content").load("./modules/map.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Map of the Zoo - Zoo Central");
      $("#image-header").attr("src", "images/maps/header-map.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/animals_header.png',
        'src': 'images/ico/animals_header.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/animals_header.png');
      $(".header-content #title").text("Map of the Zoo");
      $(".header-content #date").html('Plan your trek around the Zoo!');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.contact").click(function () {
    $("#bd-content").load("./modules/contact.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Contact - Zoo Central");
      $("#image-header").attr("src", "images/contact-header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/animals_header.png',
        'src': 'images/ico/animals_header.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/animals_header.png');
      $(".header-content #title").text("Contact Us");
      $(".header-content #date").html('');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.animals").click(function () {
    $("#bd-content").load("./modules/animals.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Animals - Zoo Central");
      $("#image-header").attr("src", "images/animals/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
      $(".header-content #title").text("Animals");
      $(".header-content #date").html('Feathers, scales and fur—meet the Zoo’s wild residents.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.amphibians").click(function () {
    $("#bd-content").load("./modules/amphibians.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Amphibians - Zoo Central");
      $("#image-header").attr("src", "images/animals/amphibians/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
      $(".header-content #title").text("Amphibians");
      $(".header-content #date").html('Slimy and seriously cool.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.poisonDartFrogs").click(function () {
    $("#bd-content").load("./modules/poisonDartFrogs.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Poison Dart Frogs - Zoo Central");
      $("#image-header").attr("src", "images/animals/amphibians/1-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
      $(".header-content #title").text("Poison Dart Frogs");
      $(".header-content #date").html('Dendrobates spp.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.tigerSalamander").click(function () {
    $("#bd-content").load("./modules/tigerSalamander.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Tiger Salamander - Zoo Central");
      $("#image-header").attr("src", "images/animals/amphibians/2-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
      $(".header-content #title").text("Tiger Salamander");
      $(".header-content #date").html('Ambystoma tigrinum');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.amazonMilkFrog").click(function () {
    $("#bd-content").load("./modules/amazonMilkFrog.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none"); // Title

      $("title").text("Amazon Milk Frog - Zoo Central"); // Image header

      $("#image-header").attr("src", "images/animals/amphibians/3-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png'); //Text header

      $(".header-content #title").text("Amazon Milk Frog");
      $(".header-content #date").html('Trachycephalus resinifictrix');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.africanBullfrog").click(function () {
    $("#bd-content").load("./modules/africanBullfrog.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none"); // Title

      $("title").text("African Bullfrog - Zoo Central"); // Image header

      $("#image-header").attr("src", "images/animals/amphibians/4-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png'); //Text header

      $(".header-content #title").text("African Bullfrog");
      $(".header-content #date").html('African Bullfrog');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.whitesTreeFrog").click(function () {
    $("#bd-content").load("./modules/whitesTreeFrog.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none"); // Title

      $("title").text("White’s Tree Frog - Zoo Central"); // Image header

      $("#image-header").attr("src", "images/animals/amphibians/5-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png'); //Text header

      $(".header-content #title").text("White’s Tree Frog");
      $(".header-content #date").html('Litoria caerulea');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.birds").click(function () {
    $("#bd-content").load("./modules/birds.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Birds - Zoo Central");
      $("#image-header").attr("src", "images/animals/birds/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/birds.svg',
        'src': 'images/ico/birds.svg'
      });
      $('#iconHeader img').attr('src', 'images/ico/birds.svg');
      $(".header-content #title").text("Birds");
      $(".header-content #date").html('Fly into fun with our feathered residents.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.invertebrates").click(function () {
    $("#bd-content").load("./modules/invertebrates.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Invertebrates - Zoo Central");
      $("#image-header").attr("src", "images/animals/invertebrates/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/invertebrates.svg',
        'src': 'images/ico/invertebrates.svg'
      });
      $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
      $(".header-content #title").text("Invertebrates");
      $(".header-content #date").html('Get to know our creepy crawlers.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.mammals").click(function () {
    $("#bd-content").load("./modules/mammals.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Mammals - Zoo Central");
      $("#image-header").attr("src", "images/animals/mammals/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/mammals.svg',
        'src': 'images/ico/mammals.svg'
      });
      $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
      $(".header-content #title").text("Mammals");
      $(".header-content #date").html('Get to know mammals from around the globe.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.reptiles").click(function () {
    $("#bd-content").load("./modules/reptiles.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Reptiles - Zoo Central");
      $("#image-header").attr("src", "images/animals/reptiles/header.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/reptiles.svg',
        'src': 'images/ico/reptiles.svg'
      });
      $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
      $(".header-content #title").text("Reptiles");
      $(".header-content #date").html('Warm up to our cold-blooded species.');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
  $("a.test").click(function () {
    $("#bd-content").load("./modules/test.html", function () {
      $("#ticket-content").addClass('d-none');
      $("#content-home").addClass('d-none');
      $("div.zs-slideshow").css('z-index', '-999');
      $(".shadow-inner-content").addClass("d-none");
      $(".header-event").removeClass("d-none");
      $("title").text("Tiger Salamander - Zoo Central");
      $("#image-header").attr("src", "images/animals/amphibians/2-1.jpg");
      $("#iconHeader").attr({
        'data-src': 'images/ico/amphibians_color.png',
        'src': 'images/ico/amphibians_color.png'
      });
      $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
      $(".header-content #title").text("Tiger Salamander");
      $(".header-content #date").html('Ambystoma tigrinum');
      $(".header-content #times").html('');
      $(".header-content #address").html('');
      $("#bd-content").removeClass('d-none');
      scollToTop();
    });
    return false;
  });
}

function scollToTop() {
  $('html, body').stop().animate({
    scrollTop: 0
  }, 800);
}