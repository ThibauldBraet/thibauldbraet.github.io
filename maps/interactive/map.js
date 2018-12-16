function whenDocumentLoaded(action) {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", action);
	} else {
		// `DOMContentLoaded` already fired
		main();
	}
}

let data_folder = "../../maps/interactive/"

function topTen(crime, housing, education, obj) {
	let min = minScore(crime, housing, education, obj);
	let max = maxScore(crime, housing, education, obj);
	let scores = [];
	for (let zip in obj) {
		scores.push({
			"zip": zip,
			"score": max == min ? 1 : (obj[zip]["crime"] * crime + obj[zip]["housing"] * housing + obj[zip]["education"] * education - min)
					/ (max - min),
			"borough": obj[zip]["borough"]
		});
	}
	scores.sort((a, b) => b.score - a.score);
	scores = scores.slice(0, Math.min(10, scores.length));
	return scores;
}

// finds the max score from the current linear combination
function minScore(crime, housing, education, obj) {
	let min = 10;
	for (let zip in obj) {
		min = Math.min(min, obj[zip]["crime"] * crime + obj[zip]["housing"] * housing + obj[zip]["education"] * education);
	}
	return min;
}

// finds the max score from the current linear combination
function maxScore(crime, housing, education, obj) {
	let max = 0;
	for (let zip in obj) {
		max = Math.max(max, obj[zip]["crime"] * crime + obj[zip]["housing"] * housing + obj[zip]["education"] * education);
	}
	return max;
}

// returns the color for the given score
function getColor(crime, housing, education, code, obj) {
	let min = minScore(crime, housing, education, obj);
	let max = maxScore(crime, housing, education, obj);
	let score;
	if (code in obj) {
		let scores = obj[code];
		if (scores["education"] == -1 || scores["housing"] == -1 || scores["crime"] == -1) { // invalid data
			return "grey";
		}
		score = scores["education"] * education + scores["housing"] * housing + scores["crime"] * crime;
		if (max == min) {
			score = 1;
		} else {
			score = (score - min) / (max - min);
		}
	} else {
		return "grey";
	}

	let scale = chroma.scale(['white', 'green']).domain([0, 1]);
	return scale(score);
}

// initializes table to values
function setTable(top) {
	for (let i = 1; i <= 10; i++) {
		let scoreId = "score_" + i;
		let zipId = "zip_" + i;
		let boroId = "boro_" + i
		document.getElementById(zipId).innerHTML = top[i - 1].zip;
		document.getElementById(scoreId).innerHTML = Math.round(top[i - 1].score * 1000) / 1000;
		document.getElementById(boroId).innerHTML = top[i - 1].borough;
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
	d3.json(data_folder + "nyc-postcode.json").then(function(json) {
		// reformats dictionary in better format
		dict = {};
		for (let i = 0; i < json.features.length; i++) {
			dict[json["features"][i].properties.postalCode] = json["features"][i];
		}

		// reads csv with data
		d3.csv(data_folder + "test.csv").then(function(data) {
			obj = {};
			for (let i = 0; i < data.length; i++) {
				let code = data[i]["zipcode"];

				// checks if data is invalid
				if (+data[i]["crime"] != -1 && +data[i]["education"] != -1 && +data[i]["housing"] != -1) {
					obj[code] = data[i];
					obj[code]["crime"] = 1 - +obj[code]["crime"];
					obj[code]["education"] = +obj[code]["education"];
					obj[code]["housing"] = +obj[code]["housing"];
					obj[code]["borough"] = dict[code].properties.borough;
				}
			}

			let crime = document.getElementById("crime");
			let housing = document.getElementById("housing");
			let education = document.getElementById("education");


			// style function for the map
			function style(feature) {
			    return {
			        fillColor: getColor(parseFloat(crime.value), parseFloat(housing.value), parseFloat(education.value), 
			        		feature.properties.postalCode, obj),
			        weight: 1,
			        opacity: 1,
			        color: 'black',
			        fillOpacity: 1
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
					let top =topTen(parseFloat(crime.value), parseFloat(housing.value), parseFloat(education.value), obj);
					setTable(top);
				})
			}

			addListener(crime);
			addListener(education);
			addListener(housing);

			// adds choropleth
			L.geoJson(json, {style: style}).addTo(mymap);
			let top = topTen(parseFloat(crime.value), parseFloat(housing.value), parseFloat(education.value), obj);
			setTable(top);
		});
	});
});
