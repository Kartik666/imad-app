var buttonElement = document.getElementById('button');
buttonElement.onclick = function(){
    //create request object
   var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
               var counterVar = request.responseText;
               
               var spanVar = document.getElementById('counter-id');
               spanVar.innerHTML = counterVar.toString();
            }
        }
    };
    
    //make request
    request.open('GET','http://kartikgurjar1994.imad.hasura-app.io/counter',true);
    request.send(null);
};