//001//
let greeting;
console.log("مرحبا Marhaba!");
console.log("Hello World!");
console.log("Hallo Wereld!");
console.log("Hola mundo!");

//002//
let awesome;
console.log("I'm awesome");
//error ('I'm' ...') can be with " " or ('I\'m ...')//

//003 ... 03.5//
let x;
console.log("the value of my variable x will be: undefined");
x=1;
console.log("the value of my variable x will be: 1");
console.log('the value of my variable x will be:' + x );

//004 ... 004.5//
let y= "Hello World";
console.log("the value string of y is: how r you?");
console.log("the actual value is: " +y);
y="good";
console.log("the string will be: Hello World");
console.log('The actual value is:'+y);

//005 ... 005.6//
let z= 7.25;
console.log (z);
let a = 7;
console.log (a);
if (a < z) {
   console.log(a);}
else {
   console.log(z);}

//006 ... 006.7//
let myAnimals=[];
console.log ("the value array is false");
console.log ("myAnimals"); 
myAnimals=["Cheetah" , "elephent" , "Kangaroo"];
console.log("list of myAnimals: "+myAnimals);
myAnimals.push("baby pig");
console.log("list of myAnimals: " + myAnimals);

//007 ... 007.3//
let good="bye";
console.log(good);
let leng=good.length;
console.log("the length of good is: "+leng);

//008 ... 008.6//
let A=01;
let B=02;
let C="The First";
let D="The second";
console.log("value of A is:"+A);
console.log("value of B is:"+B);
console.log("value of C is:"+C);
console.log("value of D is:"+D);
console.log("type variables A and B: number")
console.log("type variables C and D: string")
console.log("actual type A: "+ typeof(A));
console.log("actual type B: "+ typeof(B));
console.log("actual type C: "+ typeof(C));
console.log("actual type D: "+ typeof(D));
console.log("value A = value B:"+ (A=B));
console.log("01 and 02 are equal:" + (A===B));
console.log("value C smaller than value D:" + (C<D));
if (typeof A===typeof B) {console.log("A and B same type");}
if (typeof C===typeof D) {console.log("C and D not same type");}

//009 ... 009.1//
let E;
let F;
let G;
E = 100;
F = 200;
G = 300;
if ((E % 3 !== 0) & (E % 3 !== 1)) {console.log("A: 2");}
if ((F % 3 !== 1) & (F % 3 !== 2)) {console.log("B: 0");}
if ((G % 3 !== 0) & (G % 3 !== 2)) {console.log("c: 1");}

//010 ...010.3//
let AMix = ["A", 01 , "B", 02];
let H = AMix[1];
let I = AMix[3];
if (H < I) {console.log(H + " smaller " + I);}
else {console.log(I + " bigger " + H);}








