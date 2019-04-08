
setInterval(pada_snieg, 500);

function pada_snieg(){
	for(i = 1; i<= 20; i++){
		var left = Math.random()*100*12;
		var time = ((Math.random()*10)+5)*1000;
		var platek = $('<div class="snieg"></div>');
		$('.scena').append(platek);
		platek.css({'left': left+'px'});
		platek.animate({
			'top': '1300px'
		}, time, function (){
			$(this).remove();
		});			
	}
}