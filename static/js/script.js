// Conor Tighe - G00314417
// Variable to store and manipulate ingredients
var result = [];
var search = [];
var i = 0;


// GET the ingredients from Food2fork
function getIngredients(key) {
        $.ajax({
        url: 'https://community-food2fork.p.mashape.com/get?key=0ee5a01caf7f7c3512b54978628f1a4e&rId=' + key, // The URL to the API. You can get this in the API page of the API you intend to consume
        type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
        data: {}, // Additional parameters here
        dataType: 'json',
        success: function(data) { result = data.recipe; // store results of search
                                console.dir(result); // display in console
                                var cnt = 0; // recipe count

                                // Map out the ingredients to a list
                                $('#location').append(
                                    $.map(result.ingredients, function (ignore, index) {
                                        cnt = cnt +1;
                                 return '<tr><td>' + result.title + '</td><td>' + cnt + '</td><td>' + result.ingredients[index] + '</td>' + '<td><button type="submit" class="btn btn-default btn-sm delete"><span class="glyphicon glyphicon-trash"></span></button></td></tr>'; // injecting this into the table in index.html

                                }).join() // join with table
                                );},
        error: function(err) { alert(err); }, // error handling 
        beforeSend: function(xhr) { // Adds key to make my data accessable
        xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg"); //My Mashape key
        }
    });
}

// Save ingredients
function saveRecipe(title,rank,auth,src) {
  //  console.log("Hii");
        $.ajax({
            type: "POST",
            headers: {"Content-Type": "application/json"},
            url: "/SaveFile",
            data: JSON.stringify({name: title, rating : rank, author : auth, source: src}),
            success: function(response) {
            console.log("Recipe Saved");
            console.log(response);
            },
            error: function(response, error) {
            console.dir(error);
            }
        });
    }
    
// This is where the HTML injections are coming from, this method is called if the search AJAX is successful and retrieving the data to populate the HTML.
function callback(response, rCnt) {
    // Element Ids to map where the injections go
    var pict = document.getElementById("imgStore");
    var info = document.getElementById("details");
    var pict2 = document.getElementById("imgStore2");
    var info2 = document.getElementById("details2");
    var pict3 = document.getElementById("imgStore3");
    var info3 = document.getElementById("details3");
    var pict4 = document.getElementById("imgStore4");
    var info4 = document.getElementById("details4");
    var pict5 = document.getElementById("imgStore5");
    var info5 = document.getElementById("details5");
    
    // These vars are created to bypass the syntax error I emailed showed you in class, it lets Javascript distinguish between the "" and the '' when injecting the HTML 
     var onclickstring = "saveRecipe('" + response[rCnt].title + "','" + response[rCnt].social_rank.toFixed(2) + "','" + response[rCnt].publisher + "','" + response[rCnt].source_url + "')";
    
     var onclickstring1 = "saveRecipe('" + response[rCnt+1].title + "','" + response[rCnt+1].social_rank.toFixed(2) + "','" + response[rCnt+1].publisher + "','" + response[rCnt+1].source_url + "')";
    
     var onclickstring2 = "saveRecipe('" + response[rCnt+2].title + "','" + response[rCnt+2].social_rank.toFixed(2) + "','" + response[rCnt+2].publisher + "','" + response[rCnt+2].source_url + "')";
    
     var onclickstring3 = "saveRecipe('" + response[rCnt+3].title + "','" + response[rCnt+3].social_rank.toFixed(2) + "','" + response[rCnt+3].publisher + "','" + response[rCnt+3].source_url + "')";
    
     var onclickstring4 = "saveRecipe('" + response[rCnt+4].title + "','" + response[rCnt+4].social_rank.toFixed(2) + "','" + response[rCnt+4].publisher + "','" + response[rCnt+4].source_url + "')";
    
    //console.log(info);
    
    // The media components seen below that are send to index.html, they inecject the image first followed by details and download button
        // Media Component 1
        $(pict).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt].recipe_id + ')" width="300" height="300" src="'+ response[rCnt].image_url +'" ></a>"');
    
        $(info).html('<h4 class="media-heading">' + response[rCnt].title + '</h4><h3><span class="glyphicon glyphicon-star" aria-hidden="true">    </span>  ' + response[rCnt].social_rank.toFixed(2) + '</h3><h3><span class="glyphicon glyphicon-print" aria-hidden="true">    </span>   ' + response[rCnt].publisher + '</h3><h3><span class="glyphicon glyphicon-home" aria-hidden="true">    </span>  <a href="' + response[rCnt].source_url + '"> ' + response[rCnt].publisher + ' Link </a></h3><button type="button" onclick="' + onclickstring + '" class="btn btn-default btn" title="Save to databse" ><span class="glyphicon glyphicon-floppy-saved" aria-hidden="true"></span></button>');
    
        // Media Component 2
        $(pict2).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+1].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+1].image_url +'" ></a>"');
    
        $(info2).html('<h4 class="media-heading">' + response[rCnt+1].title + '</h4><h3><span class="glyphicon glyphicon-star" aria-hidden="true">    </span>  ' + response[rCnt+1].social_rank.toFixed(2) + '</h3><h3><span class="glyphicon glyphicon-print" aria-hidden="true">    </span>   ' + response[rCnt+1].publisher + '</h3><h3><span class="glyphicon glyphicon-home" aria-hidden="true">    </span> <a href="' + response[rCnt+1].source_url + '">  ' + response[rCnt+1].publisher + ' Link </a></h3><button type="button"  class="btn btn-default" onclick="' + onclickstring1 + '" id="button2" title="Save"><span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>');
    
        // Media Component 3
        $(pict3).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+2].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+2].image_url +'" ></a>"');
    
        $(info3).html('<h4 class="media-heading">' + response[rCnt+2].title + '</h4><h3><span class="glyphicon glyphicon-star" aria-hidden="true">    </span>  ' + response[rCnt+2].social_rank.toFixed(2) + '</h3><h3><span class="glyphicon glyphicon-print" aria-hidden="true">    </span>   ' + response[rCnt+2].publisher + '</h3><h3><span class="glyphicon glyphicon-home" aria-hidden="true">    </span> <a href="' + response[rCnt+2].source_url + '">  ' + response[rCnt+2].publisher + ' Link  </a></h3><button onclick="' + onclickstring3 + '" type="button" class="btn btn-default" id="button3" onclick="' + onclickstring2 + '" title="Save"><span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>');
    
        // Media Component 4
        $(pict4).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+3].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+3].image_url +'" ></a>"');
    
        $(info4).html('<h4 class="media-heading">' + response[rCnt+3].title + '</h4><h3><span class="glyphicon glyphicon-star" aria-hidden="true">    </span>  ' + response[rCnt+3].social_rank.toFixed(2) + '</h3><h3><span class="glyphicon glyphicon-print" aria-hidden="true">    </span>   ' + response[rCnt+3].publisher + '</h3><h3><span class="glyphicon glyphicon-home" aria-hidden="true">    </span> <a href="' + response[rCnt+3].source_url + '">  ' + response[rCnt+3].publisher + ' Link  </a></h3><button onclick="' + onclickstring3 + '" type="button" class="btn btn-default" id="button4" title="Save"><span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>');
    
        // Media Component 5
        $(pict5).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+4].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+4].image_url +'" ></a>"');
    
        $(info5).html('<h4 class="media-heading">' + response[rCnt+4].title + '</h4><h3><span class="glyphicon glyphicon-star" aria-hidden="true">    </span>  ' + response[rCnt+4].social_rank.toFixed(2) + '</h3><h3><span class="glyphicon glyphicon-print" aria-hidden="true">    </span>   ' + response[rCnt+4].publisher + '</h3><h3><span class="glyphicon glyphicon-home" aria-hidden="true">    </span> <a href="' + response[rCnt+4].source_url + '">  ' + response[rCnt+4].publisher + ' Link  </a></h3><button type="button"  onclick="' + onclickstring4 + '" class="btn btn-default" id="button5" title="Save"><span class="glyphicon glyphicon-save" aria-hidden="true"></span></button>');
    
    
   // console.log(pict);
}

