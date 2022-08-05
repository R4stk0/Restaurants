var apiKey = "CIyYuhWWAt5EmDo3YjQVwWo3m_nIVUxGbfx8UE1BVAOfH0z7JE1XjQwjjRir8qbWAZGHIcqSDgLa_Uk_FyM4_lHMbFIUF94JNyw83HsYWPs_nfi6fqdjbiLeIw7pYnYx";

let queryURL = "https://api.yelp.com/v3/businesses/search?location=SanJose,CA95127&term=restaurants";

const myHeaders = new Headers();


myHeaders.append('Access-Control-Allow-Origin', 'http://localhost:3000');
myHeaders.append('Access-Control-Allow-Credentials', 'true');

myHeader("Access-Control-Allow-Methods: OPTIONS, GET, POST");
header("Access-Control-Allow-Headers: Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control");

  $.ajax({
    url: queryURL,
    method: "GET",
    headers: {
      "accept": "application/json",
      "x-requested-with": "xmlhttprequest",
      "Access-Control-Allow-Origin": "*",
      "Authorization": `Bearer ${apiKey}`
    },
    data: {
      location: "San Jose, CA 95127",
      term: "restaurants",
    },
  });

var app = document.getElementById('root');

var container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

var data = JSON.stringify({
  "token": "CIyYuhWWAt5EmDo3YjQVwWo3m_nIVUxGbfx8UE1BVAOfH0z7JE1XjQwjjRir8qbWAZGHIcqSDgLa_Uk_FyM4_lHMbFIUF94JNyw83HsYWPs_nfi6fqdjbiLeIw7pYnYx",
  "data": {
	"image_url": "image_url",
    "name": "name",
    "display_phone": "display_phone",
    "distance": "distance",
    "_repeat": 9
  }
});

var request = new XMLHttpRequest();

request.onload = function(){

	var fakeData = JSON.parse(this.response);

  fakeData.forEach(businesses => {

	var card = document.createElement('div');
	card.setAttribute('class', 'card');

	var elem = document.createElement("img");
	elem.setAttribute("src", businesses.image_url);
	elem.setAttribute("height", "180px");
	elem.setAttribute("width", "100%");
	elem.setAttribute("alt", "Profile Picture");

	var h1 = document.createElement('h1');
	h1.textContent = businesses.name;

	var p1 = document.createElement('p1');
	p1.textContent = businesses.display_phone;

	var p2 = document.createElement('p2');
	p2.textContent = businesses.distance;

	var br = document.createElement("br");

	container.appendChild(card);

	card.appendChild(elem);
	card.appendChild(h1);
	card.appendChild(p1);
	card.appendChild(br);
	card.appendChild(p2);
  });
}

request.open("GET", "https://api.yelp.com/v3/businesses/search?location=SanJose,CA95127&term=restaurants");
request.setRequestHeader('Access-Control-Allow-Origin');
request.setRequestHeader("content-type", "application/json");
request.send(data);