/// for loop -> davtalt
// () -> dotor davtah nuhtsul
//for(var i = iehleh too i<=tugsgul too; i++/i--)
// for(){
//  end davtah code baina
//}
console.log('Hello');
for( var i=1; i<11; i++){
    console.log(i+'Hello');
}
// i=1 ->
console.log('Hi');
for( var i=10; i>0; i--){
    console.log(i+'Hi');
}
console.log('tegsh');
console.log('sondgoi');
for( var i=1; i<21; i++){
    if((i%2)==0){
        console.log(i+'tegsh');
    }else{
        console.log(i+'sondgoi');
    }
}

var niilber=0;
for( var i=1; i<11; i++){
    niilber = niilber + i;
}
console.log(niilber);
var urjver=1;
for(var i=1; i<11; i++){
    urjver = urjver*i;
}
console.log(urjver);
// bodlogo 4
var hurd = 10;
for( var i=1; i<11; i++){
    hurd = 10*i;
    console.log(i + "*" +10 + "=" + hurd);
}
// define
var utga = document.getElementsByTagName('input')[0];
var result = document.querySelector(".result");
var fact= 1;
// check
console.log(utga);
console.log(result);
// uildel
function calc(){
    var number = parseInt(utga.value);
    for( var i=1; i<= number; i++){
        fact=fact*i;
    }
    result.innerText = "Result : "+ fact;
}
