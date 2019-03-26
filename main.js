var x = document.querySelectorAll("td");
var rs = document.querySelector('#b');
var cellone = document.querySelector('#one');


rs.addEventListener('click', function(){
    for(var i=0; i<x.length; i++){
        x[i].textContent=' ';
    }
});

for(var i=0; i<x.length; i++){ 
    x[i].addEventListener('click', markerchange);
}



function markerchange(){
    if(this.textContent === 'X'){
        this.textContent = 'O';
        this.style.color = "red";
    }
    else if(this.textContent === 'O'){
        this.textContent = ' ';
    }
    
    else{
        this.textContent = 'X';

        this.style.color = "black";
    }
    
}