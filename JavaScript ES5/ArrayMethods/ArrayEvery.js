//example1 

var arr=[50,100,150,200,250,300];
var us=arr.every(
    function(gowtham){
        return gowtham<400;
    }
)
console.log(us);

//example2

var arr=[50,100,150,200,250,300];
var el=arr.every(
    function(gowtham){
        return gowtham<250;
    }
)
console.log(el);

