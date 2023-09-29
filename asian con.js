var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);

  // Filter countries from Asia
  var asianCountries = result.filter(function (country) {
    return country.region === "Asia";
  });

  console.log(asianCountries);
};
