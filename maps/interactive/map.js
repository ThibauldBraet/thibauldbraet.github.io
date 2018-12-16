function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		main();
	}
}

whenDocumentLoaded(() => {
	// creates map
	var mymap = L.map('map').setView([40.7128, -73.9], 10);

	// defines background layer, adds to map
	let background = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
		attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		maxZoom: 18,
		id: 'mapbox.streets',
		accessToken: 'pk.eyJ1IjoiYmdyYXNzeSIsImEiOiJjam90M283enMwM2d1M3ZvZGRweXhuZXdwIn0.OOZ5ruMJLs3hrovEkbYcjg'
	});
	background.addTo(mymap);

	// loads json file
	d3.json("nyc-postcode.json").then(function(json) {
		// reformats dictionary in better format
		dict = {};
		for (let i = 0; i < json.features.length; i++) {
			dict[json["features"][i].properties.postalCode] = json["features"][i];
		}

		// reads csv with data
		d3.csv("test.csv").then(function(data) {
			obj = {};
			for (let i = 0; i < data.length; i++) {
				let code = data[i]["zipcode"];
				obj[code] = data[i];
				obj[code]["crime"] = 1 - +obj[code]["crime"];
				obj[code]["education"] = +obj[code]["education"];
				obj[code]["housing"] = +obj[code]["housing"];
			}

			let crime = document.getElementById("crime");
			let housing = document.getElementById("housing");
			let education = document.getElementById("education");


			// finds the max score from the current linear combination
			function maxScore(crime, housing, education) {
				let max = 0;
				for (zip in obj) {
					max = Math.max(max, obj[zip]["crime"] * crime + obj[zip]["housing"] * housing + obj[zip]["education"] * education);
				}
				return max;
			}

			// returns the color for the given score
			function getColor(score) {
				if (score == -1) {
					return "grey";
				} else {
					var max = maxScore(parseFloat(crime.value), parseFloat(housing.value), parseFloat(education.value));
					var scale = chroma.scale(['white', 'green']).domain([0, max]);
					return scale(score);
				}
			}

			// returns the score for the given postal code
			function getScore(code) {
				if (code in obj) {
					let scores = obj[code];
					return scores["education"] * education.value + scores["housing"] * housing.value + scores["crime"] * crime.value;
				} else {
					return -1;
				}
			}

			// style function for the map
			function style(feature) {
			    return {
			        fillColor: getColor(getScore(feature.properties.postalCode)),
			        weight: 1,
			        opacity: 1,
			        color: 'black',
			        fillOpacity: 0.7
				};
			}

			// for a slider, adds the proper listener
			function addListener(slider) {
				slider.addEventListener('change', (event) => {
					mymap.eachLayer(function (layer) { // resets map
						if (layer !== background) {
							mymap.removeLayer(layer);
						}
					});
					L.geoJson(json, {style: style}).addTo(mymap);
				})
			}

			addListener(crime);
			addListener(education);
			addListener(housing);

			// adds choropleth
			L.geoJson(json, {style: style}).addTo(mymap);
		});
	});
});