// The ready function to activate the GUI controls from the get-go
$(document).ready(function(){

   // when search button clicked
   $("button").click(function(){
     // Target search bar
     var word = document.getElementById("sbar").value;
       // search API with search bar keyword/String
        $.ajax({
            url: 'https://community-food2fork.p.mashape.com/search?key=0ee5a01caf7f7c3512b54978628f1a4e&page=4&q=' + word, // The URL to the API. You can get this in the API page of the API you intend to consume
            type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
            data: {}, // Additional parameters here
            dataType: 'json', // data type
            success: function(data) { search = data.recipes; 

                                     //console.dir(search);
                                     // Response is handled by a method
                                     callback(search, i);


                                   },
            error: function(err) { alert(err); }, // error handling
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg"); // My Mashape key
            }
        });
    });
    
    
     // Sort by trend button
     $("trend").click(function(){
       
     var word = document.getElementById("sbar").value;
         $.ajax({
            url: 'https://community-food2fork.p.mashape.com/search?key=0ee5a01caf7f7c3512b54978628f1a4e&page=4&q=' + word + '&sort=t', // The URL to the API. You can get this in the API page of the API you intend to consume and the sorting by trend( the sorts do work its just that alot of the sites have very similar stats once you round them off, I rounded the data off on the way in as it makes the GUI look bad so you get similar results until you get to the end of the API count)
            type: 'GET', 
            data: {}, 
            dataType: 'json',
            success: function(data) { search = data.recipes;

                                     console.dir(search);
                                     callback(search, i);


                                   },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg");
            }
        });
    });
    
     // Sort by rating button
     $("rate").click(function(){
         
       var word = document.getElementById("sbar").value;
         
         $.ajax({
            url: 'https://community-food2fork.p.mashape.com/search?key=0ee5a01caf7f7c3512b54978628f1a4e&page=4&q=' + word + '&sort=r', // The URL to the API. You can get this in the API page of the API you intend to consume, same thing as the other sort.
            type: 'GET', 
            data: {}, 
            dataType: 'json',
            success: function(data) { search = data.recipes;

                                     console.dir(search);
                                     callback(search, i);


                                   },
            error: function(err) { alert(err); },
            beforeSend: function(xhr) {
            xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg");
            }
        });
    });
     
    // Delete Ingredients button handle
    $('#location').on('click','.delete',function(){
        $(this).parents('tr').remove();
    });

});
