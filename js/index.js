"use strict";
 // 1
/*
 let x, y, xy;
 x=prompt('введите цену');
 if (x<800){
     x=Number(x);
     y=Number(y);
     y=0.03;
     xy=x*y+x;
     alert('цена с учетом скидки :'+xy);
 }else{
     x=Number(x);
     y=Number(y);
     y=0.05;
     xy=x*y+x;
     alert('цена с учетом скидки :'+xy);
 }*/
// 2
/*
let x=prompt('номер дня недели');
x=Number(x)
switch ( x ) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log("Неверный формат числа")
}
*/
//3
/*
let max,W, i;
i=Number(prompt('min'));
max=Number(prompt("max"));
W=Number(4)
for(i;i<=max;i) {
    console.log(i);
    i+=W;
}
*/
//4
/*
let N, i=1, a=0;
N=Number(prompt('N'));
for (i;i<=N;i++){
    a=a+(1/i);
    console.log(a)
}
console.log(a)
*/
//5
/*
let x, a=Number(6);
do {
    x=prompt('Решите пример:2+2*2');x=Number(x);

}while (x!=a);
console.log('Ответ верный')
*/
//6
/*
let x=1000, base=2, e=50,i=0;
console.log(i+' '+x);i++;
do {
    x=x/base;
    console.log(i+' '+x);
    i++;
}while (x>e);
*/
//7
/*
let y, x;
x=Number(-2);
while (x<=2){
    y=2*x*x-5*x-8;
    console.log(y+' '+x);
    x=x+0.5;
}
*/
//8
/*
let x=prompt('somme number');
x=Number(x);
let i=0;
while(i<100){
    i++;
    if( i%x ==0 ){
        console.log(i);
    }
}//
*/
//9
/*
let x=Number(prompt('Some Number')),i;
function primeNumber(x) {
    for(i=2;i<Math.sqrt(x);i++) {
    if(x % i ==0){
        console.log('Число не простое и делится на '+ i);
        return 0;
    }else{
        console.log('Число простое');return 0;
    }
    }
}
primeNumber(x);
*/
//10
/*
let x=Number(prompt('Some Number'));
function table(x) {
    let a;
    a=x*1;
    console.log(x+' '+'* 1 = '+ a);
    a=x*2;
    console.log(x+' '+'* 2 = '+ a);
    a=x*3;
    console.log(x+' '+'* 3 = '+ a);
    a=x*4;
    console.log(x+' '+'* 4 = '+ a);
    a=x*5;
    console.log(x+' '+'* 5 = '+ a);
    a=x*6;
    console.log(x+' '+'* 6 = '+ a);
    a=x*7;
    console.log(x+' '+'* 7 = '+ a);
    a=x*8;
    console.log(x+' '+'* 8 = '+ a);
    a=x*9;
    console.log(x+' '+'* 9 = '+ a);
    a=x*10;
    console.log(x+' '+'* 10 = '+ a);
}
table(x);
*/
//11
/*
let x=Number(prompt('Some Number'));
function Sum(x) {
    if (x==1) return 1;
    return x+Sum(x - 1);
}
alert(Sum(x));
*/
// 12

const student = {
    filename:   "Ivan",
    secondName: "Petrov",
    gender:     "male",
    contacts:   "none",

};
console.log(student);

const studInfo = {
    faculty:    "ETF",
    department: "AP",
};
console.log(studInfo);
