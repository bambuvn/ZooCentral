$(document).ready(function(){
    loadTopMenu();
})

function loadTopMenu(){
		$('#nav-top').animate({top: -200}, 0, function() {
			$('#nav-top').animate({top: 0}, 800); 
		});
}