function getWeather() {
  let C = document.getElementById("city").value;
  city = C;
  getData();
  document.getElementById("city").value = "";
}
async function getData() {
  try {
    res = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&&appid=a3fda9bd88006e1d585bfcf8c0e0cd6a&units=metric`
    );
    X = await res.json();
    apend(X);
    console.log(X);
  } catch (err) {
    console.log(err);
    console.log("error");
  }
}

function apend(X) {
  document.getElementById("forcast").innerHTML = null;
  document.getElementById("container").innerHTML = null;
  let name = document.createElement("p");
  name.innerText = `${X.city.name} ${X.city.country}`;
  let temp = document.createElement("p");
  temp.innerText = `${X.list[0].main.temp} C`;
  let tempf = document.createElement("p");
  tempf.innerText = `Feels Like ${X.list[0].main.feels_like} C,`;
  let humidity = document.createElement("p");
  humidity.innerText = `Humidity: ${X.list[0].main.humidity}%`;
  let wind = document.createElement("p");
  wind.innerText = `${X.list[0].wind.speed}m/s WNW`;

  let pre = document.createElement("p");
  pre.innerText = `pressure - ${X.list[0].main.pressure}hpa`;
  document
    .getElementById("container")
    .append(name, temp, tempf, wind, humidity, pre);
  document.getElementById(
    "gmap_canvas"
  ).src = `https://maps.google.com/maps?q=${X.city.name}&t=&z=13&ie=UTF8&iwloc=&output=embed&maptype=satellite`;

  div0 = document.createElement("div");
  p01 = document.createElement("p");
  p01.innerText = X.list[0].dt_txt;
  p02 = document.createElement("p");
  p02.innerText = X.list[0].weather[0].description;
  p03 = document.createElement("p");
  p03.innerText = `TEMP:- ${X.list[0].main.temp} C`;
  div0.append(p01, p02, p03);

  div1 = document.createElement("div");
  p11 = document.createElement("p");
  p11.innerText = X.list[5].dt_txt;
  p12 = document.createElement("p");
  p12.innerText = X.list[5].weather[0].description;
  p13 = document.createElement("p");
  p13.innerText = `TEMP:- ${X.list[0].main.temp} C`;
  div1.append(p11, p12, p13);

  div2 = document.createElement("div");
  p21 = document.createElement("p");
  p21.innerText = X.list[15].dt_txt;
  p22 = document.createElement("p");
  p22.innerText = X.list[15].weather[0].description;
  p23 = document.createElement("p");
  p23.innerText = `TEMP:- ${X.list[0].main.temp} C`;
  div2.append(p21, p22, p23);

  div3 = document.createElement("div");
  p31 = document.createElement("p");
  p31.innerText = X.list[25].dt_txt;
  p32 = document.createElement("p");
  p32.innerText = X.list[25].weather[0].description;
  p33 = document.createElement("p");
  p33.innerText = `TEMP:- ${X.list[0].main.temp} C`;
  div3.append(p31, p32, p33);
  document.getElementById("forcast").append(div0, div1, div2, div3);
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;

  lat = crd.latitude;
  lon = crd.longitude;
  getData2();
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);
//
async function getData2() {
  try {
    res2 = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=a3fda9bd88006e1d585bfcf8c0e0cd6a&units=metric`
    );
    X = await res2.json();
    apend(X);
    console.log(X);
  } catch (err2) {
    console.log(err2);
    console.log("error");
  }
}
