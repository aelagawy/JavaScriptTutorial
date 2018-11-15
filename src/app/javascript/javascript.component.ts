import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  Title_Java = 'Javascript';
  @ViewChild("demoDiv1") demoElm1: ElementRef;
  @ViewChild("demoDiv2") demoElm2: ElementRef;
  @ViewChild("demoDiv3") demoElm3: ElementRef;
  @ViewChild("demoDiv4") demoElm4: ElementRef;
  @ViewChild("demoDiv5") demoElm5: ElementRef;
  @ViewChild("demoDiv6") demoElm6: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.demoElm1.nativeElement.innerHTML = 'ngOnInit';

    const pi = Math.PI; // 3.14; 
    const person = "John Doe";
    const answer = 'Yes I am!';
    this.demoElm1.nativeElement.innerHTML = pi + "<br>" + person + "<br>" + answer + "<br>" + "<h1>Mohamed </h1>";
  }
  myFunction() {
    this.demoElm1.nativeElement.innerHTML = 'call my function';
  }
  myFunction2() {
    let x, y, z;  // Statement 1
    x = 5;        // Statement 2
    y = 6;        // Statement 3
    z = x + y;    // Statement 4
    this.demoElm1.nativeElement.innerHTML = "The value of z is " + z + ".";
  }
  myFunction3() {
    let x, y, z;  // Statement 1
    x = 10;
    y = 20;
    document.write(x + y);
  }
  myFunction4() {
    let carName;
    this.demoElm1.nativeElement.innerHTML = carName;
  }
  myFunction5() {
    const answer1 = "It's alright";
    const answer2 = "He is called 'Johnny'";
    const answer3 = 'He is called "Joh  nny"';

    this.demoElm1.nativeElement.innerHTML = `${answer1} <br> ${answer2} <br> ${answer3}`;
  }
  myFunction6() {
    const cars = ["Saab", "Volvo", "BMW"];

    this.demoElm1.nativeElement.innerHTML = cars[0] + "-" + cars[2];
    /*مفهوم المصفوفات
    مصفوفة: تعني Array في البرمجة.   المصفوفة عبارة عن كائن يحتوي مجموعة عناصر من نفس النوع تتخزن بجوار بعضها في الذاكرة.
    بمعنى آخر المصفوفة عبارة عن كائن يمكنه تخزين عدة قيم من نفس النوع.
    عناصر المصفوفة تتميز عن بعضها من خلال رقم محدد يعطى لكل عنصر يسمى index. أول عنصر فيها يتم تخزينه في الـ index رقم 0.
    عدد عناصر المصفوفة ثابت, أي بمجرد أن قمت بتحديده لا يمكنك تغييره من جديد, لكنك تستطيع تغيير قيم هذه العناصر متى شئت */
  }
  myFunction7() {
    const person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    this.demoElm1.nativeElement.innerHTML = person.firstName + " is " + person.age + " years old.";

    /* 
   مفهوم Object
   (Object) كل شيء عبارة عن كائن 
   (Attributes) وكل كائن يتكون من خصائص 
   (Actions) وايضاً يحتوي على افعال 
   Behavior و Methods ويمكننا القول بأنها عبارة عن الأشياء التي يقوم بها الكائن
   مثال 
   الكائن هو السيارة 
   خصائص السيارة هي اللون والسرعة والموديل   
   الافعال هي حركة السيارة 
   
   والعلاقة بينهما Class و Object 
    الكائن هو Object 
   Class عبارة عن نسخة من 
   
   تدعم لغة Java مفهوم Object Oriented Programming، وهذا يعني أنها لغة تتعامل 
   بمفهومClasses و Objects، ولكي نعرف الكمبيوتر بشكل كائن ما و تفاصيله، لابد لنا من إنشاء Classيشرح 
   تلك التفاصيل، والكائنات التي ستنتج منه تتكون من خصائص Attributes وأفعالActions، وعندما نأتي إلى 
   الخصائص Attributes فإنه سيتم تمثيلها بما يسمى المتغيراتconstiables برمجياً، وعندما نأتي إلى 
   الأفعال Actions فإنه سيتم تمثيلها كذلك برمجياً بما يسمى الدوال Functions أو Methods.
   
   class Person {
   
     public String name;
     public int age;
     public boolean gender;
    
     public void eat() {...}
     public void sleep() {...}
     public void run() {...}
   }
    */

  }
  myFunction8() {
    let x;
    const person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    //person = null;

    // document.getElementById("demo").innerHTML =
    //   typeof "" + "<br>" +
    //   typeof "John" + "<br>" +
    //   typeof 10 + "<br>" +
    //   typeof 3.14 + "<br>" +
    //   typeof true + "<br>" +
    //   typeof function myFunc() { } + "<br>" +
    //   typeof x + "<br>" +
    //   typeof person;
    this.demoElm1.nativeElement.innerHTML =
      typeof "" + "<br>" +
      typeof "John" + "<br>" +
      typeof 10 + "<br>" +
      typeof 3.14 + "<br>" +
      typeof true + "<br>" +
      typeof function myFunc() { } + "<br>" +
      typeof x + "<br>" +
      typeof person;
  }

  myFunction9(p1, p2) {
    return p1 * p2;
  }

  myFunction10(p1, p2, t) {
    if (t == "Add")
      return p1 + p2;
    else
      return p1 * p2;
  }
  myFunction11() {
    const x = "We are the so-called \"Vikings\" from the north.";
    this.demoElm3.nativeElement.innerHTML = x;
  }
  myFunction12() {
    const x = 'It\'s alright.';
    this.demoElm3.nativeElement.innerHTML = x;
  }
  myFunction13() {
    const x = "The character \\ is called backslash.";
    this.demoElm3.nativeElement.innerHTML = x;
  }
  myFunction14() {
    const txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.demoElm4.nativeElement.innerHTML = txt.length.toString();
  }
  myFunction15() {
    const str = "Please locate where 'locate' occurs!";
    const pos = str.indexOf("locate");
    this.demoElm4.nativeElement.innerHTML = pos.toString();
  }
  myFunction16() {
    const str = "Please locate where 'locate' occurs!";
    const pos = str.lastIndexOf("locate");
    this.demoElm4.nativeElement.innerHTML = pos.toString();
  }
  myFunction17() {
    const str = "Apple, Banana, Kiwi";
    const res = str.slice(-12, -6);
    this.demoElm4.nativeElement.innerHTML = res;
  }
  myFunction18() {
    const str = "Apple, Banana, Kiwi";
    const res = str.substr(7, 6);
    this.demoElm4.nativeElement.innerHTML = res;
  }
  myFunction19() {
    const str = "Apple, Banana, Kiwi";
    const res = str.substr(-4);
    this.demoElm4.nativeElement.innerHTML = res;
  }
  myFunction20() {
    const str = this.demoElm4.nativeElement.innerHTML;
    const txt = str.replace("Kiwi", "Kiwi Kiwi Kiwi");
    this.demoElm4.nativeElement.innerHTML = txt;
  }
  myFunction21() {
    const str = "Microsoft Please visit Microsoft and Microsoft ";
    const txt = str.replace(/Microsoft/g, "MM");
    this.demoElm4.nativeElement.innerHTML = txt;
  }
  myFunction22() {
    const text = this.demoElm4.nativeElement.innerHTML;
    this.demoElm4.nativeElement.innerHTML = text.toUpperCase();
  }
  myFunction23() {
    const text = this.demoElm4.nativeElement.innerHTML;
    this.demoElm4.nativeElement.innerHTML = text.toLowerCase();
  }
  myFunction24() {
    const text1 = "Mohamed";
    const text2 = "Abu Saif";
    const text3 = text1.concat(" Mostafa ", text2);
    this.demoElm4.nativeElement.innerHTML = text3;
  }
  myFunction25() {
    const str = "X       Hello    World!       X";
    this.demoElm4.nativeElement.innerHTML = str.trim();
  }
  myFunction26() {
    const str = "HELLO WORLD";
    this.demoElm4.nativeElement.innerHTML = str.charAt(0);
  }
  myFunction27() {
    const str = "HELLO WORLD";
    this.demoElm4.nativeElement.innerHTML = str.charCodeAt(0).toString();
  }
  myFunction28() {
    const str = "HELLO WORLD";
    this.demoElm4.nativeElement.innerHTML = str[0];
  }
  myFunction29() {
    const str = "Hello";
    const arr = str.split("");
    let text = "";

    for (let i = 0; i < arr.length; i++) {
      text += arr[i] + "<br>"
    }
    this.demoElm4.nativeElement.innerHTML = text;
  }
  myFunction30() {
    const x = 9.656;
    this.demoElm5.nativeElement.innerHTML =
    x.toFixed(0) + "<br>" +
    x.toFixed(2) + "<br>" +
    x.toFixed(4) + "<br>" +
    x.toFixed(6);
  }
  myFunction31() {
    const x = 9.656;
    this.demoElm5.nativeElement.innerHTML =
    x.toPrecision() + "<br>" +
    x.toPrecision(2) + "<br>" +
    x.toPrecision(4) + "<br>" +
    x.toPrecision(6);
  }
  myFunction32() {
    const x = new Date("2017-09-30");
    this.demoElm5.nativeElement.innerHTML = Number(x).toString();
  }
  myFunction33() {
    this.demoElm5.nativeElement.innerHTML =
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +
    parseInt("10 years") + "<br>" +
    parseInt("years 10");
  }
  myFunction34() {
    const cars = ["Saab", "Volvo", "BMW"];
    this.demoElm6.nativeElement.innerHTML = cars.toString();
  }
  myFunction35() {
    let cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";
    this.demoElm6.nativeElement.innerHTML = cars.toString();
  }
  myFunction36() {
    const person = { firstName: "John", lastName: "Doe", age: 46 };
    this.demoElm6.nativeElement.innerHTML = person["firstName"];
  }
  myFunction37() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const last = fruits[fruits.length - 1];
    this.demoElm6.nativeElement.innerHTML = last;
  }
  myFunction38() {
    let fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++)
      text += "<li>" + fruits[i] + "</li>";
    
    text += "</ul>";
    this.demoElm6.nativeElement.innerHTML = text;
  }
  myFunction39() {
    let fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";
    this.demoElm6.nativeElement.innerHTML = text;

    function myFunction(value) { //ECMA 5
      text += "<li>" + value + "</li>";
    }
  }
  myFunction40() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.push("Lemon");
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  myFunction41() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    this.demoElm6.nativeElement.innerHTML = Array.isArray(fruits).toString();
  }

  /* const fruits = ["Banana", "Orange", "Apple", "Mango"];
   document.getElementById("demo").innerHTML = isArray(fruits);
   
   function isArray(myArray) {
       return myArray.constructor.toString().indexOf("Array") > -1;
   } */
  myFunction42() {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    this.demoElm6.nativeElement.innerHTML = fruits.join(" * ");
  }
  myFunction43() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  myFunction44() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  /*
  const fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo1").innerHTML = fruits;
  document.getElementById("demo2").innerHTML = fruits.shift();
  document.getElementById("demo3").innerHTML = fruits;
  */
  myFunction45() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.unshift("Lemon");
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  myFunction46() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  /*fruits.splice(2, 2, "Lemon", "Kiwi");
  fruits.splice(0, 1);        // Removes the first element of fruits*/
  myFunction47() {
    const myGirls = ["Cecilie", "Lone"];
    const myBoys = ["Emil", "Tobias", "Linus"];
    const myChildren = myGirls.concat(myBoys);
    this.demoElm6.nativeElement.innerHTML = myChildren.toString();
  }
  myFunction48() {
    const arr1 = ["Cecilie", "Lone"];
    const arr2 = ["Emil", "Tobias", "Linus"];
    const arr3 = ["Robin", "Morgan"];
    const myChildren = arr1.concat(arr2, arr3);
    this.demoElm6.nativeElement.innerHTML = myChildren.toString();
  }
  myFunction49() {
    const arr1 = ["Cecilie", "Lone"];
    const myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
    this.demoElm6.nativeElement.innerHTML = myChildren.toString();
  }
  myFunction50() {
    const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    const citrus = fruits.slice(3);
    this.demoElm6.nativeElement.innerHTML = fruits + "<br><br>" + citrus;
  }
  myFunction51() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  myFunction52() {
    let fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    this.demoElm6.nativeElement.innerHTML = fruits.toString();
  }
  myFunction53() {
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    this.demoElm6.nativeElement.innerHTML = points.toString();
  }
  myFunction54() {
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
    this.demoElm6.nativeElement.innerHTML = points.toString();
  }
  myFunction55() {
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});
    this.demoElm6.nativeElement.innerHTML = points.toString();
  }
  myFunction56() {
    let points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a-b});
    this.demoElm6.nativeElement.innerHTML = points[0].toString();
  }
  myFunction57() {
    let points = [40, 100, 1, 5, 25, 10];
    points.sort((a, b) => {return b-a});
    this.demoElm6.nativeElement.innerHTML = points[0].toString();
  }
}





