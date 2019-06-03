(function($){

	$(document).ready(function(){
		$('.widget_wcms18-weather-widget').each(function(i, widget) {
			var current_weather = $(widget).find('.current-weather'),
				widget_city = $(current_weather).data('city'),
				widget_country = $(current_weather).data('country');

			$.post(
				wcms18_weather_settings.ajax_url, // URL
				{
					action: 'get_current_weather',
					city: widget_city,
					country: widget_country,
				}, // Data to send to server
				function(data) {
					var output = "";
					console.log("Got response", data);

					output += '<div class="conditions">';
					data.conditions.forEach(function(condition) {    // foreach ($data->conditions as $condition)
						output += '<img src="http://openweathermap.org/img/w/'+condition.icon+'.png" alt="'+condition.main+'" title="'+condition.description+'">';
					});
					output += '</div>';

					output += '<strong>Temperature:</strong> ' + data.temperature + '&deg; C<br>';
					output += '<strong>Humidity:</strong> ' + data.humidity + '%<br>';
					$(current_weather).html(output);
				}
			);
		});
	});

})(jQuery);
