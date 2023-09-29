var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var result = JSON.parse(request.response);

  // Filter countries that use USD as a currency
  var usDollarCountries = result.filter(function (country) {
    return country.currencies && country.currencies.USD;
  });

  // Extract and print the names of countries
  var usDollarCountryNames = usDollarCountries.map(function (country) {
  return country.name.common;
 });

  console.log("Countries using US Dollars as currency:");
  console.log(usDollarCountryNames);
};
