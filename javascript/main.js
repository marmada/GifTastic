

var foodArr = ["bbq", "french food", "beans", "mexican food", "pie", "cake", "chocolate", "steak", "pho", "paella"];

var foodQ= "";

$("button").on("click", function() {

    foodQ = $(this).attr("data-name");

    console.log(foodQ);


    var queryURL = "https://api.giphy.com/v1/gifs/search?&q=" 
    + foodQ + "api_key=hvnwkL6roszPGAdklacfXfRWFssZNqLM&limit=12&offset=0&rating=PG&lang=en";

    console.log(queryURL);
    // Performing an AJAX request with the queryURL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        // After data comes back from the request
        .then(function (response) {
            console.log(queryURL);
            console.log(response);
            // storing the data from the AJAX request in the results variable
            var results = response.data;

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // Empty Storing Div

                $("#foodGif").empty();

                // add subdiv per each Giphy

                var foodDiv= $("<div class='col-3'>");
                
                // add raiting

                var p = $("<p>").text("Rating: " + results[i].rating);

                // add image

                var foodGiphy = $("<img>");

                // add Attributes

            
                foodGiphy.attr("src", results[i].images.fixed_height_still.url);
                foodGiphy.attr("data-state", "still");
                foodGiphy.attr("data-still", results[i].images.fixed_height_still.url);
                foodGiphy.attr("data-animate", results[i].images.fixed_width.url );

                // add p & gif to div
                foodDiv.append(p);
                foodDiv.append(foodGiphy);

                // Prepend gif to HTML
                $("#foodGif").prepend(foodDiv);
            }
        });
});

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

$("#add-newFood").on("click", function (event) {
    // Preventing the buttons default behavior when clicked (which is submitting a form)
    event.preventDefault();
    // This line grabs the input from the textbox
    var food = $("#food-input").val().trim();

    // Adding the movie from the textbox to our array
    foodArr.push(food);

    // Calling renderButtons which handles the processing of our movie array
    createButtons();

});




$(document).ready(function () {
    createButtons();
});
