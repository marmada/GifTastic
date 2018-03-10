

var foodArr = ["bbq", "french food", "beans", "mexican food", "pie", "cake", "chocolate", "steak", "pho", "paella"];

$("#foodButtons").on("click", "button", function () {

    foodQ = $(this).attr("data-name");

    console.log(foodQ);


    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hvnwkL6roszPGAdklacfXfRWFssZNqLM&q=" + foodQ + "&limit=12&offset=0&rating=G&lang=en";

    console.log(queryURL);

    //Get AJAX request with the queryURL
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

            $("#foodGif").empty();

            var foodC= $("<div class='col-12'>");
            var foodTitle = $("<h1>")
            foodTitle.addClass("title");
            
            foodTitle.text("Look at all the Gifs with " + foodQ.toUpperCase());

            foodC.append(foodTitle);

        

            // Looping through each result item
            for (var i = 0; i < results.length; i++) {

                // add subdiv per each Giphy

                var foodDiv = $("<div class='giphy col-4'>");

                // add raiting

                var p = $("<p>").text("Rating: " + results[i].rating.toUpperCase());
                p.addClass("text")

                // add image

                var foodGiphy = $("<img>");

                // add Attributes
                
                foodGiphy.attr("src", results[i].images.fixed_width_still.url);
                foodGiphy.attr("data-state", "still");
                foodGiphy.attr("data-still", results[i].images.fixed_width_still.url);
                foodGiphy.attr("data-animate", results[i].images.fixed_width.url);



                // add p & gif to div
              
                foodDiv.append(p);
                foodDiv.append(foodGiphy);

                // Prepend gif to HTML
                
                $("#foodGif").prepend(foodDiv);
                $("#foodGif").prepend(foodTitle);
            }
        });
});

function createButtons() {

    //empty buttons
    $("#foodButtons").empty();

    // Loop thru array
    for (var i = 0; i < foodArr.length; i++) {

        //create button
        var b = $("<button type='button'>");

        b.addClass("foodQ");

        b.addClass("btn btn-info");
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

    $("#food-input").empty();



    // Calling renderButtons which handles the processing of our movie array
    createButtons();

});

$("#foodGif").on("click", "img", function() {
    
    var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });


$(document).ready(function () {
    createButtons();
});
