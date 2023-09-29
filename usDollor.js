E)Print the country which uses US Dollars as currency.

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);

  var usDollarCountries = result.filter(function (country) {
    return country.currencies && country.currencies.USD;
  });
  var usDollarCountryNames = usDollarCountries.map(function (country) {
  return country.name.common;
 });
  console.log("Countries using US Dollars as currency:");
  console.log(usDollarCountryNames);
};
