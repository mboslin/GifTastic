
  // Initial array of food buttons along top of page.
  var foodButtons = ["Pizza", "Burger", "Taco", "Meatloaf", "Burrito", "Spaghetti", "Sandwich", "Lasagna", "Hot Dog"];

  // ========================================================

  // displayfoodInfo function now re-renders the HTML to display the content. 
  function displayfoodInfo(){

    //Clears the container for new content.
    $('#foodButtonsView').html("");     
    $("#foodButtonsView").empty();     

    // Creates a variable "food" with the attribute "data-name".
    var food = $(this).attr("data-name");
    
    // Search query with giphy API key with limit of 10 results.
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=WEdKMniBcpH47EWGg56KynEXKfiNI5Op&limit=10";

    