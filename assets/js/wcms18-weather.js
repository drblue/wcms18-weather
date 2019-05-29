(function($){

	$(document).ready(function(){
	});

})(jQuery);

function w18ww_get_current_weather(widget_id) {
	// fire some async request
	console.log("Firing away request for widget " + widget_id);

	var url = wcms18_weather_settings.ajax_url,
		payload = {
			action: 'get_current_weather',
		};

	jQuery.post(
		url, // URL
		payload, // Data to send to server
		function(data) {
			console.log("GOT RESPONSE for widget " + widget_id + "!!!! YAY!!", data);
			var output = "";
			output += '<strong>Temperature:</strong> ' + data.temperature + '&deg; C<br>';
			output += '<strong>Humidity:</strong> ' + data.humidity + '%<br>';
			jQuery('#' + widget_id + ' .current-weather').html(output);
		}
	);
}