console.log(' console = ' + 5 + 6);
console.log(5 + 6 + ' console ');


/*window.onload = function what(){
  document.getElementById("demo2").innerHTML = "ngOnInit"; */
  /*=====================================*/

/*
The code below will change
the heading with id = "myH"
and the paragraph with id = "myP"
in my web page:
*/

/*=====================================*/

/* JavaScript Arithmetic Operators
Operator	Description
+	  Addition
-	  Subtraction
*	  Multiplication
/	  Division
%	  Modulus (Division Remainder)
++	Increment
--	Decrement */

/*=====================================*/

/*JavaScript Assignment Operators
Operator	Example	Same As
=x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y */

/*=====================================*/
/*JavaScript Comparison Operators
Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator */
/*=====================================*/

/*JavaScript Logical Operators
Operator	Description
&&	logical and
||	logical or
!	logical not */

/*=====================================*/

/*JavaScript Bitwise Operators
Operator	Description	Example	Same as	Result	Decimal
&	AND	5 & 1	0101 & 0001	0001	 1
|	OR	5 | 1	0101 | 0001	0101	 5
~	NOT	~ 5	 ~0101	1010	 10
^	XOR	5 ^ 1	0101 ^ 0001	0100	 4
<<	Zero fill left shift	5 << 1	0101 << 1	1010	 10
>>	Signed right shift	5 >> 1	0101 >> 1	0010	  2
>>>	Zero fill right shift	5 >>> 1	0101 >>> 1	0010	  2 */

