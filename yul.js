var sum = 0;
var i=1;
const interval = setInterval(function(){
   if (sum < 100){
    const number = i % 2;

    if (number != 0){
        sum += i;
        console.log(i,sum);
    }
    i++;    
   }
   else{
    clearInterval(interval);
   }
},1000);
