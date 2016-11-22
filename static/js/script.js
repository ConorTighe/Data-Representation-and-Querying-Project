var result = [];


$.ajax({
    url: 'https://community-food2fork.p.mashape.com/get?key=0ee5a01caf7f7c3512b54978628f1a4e&rId=37859', // The URL to the API. You can get this in the API page of the API you intend to consume
    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
    data: {}, // Additional parameters here
    dataType: 'json',
    success: function(data) { result = JSON.parse(JSON.stringify(data.recipe));
                            console.dir(result);
                            var cnt = 0;
                            $('#location').append(
                                $.map(result.ingredients, function (ignore, index) {
                                    cnt = cnt +1;
                                return '<tr><td>' + cnt +'</td><td>' + result.ingredients[index] + '</td></tr>';
                                    
                            }).join()
);},
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "VVSftRLP2lmshYkf353HVyk4G8ajp12QUm2jsn8IflyCbYxtDg"); // Enter here your Mashape key
    }
});

 
$(document).ready(function(){

   
      

});
