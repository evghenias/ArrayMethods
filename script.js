var method = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12];
console.log(method);

method.push(-16);      //'push -16'
console.log(method);

method.unshift("1000");   //"unsshift"
console.log(method);

method.push("Last array element");   //"push Last array element"
console.log(method);

method.splice(3, 1);   //"удалить "JavaScript""
console.log(method);

var method2 = [11, 2, 23, 12]; /* я написала новый массив только с числами, я так понимаю, 
                               что если осуществлять какие то операции то объекты должны быть одного вида.*/

var result = method2.filter(function(value, index){    //отфильтровала числа <= 12
    return value <= 12;
});
console.log(result);


var result = method2.map(function (a, square) {       // числа возведенные в квадрат
      return a*a;
  }); 
console.log(result);

var method2 = [11, 2, 23, 12];                        // цикл for - выбираем самое большое число из массива
var largest = 0;
  for (var i=0; i<method2.length; i++){
    if (largest<method2[i]){
        largest=method2[i];
    }
  }
console.log(largest);

var method2 = [11, 2, 23, 12];                        // метод reduce - выбираем самое большое число из массива
var result = method2.reduce(function (a,b) {
    return Math.max(a,b);
});
console.log(result);





