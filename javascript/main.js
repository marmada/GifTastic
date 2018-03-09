var foodArr = ["bbq", "french food", "beans", "mexican food", "pie", "cake", "chocolate", "steak", "pho", "paella"]

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hvnwkL6roszPGAdklacfXfRWFssZNqLM&limit=10&offset=0&rating=G&lang=en&q=" + "XXXXXX"


/*$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $("XXXXXXXX").text(JSON.stringify(response));
});*/
function createButtons() {

    //empty buttons
    $("#foodButtons").empty();

    // Loop thru array
    for (var i = 0; i < foodArr.length; i++) {

        //create button
        var b = $("<button>");
        
        b.addClass("food btn btn-info");
        // Adding a data-attribute
        b.attr("data-name", foodArr[i]);
        // Add Value/Text
        b.text(foodArr[i]);
        // Adding the button to the HTML
        $("#foodButtons").append(b);
    }
}

$("#add-newFood").on("click", function(event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var food = $("#food-input").val().trim();

    // Adding the movie from the textbox to our array
    food.push(foodArr);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();

  });


}

$(document).ready(function() {
    console.log( "ready!" );
    createButtons();
});
