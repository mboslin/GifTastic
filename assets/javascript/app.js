
  // Initial array of food buttons along top of page.
  var foodButtons = ["Pizza", "Burger", "Taco", "Meatloaf", "Burrito", "Spaghetti", "Sandwich", "Lasagna", "Hot Dog"];


  // displayfoodInfo function now re-renders the HTML to display the content. 
  function displayfoodInfo(){

    //Clears the container for new content.
    $("#foodButtonsView").html("");     
    $("#foodButtonsView").empty();     

    // Creates a variable "food" with the attribute "data-name".
    var food = $(this).attr("data-name");
    
    // Search query with giphy API key with limit of 10 results.
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=WEdKMniBcpH47EWGg56KynEXKfiNI5Op&limit=10";


    // Uses ajax to search URL with Get method with new function called "done".
    $.ajax({url: queryURL, method: "GET"})
       .done(function(response) {
           var results = response.data;

           for(var i=0; i < results.length; i++){

              if (results[i].rating == "r" || results[i].rating == "pg-13")
              {

              }
              else {

               console.log(response)
            
               var rating = results[i].rating;

               var p = $("<p>").text( "Rating: " + rating);

               var foodImage = $("<img>");
            
               foodImage.attr("src", results[i].images.fixed_height_still.url);
               foodImage.attr("data-still", results[i].images.fixed_height_still.url);
               foodImage.attr("data-animate", results[i].images.fixed_height.url);
               foodImage.attr("data-state", "still");
               foodImage.addClass("foodImage");
               
               $("#foodButtonsView").append(p);
               $("#foodButtonsView").append(foodImage);

              }
           }

      $(".foodImage").on("click", function(){
        
          var state = $(this).attr("data-state"); 
            console.log(state);
        
            if ( state == "still"){
                $(this).attr("src", $(this).data("animate"));
                $(this).attr("data-state", "animate");
            }else{
                $(this).attr("src", $(this).data("still"));
                $(this).attr("data-state", "still");
            }
           
      });
      });   
  }

  //  Displays food data. 
  function renderButtons(){ 

    // Deletes the foodButtons prior to adding new foodButtons.
    $("#foodButtons").empty();

    // Loops through the array of foodButtons.
    for (var i = 0; i < foodButtons.length; i++){
 
        var a = $("<button>") 
        a.addClass("food"); // Added a class 
        a.addClass("btn btn-success"); // Added a class 
        a.addClass("btn btn-primary btn-lg");
        a.attr("data-name", foodButtons[i]); // Added a data-attribute
        a.text(foodButtons[i]); // Provided the initial button text
        $("#foodButtons").append(a); // Added the button to the HTML
    }
  }

  
  $("#addfood").on("click", function(){    

    // Grabs the input from the textbox.
    var food = $("#food-input").val().trim();

    // The food from the textbox is then added to our array.
    foodButtons.push(food);
    
    // Our array then runs which handles the processing of our food array.
    renderButtons();

    // Users can hit "enter" instead of clicking on the button and it won't advance to the next page.
    return false;
  })

  // Displaying the foodInfo.
  $(document).on("click", ".food", displayfoodInfo);

  // This calls the renderButtons() function.
  renderButtons();
 