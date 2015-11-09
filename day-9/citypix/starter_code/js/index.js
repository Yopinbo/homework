$(document).ready(function(){
// user types in string
var city

// $('#submit-btn').click(submit);
$(form).submit(function(event){
    event.preventDefault();
    changeBackground();
});

function changeBackground(){
    city = $('#city-type').val();
    city = city.toLowerCase();

    if (city === 'new york' || city === 'nyc' || city = '')

}
// collect that string from input into a variable
// figure out when the submit button is hit
// check that variable against our collection of strings/tags
// if there is a match, swap to the corresponding background image using .css

});



//



