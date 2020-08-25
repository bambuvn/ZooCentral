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
            $(".header-event").removeClass("d-none");
            // Title
            $("title").text("Amazon Milk Frog - Zoo Central");
            // Image header
            $("#image-header").attr("src", "images/animals/amphibians/3-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/amphibians_color.png',
                'src': 'images/ico/amphibians_color.png'
            });
            $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
            //Text header
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
            $(".header-event").removeClass("d-none");
            // Title
            $("title").text("African Bullfrog - Zoo Central");
            // Image header
            $("#image-header").attr("src", "images/animals/amphibians/4-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/amphibians_color.png',
                'src': 'images/ico/amphibians_color.png'
            });
            $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
            //Text header
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
            $(".header-event").removeClass("d-none");
            // Title
            $("title").text("White’s Tree Frog - Zoo Central");
            // Image header
            $("#image-header").attr("src", "images/animals/amphibians/5-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/amphibians_color.png',
                'src': 'images/ico/amphibians_color.png'
            });
            $('#iconHeader img').attr('src', 'images/ico/amphibians_color.png');
            //Text header
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

    $("a.americanBlackVulture").click(function () {
        $("#bd-content").load("./modules/americanBlackVulture.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("American Black Vulture - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/1-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("American Black Vulture");
            $(".header-content #date").html('Coragyps atratus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.easternScreechOwl").click(function () {
        $("#bd-content").load("./modules/easternScreechOwl.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Eastern Screech Owl - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/2-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Eastern Screech Owl");
            $(".header-content #date").html('Megascops asio');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.harrissHawk").click(function () {
        $("#bd-content").load("./modules/harrissHawk.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Harris’s Hawk - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/3-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Harris’s Hawk");
            $(".header-content #date").html('Parabuteo unicinctus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.guiraCuckoo").click(function () {
        $("#bd-content").load("./modules/guiraCuckoo.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Guira Cuckoo - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/4-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Guira Cuckoo");
            $(".header-content #date").html('Guira guira');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.black-throatedMagpieJay").click(function () {
        $("#bd-content").load("./modules/black-throatedMagpieJay.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Black-throated Magpie Jay - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/5-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Black-throated Magpie Jay");
            $(".header-content #date").html('Calocitta formosa colliei');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.silvery-cheekedHornbill").click(function () {
        $("#bd-content").load("./modules/silvery-cheekedHornbill.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Silvery-cheeked Hornbill - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/6-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Silvery-cheeked Hornbill");
            $(".header-content #date").html('Bycanistes brevis');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.wreathedHornbill").click(function () {
        $("#bd-content").load("./modules/wreathedHornbill.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Wreathed Hornbill - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/7-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Wreathed Hornbill");
            $(".header-content #date").html('Rhyticeros undulatus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.red-billedHornbill").click(function () {
        $("#bd-content").load("./modules/red-billedHornbill.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Red-billed Hornbill - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/8-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Red-billed Hornbill");
            $(".header-content #date").html('Tockus erythrorhynchus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.kookaburra").click(function () {
        $("#bd-content").load("./modules/kookaburra.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Kookaburra - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/9-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Kookaburra");
            $(".header-content #date").html('Dacelo novaeguineae');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.blue-belliedRoller").click(function () {
        $("#bd-content").load("./modules/blue-belliedRoller.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Blue-bellied Roller - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/10-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Blue-bellied Roller");
            $(".header-content #date").html('Coracias cyanogaster');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.tawnyFrogmouth").click(function () {
        $("#bd-content").load("./modules/tawnyFrogmouth.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Tawny Frogmouth - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/11-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Tawny Frogmouth");
            $(".header-content #date").html('Podargus strigoides');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });
    
    $("a.violaceousTuraco").click(function () {
        $("#bd-content").load("./modules/violaceousTuraco.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Violaceous Turaco - Zoo Central");
            $("#image-header").attr("src", "images/animals/birds/12-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/birds.svg',
                'src': 'images/ico/birds.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/birds.svg');
            $(".header-content #title").text("Violaceous Turaco");
            $(".header-content #date").html('Musophaga violacea');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });
    // INVERTEBRATES
    $("a.giantAfricanMillipede").click(function () {
        $("#bd-content").load("./modules/giantAfricanMillipede.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Giant African Millipede - Zoo Central");
            $("#image-header").attr("src", "images/animals/invertebrates/1-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/invertebrates.svg',
                'src': 'images/ico/invertebrates.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
            $(".header-content #title").text("Giant African Millipede");
            $(".header-content #date").html('Musophaga violacea');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.chileanRoseTarantula").click(function () {
        $("#bd-content").load("./modules/chileanRoseTarantula.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Chilean Rose Tarantula - Zoo Central");
            $("#image-header").attr("src", "images/animals/invertebrates/2-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/invertebrates.svg',
                'src': 'images/ico/invertebrates.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
            $(".header-content #title").text("Chilean Rose Tarantula");
            $(".header-content #date").html('Grammostola rosea');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.madagascarHissingCockroach").click(function () {
        $("#bd-content").load("./modules/madagascarHissingCockroach.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Madagascar Hissing Cockroach - Zoo Central");
            $("#image-header").attr("src", "images/animals/invertebrates/3.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/invertebrates.svg',
                'src': 'images/ico/invertebrates.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
            $(".header-content #title").text("Madagascar Hissing Cockroach");
            $(".header-content #date").html('Gromphadorhina portentosa');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.asianForestScorpion").click(function () {
        $("#bd-content").load("./modules/asianForestScorpion.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Asian Forest Scorpion - Zoo Central");
            $("#image-header").attr("src", "images/animals/invertebrates/4-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/invertebrates.svg',
                'src': 'images/ico/invertebrates.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
            $(".header-content #title").text("Asian Forest Scorpion");
            $(".header-content #date").html('Heterometrus species');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });
    
    $("a.mexicanRedkneeTarantula").click(function () {
        $("#bd-content").load("./modules/mexicanRedkneeTarantula.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Mexican Redknee Tarantula - Zoo Central");
            $("#image-header").attr("src", "images/animals/invertebrates/5-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/invertebrates.svg',
                'src': 'images/ico/invertebrates.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/invertebrates.svg');
            $(".header-content #title").text("Mexican Redknee Tarantula");
            $(".header-content #date").html('Brachypelma smithi');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    // Mammals
    $("a.serval").click(function () {
        $("#bd-content").load("./modules/serval.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Serval - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/1-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Serval");
            $(".header-content #date").html('Leptailurus serval');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.amurLeopard").click(function () {
        $("#bd-content").load("./modules/amurLeopard.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Amur Leopard - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/2-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Amur Leopard");
            $(".header-content #date").html('Panthera pardus orientalis');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.donkey").click(function () {
        $("#bd-content").load("./modules/donkey.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Donkey - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/3-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Donkey");
            $(".header-content #date").html('Equus asinus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.fFloridaBlackBear").click(function () {
        $("#bd-content").load("./modules/fFloridaBlackBear.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Florida Black Bear - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/4-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Florida Black Bear");
            $(".header-content #date").html('Ursus americanus floridanus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.cougar").click(function () {
        $("#bd-content").load("./modules/cougar.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Cougar - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/5-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Cougar");
            $(".header-content #date").html('Puma concolor');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.nigerianDwarfGoat").click(function () {
        $("#bd-content").load("./modules/nigerianDwarfGoat.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Nigerian Dwarf Goat - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/6-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Nigerian Dwarf Goat");
            $(".header-content #date").html('Capra hircus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });
    
    $("a.pygmyGoat").click(function () {
        $("#bd-content").load("./modules/pygmyGoat.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Pygmy Goat - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/7-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Pygmy Goat");
            $(".header-content #date").html('Capra hircus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.giraffe").click(function () {
        $("#bd-content").load("./modules/giraffe.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Giraffe - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/8-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Giraffe");
            $(".header-content #date").html('Giraffa camelopardalis');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.alpaca").click(function () {
        $("#bd-content").load("./modules/alpaca.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Alpaca - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/9-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Alpaca");
            $(".header-content #date").html('Vicugna pacos');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.llama").click(function () {
        $("#bd-content").load("./modules/llama.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Llama - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/10-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Llama");
            $(".header-content #date").html('Lama glama');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.chacoanPeccary").click(function () {
        $("#bd-content").load("./modules/chacoanPeccary.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Chacoan Peccary - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/11-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Chacoan Peccary");
            $(".header-content #date").html('Catagonus wagneri');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.warthog").click(function () {
        $("#bd-content").load("./modules/warthog.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Warthog - Zoo Central");
            $("#image-header").attr("src", "images/animals/mammals/12-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/mammals.svg',
                'src': 'images/ico/mammals.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/mammals.svg');
            $(".header-content #title").text("Warthog");
            $(".header-content #date").html('Phacochoerus africanus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    //REPTILES

    $("a.cottonmouth").click(function () {
        $("#bd-content").load("./modules/cottonmouth.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Cottonmouth - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/1-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Cottonmouth");
            $(".header-content #date").html('Agkistrodon piscivorus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.orinocoCrocodile").click(function () {
        $("#bd-content").load("./modules/orinocoCrocodile.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Orinoco Crocodile - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/2-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Orinoco Crocodile");
            $(".header-content #date").html('Crocodylus intermedius');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.jamaicanBoa").click(function () {
        $("#bd-content").load("./modules/jamaicanBoa.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Jamaican Boa - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/3-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Jamaican Boa");
            $(".header-content #date").html('Epicrates subflavus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.radiatedTortoise").click(function () {
        $("#bd-content").load("./modules/radiatedTortoise.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Radiated Tortoise - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/4-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Radiated Tortoise");
            $(".header-content #date").html('Astrochelys radiata');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.americanCrocodile").click(function () {
        $("#bd-content").load("./modules/americanCrocodile.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("American Crocodile - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/5-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("American Crocodile");
            $(".header-content #date").html('Crocodylus acutus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.americanAlligator").click(function () {
        $("#bd-content").load("./modules/americanAlligator.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("American Alligator - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/6-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("American Alligator");
            $(".header-content #date").html('Alligator mississippiensis');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.gaboonViper").click(function () {
        $("#bd-content").load("./modules/gaboonViper.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Gaboon Viper - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/7-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Gaboon Viper");
            $(".header-content #date").html('Bitis rhinoceros');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.sriLankanPitViper").click(function () {
        $("#bd-content").load("./modules/sriLankanPitViper.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Sri Lankan Pit Viper - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/8-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Sri Lankan Pit Viper");
            $(".header-content #date").html('Trimeresurus trigonocephalus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.dDuskyPygmyRattlesnake").click(function () {
        $("#bd-content").load("./modules/dDuskyPygmyRattlesnake.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Dusky Pygmy Rattlesnake - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/9-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Dusky Pygmy Rattlesnake");
            $(".header-content #date").html('Sistrurus miliarius barbouri');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.southAmericanBushmaster").click(function () {
        $("#bd-content").load("./modules/southAmericanBushmaster.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("South American Bushmaster - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/10-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("South American Bushmaster");
            $(".header-content #date").html('Lachesis muta muta');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.beautifulPitViper").click(function () {
        $("#bd-content").load("./modules/beautifulPitViper.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Beautiful Pit Viper - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/11-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Beautiful Pit Viper");
            $(".header-content #date").html('Trimeresurus venustus');
            $(".header-content #times").html('');
            $(".header-content #address").html('');
            $("#bd-content").removeClass('d-none');
            scollToTop();
        });
        return false;
    });

    $("a.arubaIslandRattlesnake").click(function () {
        $("#bd-content").load("./modules/arubaIslandRattlesnake.html", function () {
            $("#ticket-content").addClass('d-none');
            $("#content-home").addClass('d-none');
            $("div.zs-slideshow").css('z-index', '-999');
            $(".shadow-inner-content").addClass("d-none");
            $(".header-event").removeClass("d-none");
            $("title").text("Aruba Island Rattlesnake - Zoo Central");
            $("#image-header").attr("src", "images/animals/reptiles/12-1.jpg");
            $("#iconHeader").attr({
                'data-src': 'images/ico/reptiles.svg',
                'src': 'images/ico/reptiles.svg'
            });
            $('#iconHeader img').attr('src', 'images/ico/reptiles.svg');
            $(".header-content #title").text("Aruba Island Rattlesnake");
            $(".header-content #date").html('Crotalus durissus');
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