var result = [];
var search = [];
var responseCnt = 0;



function getIngredients(key) {
    $.ajax({
    url: 'https://community-food2fork.p.mashape.com/get?key=0ee5a01caf7f7c3512b54978628f1a4e&rId=' + key, // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { result = JSON.parse(JSON.stringify(data.recipe));
                            console.dir(result);
                            var cnt = 0;
                            $('#location').append(
                                $.map(result.ingredients, function (ignore, index) {
                                    cnt = cnt +1;
        return '<tr><td>' + cnt + '</td><td>' + result.ingredients[index] + '</td>' + '<td><button type="submit" class="btn btn-default btn-sm delete"><span class="glyphicon glyphicon-trash"></span></button></td></tr>';
                                   
                            }).join()
);},
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg"); // Enter here your Mashape key
    }
});
}

function callback(response, rCnt) {
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
    
    console.log(info);
    
        $(pict).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt].recipe_id + ')" width="300" height="300" src="'+ response[rCnt].image_url +'" ></a>"');
        $(info).html('<h4 class="media-heading">' + response[rCnt].title + '</h4>');
        $(pict2).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+1].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+1].image_url +'" ></a>"');
        $(info2).html('<h4 class="media-heading">' + response[rCnt+1].title + '</h4>');
        $(pict3).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+2].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+2].image_url +'" ></a>"');
        $(info3).html('<h4 class="media-heading">' + response[rCnt+2].title + '</h4>');
        $(pict4).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+3].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+3].image_url +'" ></a>"');
        $(info4).html('<h4 class="media-heading">' + response[rCnt+3].title + '</h4>');
        $(pict5).html('<a href="#"><img class="img-circle" onclick="getIngredients(' + response[rCnt+4].recipe_id + ')" width="300" height="300" src="'+ response[rCnt+4].image_url +'" ></a>"');
        $(info5).html('<h4 class="media-heading">' + response[rCnt+4].title + '</h4>');
    
    
    console.log(pict);
}

$(document).ready(function(){

   $("button").click(function(){
       
     var word = document.getElementById("sbar").value;
 $.ajax({
    url: 'https://community-food2fork.p.mashape.com/search?key=0ee5a01caf7f7c3512b54978628f1a4e&page=4&q=' + word, // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { search = JSON.parse(JSON.stringify(data.recipes));
                             i = 0;
                             callback(search, i);
                             callback(search, i+1);
                             callback(search, i+2);
                             callback(search, i+3);
                             callback(search, i+4);
                             
                             
                           },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "gH609jhjxAmshYY4KnIDmad2zgXGp194YDUjsnHCTiPdd7m2Qg"); // Enter here your Mashape key
    }
});
    });
    
    
     
       $('#location').on('click','.delete',function(){
                                            $(this).parents('tr').remove();
                                    });

});
