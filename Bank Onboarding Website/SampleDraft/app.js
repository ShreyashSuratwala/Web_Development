var submitBtn = function(a) {

if (a == "open") {
    document.getElementById("alert").style.display = "block";
}
if (a == "close") {
    document.getElementById("alert").style.display = "none";
    // document.getElementsByClassName("show").style.display = "none !important";
}
   
  }

  var close = function() {
    document.getElementById("alert").style.display = "none !important";
  }


//   function JSalert(){
// 	swal({   title: "Require Email!",   
//     text: "Enter your email address:",   
//     type: "input",   
//     showCancelButton: true,   
//     closeOnConfirm: false,   
//     animation: "slide-from-top",   
//     inputPlaceholder: "Your Email address" }, 
    
//     function(inputValue){   
//         if (inputValue === false) 
//         return false;      
//            if (inputValue === "") {     
//             swal.showInputError("Please enter email!");     
//             return false   
//             }      
//          swal("Action Saved!", "You entered following email: " + inputValue, "success"); });
// }

  var half = 0;
var sum = 0;
var compare = 0;
var fun = function (array) {
for(i=0; i<array.length; i++) {
sum = sum + array[i]
}
half = sum/2;
for(j=0; j<array.length; j++) {
compare = compare + array[j]
if(compare > half) {
 return j
}
}
}
var index = fun([2,3,9,14,29,7]);
console.log (index)