/*=====================================*/

/*JavaScript Arithmetic Operators
Operator	Description
+	Addition
-	Subtraction
*	Multiplication
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement */

/*=====================================*/

/* Value	Operator	Description	Example
20	( )	Expression grouping	(3 + 4)
 	 	 	 
19	.	Member	person.name
19	[]	Member	person["name"]
19	()	Function call	myFunction()
19	new	Create	new Date()
 	 	 	 
17	++	Postfix Increment	i++
17	--	Postfix Decrement	i--
 	 	 	 
16	++	Prefix Increment	++i
16	--	Prefix Decrement	--i
16	!	Logical not	!(x==y)
16	typeof	Type	typeof x
 	 	 	 
15	**	Exponentiation (ES7)	10 ** 2
 	 	 	 
14	*	Multiplication	10 * 5
14	/	Division	10 / 5
14	%	Division Remainder	10 % 5
 	 	 	 
13	+	Addition	10 + 5
13	-	Subtraction	10 - 5
 	 	 	 
12	<<	Shift left	x << 2
12	>>	Shift right	x >> 2
12	>>>	Shift right (unsigned)	x >>> 2
 	 	 	 
11	<	Less than	x < y 
11	<=	Less than or equal	x <= y
11	>	Greater than	x > y
11	>=	Greater than or equal	x >= y
11	in	Property in Object	"PI" in Math
11	instanceof	Instance of Object	instanceof Array
 	 	 	 
10	==	Equal	x == y
10	===	Strict equal	x === y
10	!=	Unequal	x != y
10	!==	Strict unequal	x !== y
 	 	 	 
9	&	Bitwise AND	x & y
8	^	Bitwise XOR	x ^ y
7	|	Bitwise OR	x | y
6	&&	Logical AND	x && y
5	||	Logical OR	x || y
4	? :	Condition	? "Yes" : "No"
 	 	 	 
3	+=	Assignment	x += y
3	+=	Assignment	x += y
3	-=	Assignment	x -= y
3	*=	Assignment	x *= y
3	%=	Assignment	x %= y
3	<<=	Assignment	x <<= y
3	>>=	Assignment	x >>= y
3	>>>=	Assignment	x >>>= y
3	&=	Assignment	x &= y
3	^=	Assignment	x ^= y
3	|=	Assignment	x |= y
 	 	 	 
2	yield	Pause Function	yield x
1	,	Comma	5 , 6 */

/*=====================================*/

/* JavaScript Assignment Operators

Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
<<=	x <<= y	x = x << y
>>=	x >>= y	x = x >> y
>>>=	x >>>= y	x = x >>> y
&=	x &= y	x = x & y
^=	x ^= y	x = x ^ y
|=	x |= y	x = x | y
**=	x **= y	x = x ** y  */

/*=====================================*/


/*=====================================*/

