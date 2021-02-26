// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function greatNumber(num1, num2){
    if(num1 > num2){
        window.alert("The greater number of"+ " "+ num1 +" "+ "and"+" " +num2+ " "+ "is"+ " "+num1);
    }else if(num2 > num1){
        window.alert("The greater number of"+ " "+ num1+" "+  "and"+" " +num2+ " "+ "is"+ " "+num2);
    }else{
        window.alert("The number are same");
    }
}
var num_1 = parseInt(window.prompt("Enter first number"));
var num_2 = parseInt(window.prompt("Enter first second"));

window.alert(greatNumber(num_1,num_2));
