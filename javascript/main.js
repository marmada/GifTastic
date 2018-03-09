var foodArr = ["bbq", "french food", "beans", "mexican food", "pie", "cake", "chocolate", "steak", "pho", "paella"]

var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hvnwkL6roszPGAdklacfXfRWFssZNqLM&limit=10&offset=0&rating=G&lang=en&q=" + "XXXXXX"


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    $("XXXXXXXX").text(JSON.stringify(response));
});

function createButtons() {

    //empty buttons
    $("#foodButton").empty();

    // Loop thru array
    for (var i = 0; i < foodArr.length; i++) {

        //create button
        var b = $("<button>");
        
        b.addClass("food");
        b.addClass()
        // Adding a data-attribute
        b.attr("data-name", foodArr[i]);
        // Add Value/Text
        a.text(foodArr[i]);
        // Adding the button to the HTML
        $("#foodButton").append(b);
    }
}