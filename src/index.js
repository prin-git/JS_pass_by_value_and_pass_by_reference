//javascript pass by reference

let varObj = {
  a: 1
};

console.log("Before Call by Reference Method", varObj);

function callByReference(param) {
  param.a = 100;

  console.log("in by Reference method ", param);
}

callByReference(varObj);

console.log("After Call by Reference Method", varObj);

//javascript pass by value
function square(param) {
  param = 20;

  console.log("in by value method", param);
}

var y = 10;
console.log("before by value method", y);

square(y);
console.log("after by value method", y);
