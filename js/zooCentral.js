$(document).ready(function () {
	loadTopMenu();
	$(window).scroll(function () {
		if ($(this).scrollTop() < ($("#header").height() - 300)) {
			$("#nav-top").removeClass('navbar-scroll');
			$("#logo").removeClass('logo-scroll');
		} else {
			$("#nav-top").addClass('navbar-scroll');
			$("#logo").addClass('logo-scroll');
		}
	});
	$("#buttonToggler").click(function () {
		$("nav.navbar").toggleClass("nav-top1");
		$("nav.navbar").toggleClass("change");
	});
})

function loadTopMenu() {
	$('#nav-top').animate({
		top: -200
	}, 0, function () {
		$('#nav-top').animate({
			top: 0
		}, 800);
	});
}

function initializeMap() {
	// Loading Google Maps
	var latlng = new google.maps.LatLng(10.786681, 106.666378);
	var myOptions = {
		zoom: 18,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var mymap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
	var marker = new google.maps.Marker({
		position: latlng,
		map: mymap,
		title: "Central Zoo"
	});
}

(function ($) {
	"use strict";
	/*==================================================================
	[ Validate ]*/
	var input = $('.validate-input .input100');

	$('.validate-form').on('submit', function () {
		var check = true;

		for (var i = 0; i < input.length; i++) {
			if (validate(input[i]) == false) {
				showValidate(input[i]);
				check = false;
			}
		}
		return check;
	});


	$('.validate-form .input100').each(function () {
		$(this).focus(function () {
			hideValidate(this);
		});
	});

	function validate(input) {
		if ($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
			if ($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
				return false;
			}
		} else {
			if ($(input).val().trim() == '') {
				return false;
			}
		}
	}

	function showValidate(input) {
		var thisAlert = $(input).parent();

		$(thisAlert).addClass('alert-validate');
	}

	function hideValidate(input) {
		var thisAlert = $(input).parent();
		$(thisAlert).removeClass('alert-validate');
	}

})(jQuery);
