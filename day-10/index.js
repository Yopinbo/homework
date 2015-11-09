$(document).ready(function() {

var city = [ "New York City",
    "Austin",
    "Sydny",
    "Boston"];

for(var i = 0; i < city.length; i++) {
    $("#city-type").append($('<option> </option>').val(city[i+1]).html(city[i]));
};
// var val, text;
// for (text in city) {
//     val = city[text];
//     $('<option/>').val(val).text(text).appendTo($('#city-type'));
//     console.log('something is happening');
// };

});