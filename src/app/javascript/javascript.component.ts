import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  Title_Java = 'Javascript';

  constructor() {
  }

  ngOnInit() {
    document.getElementById("demo2").innerHTML = "ngOnInit";



    var pi = 3.14;
    var person = "John Doe";
    var answer = 'Yes I am!';
    document.getElementById("demo").innerHTML = pi + "<br>" + person + "<br>" + answer + "<br>" + "<h1>Mohamed </h1>";
  }


  myFunction() {
    document.getElementById('demo').innerHTML = 'call my function';
  }


  myFunction2() {
    var x, y, z;  // Statement 1
    x = 5;        // Statement 2
    y = 6;        // Statement 3
    z = x + y;    // Statement 4

    document.getElementById("demo").innerHTML = "The value of z is " + z + ".";
  }




  myFunction3() {
    var x, y, z;  // Statement 1
    x = 10;
    y = 20;
    document.write(x + y);
  }

  myFunction4() {
    var carName;
    document.getElementById("demo").innerHTML = carName;
  }


  myFunction5() {
    var answer1 = "It's alright";
    var answer2 = "He is called 'Johnny'";
    var answer3 = 'He is called "Joh  nny"';

    document.getElementById("demo").innerHTML =
      answer1 + "<br>" +
      answer2 + "<br>" +
      answer3;
  }

  myFunction6() {
    var cars = ["Saab", "Volvo", "BMW"];

    document.getElementById("demo").innerHTML = cars[0] + "-" + cars[2];
    /*مفهوم المصفوفات
    مصفوفة: تعني Array في البرمجة.   المصفوفة عبارة عن كائن يحتوي مجموعة عناصر من نفس النوع تتخزن بجوار بعضها في الذاكرة.
    بمعنى آخر المصفوفة عبارة عن كائن يمكنه تخزين عدة قيم من نفس النوع.
    عناصر المصفوفة تتميز عن بعضها من خلال رقم محدد يعطى لكل عنصر يسمى index. أول عنصر فيها يتم تخزينه في الـ index رقم 0.
    عدد عناصر المصفوفة ثابت, أي بمجرد أن قمت بتحديده لا يمكنك تغييره من جديد, لكنك تستطيع تغيير قيم هذه العناصر متى شئت */
  }



  myFunction7() {

    var person = {
      firstName: "John",
      lastName: "Doe",
      age: 50,
      eyeColor: "blue"
    };
    document.getElementById("demo").innerHTML = person.firstName + " is " + person.age + " years old.";
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
   الخصائص Attributes فإنه سيتم تمثيلها بما يسمى المتغيراتVariables برمجياً، وعندما نأتي إلى 
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
    var x;
    var person = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
    //person = null;

    document.getElementById("demo").innerHTML =
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

    if (t == "Add") {

      return p1 + p2;

    }
    else {

      return p1 * p2;


    }
  }




  myFunction11() {

    var x = "We are the so-called \"Vikings\" from the north.";
    document.getElementById("demo3").innerHTML = x;


  }

  myFunction12() {
    var x = 'It\'s alright.';
    document.getElementById("demo3").innerHTML = x;
  }

  myFunction13() {
    var x = "The character \\ is called backslash.";
    document.getElementById("demo3").innerHTML = x;
  }

  myFunction14() {
    var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    document.getElementById("demo4").innerHTML = txt.length.toString();
  }

  myFunction15() {

    var str = "Please locate where 'locate' occurs!";
    var pos = str.indexOf("locate");
    document.getElementById("demo4").innerHTML = pos.toString();
  }
  myFunction16() {

    var str = "Please locate where 'locate' occurs!";
    var pos = str.lastIndexOf("locate");
    document.getElementById("demo4").innerHTML = pos.toString();
  }
  myFunction17() {

    var str = "Apple, Banana, Kiwi";
    var res = str.slice(-12, -6);
    document.getElementById("demo4").innerHTML = res;
  }

  myFunction18() {

    var str = "Apple, Banana, Kiwi";
    var res = str.substr(7, 6);
    document.getElementById("demo4").innerHTML = res;
  }


  myFunction19() {
    var str = "Apple, Banana, Kiwi";
    var res = str.substr(-4);
    document.getElementById("demo4").innerHTML = res;
  }



  myFunction20() {
    var str = document.getElementById("demo4").innerHTML;
    var txt = str.replace("Kiwi", "Kiwi Kiwi Kiwi");
    document.getElementById("demo4").innerHTML = txt;
  }

  myFunction21() {
    var str = "Microsoft Please visit Microsoft and Microsoft ";
    var txt = str.replace(/Microsoft/g, "MM");
    document.getElementById("demo4").innerHTML = txt;
  }


  myFunction22() {
    var text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.toUpperCase();
  }
  myFunction23() {
    var text = document.getElementById("demo4").innerHTML;
    document.getElementById("demo4").innerHTML = text.toLowerCase();

  }
  myFunction24() {
    var text1 = "Mohamed";
    var text2 = "Abu Saif";
    var text3 = text1.concat(" Mostafa ", text2);
    document.getElementById("demo4").innerHTML = text3;
  }
  myFunction25() {
    var str = "X       Hello    World!       X";
    document.getElementById("demo4").innerHTML = str.trim();

  }
  myFunction26() {
    var str = "HELLO WORLD";
    document.getElementById("demo4").innerHTML = str.charAt(0);

  }
  myFunction27() {
    var str = "HELLO WORLD";
    document.getElementById("demo4").innerHTML = str.charCodeAt(0).toString();
  }
  myFunction28() {
    var str = "HELLO WORLD";
    document.getElementById("demo4").innerHTML = str[0];
  }

  myFunction29() {
    var str = "Hello";
    var arr = str.split("");
    var text = "";
    var i;
    for (i = 0; i < arr.length; i++) {
      text += arr[i] + "<br>"
    }
    document.getElementById("demo4").innerHTML = text;
  }


  myFunction30() {
    var x = 9.656;
    document.getElementById("demo5").innerHTML =
      x.toFixed(0) + "<br>" +
      x.toFixed(2) + "<br>" +
      x.toFixed(4) + "<br>" +
      x.toFixed(6);
  }


  myFunction31() {
    var x = 9.656;
    document.getElementById("demo5").innerHTML =
      x.toPrecision() + "<br>" +
      x.toPrecision(2) + "<br>" +
      x.toPrecision(4) + "<br>" +
      x.toPrecision(6);
  }

  myFunction32() {
    var x = new Date("2017-09-30");
    document.getElementById("demo5").innerHTML = Number(x).toString();
  }

  myFunction33() {
    document.getElementById("demo5").innerHTML =
      parseInt("10") + "<br>" +
      parseInt("10.33") + "<br>" +
      parseInt("10 6") + "<br>" +
      parseInt("10 years") + "<br>" +
      parseInt("years 10");
  }

  myFunction34() {
    var cars = ["Saab", "Volvo", "BMW"];
    document.getElementById("demo6").innerHTML = cars.toString();
  }
  myFunction35() {
    var cars = ["Saab", "Volvo", "BMW"];
    cars[0] = "Opel";
    document.getElementById("demo6").innerHTML = cars.toString();
  }

  myFunction36() {
    var person = { firstName: "John", lastName: "Doe", age: 46 };
    document.getElementById("demo6").innerHTML = person["firstName"];
  }

  myFunction37() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var last = fruits[fruits.length - 1];
    document.getElementById("demo6").innerHTML = last;
  }

  myFunction38() {
    var fruits, text, fLen, i;
    fruits = ["Banana", "Orange", "Apple", "Mango"];
    fLen = fruits.length;

    text = "<ul>";
    for (i = 0; i < fLen; i++) {
      text += "<li>" + fruits[i] + "</li>";
    }
    text += "</ul>";

    document.getElementById("demo6").innerHTML = text;
  }


  myFunction39() {
    var fruits, text;
    fruits = ["Banana", "Orange", "Apple", "Mango"];

    text = "<ul>";
    fruits.forEach(myFunction);
    text += "</ul>";
    document.getElementById("demo6").innerHTML = text;

    function myFunction(value) {
      text += "<li>" + value + "</li>";
    }

  }



  myFunction40() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.push("Lemon");
    // fruits[fruits.length] = "Lemon";
    document.getElementById("demo6").innerHTML = fruits.toString();


  }

  myFunction41() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo6").innerHTML = Array.isArray(fruits).toString();
  }

  /* var fruits = ["Banana", "Orange", "Apple", "Mango"];
   document.getElementById("demo").innerHTML = isArray(fruits);
   
   function isArray(myArray) {
       return myArray.constructor.toString().indexOf("Array") > -1;
   } */


  myFunction42() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    document.getElementById("demo6").innerHTML = fruits.join(" * ");
  }

  myFunction43() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();
    document.getElementById("demo6").innerHTML = fruits.toString();
  }

  myFunction44() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.shift();
    document.getElementById("demo6").innerHTML = fruits.toString();
  }
  /*
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  document.getElementById("demo1").innerHTML = fruits;
  document.getElementById("demo2").innerHTML = fruits.shift();
  document.getElementById("demo3").innerHTML = fruits;
  */

  myFunction45() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];

    fruits.unshift("Lemon");
    document.getElementById("demo6").innerHTML = fruits.toString();

  }
  myFunction46() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.splice(2, 0, "Lemon", "Kiwi");
    document.getElementById("demo6").innerHTML = fruits.toString();
  }
  /*fruits.splice(2, 2, "Lemon", "Kiwi");
  fruits.splice(0, 1);        // Removes the first element of fruits*/
  myFunction47() {
    var myGirls = ["Cecilie", "Lone"];
    var myBoys = ["Emil", "Tobias", "Linus"];
    var myChildren = myGirls.concat(myBoys);
    document.getElementById("demo6").innerHTML = myChildren.toString();
  }

  myFunction48() {
    var arr1 = ["Cecilie", "Lone"];
    var arr2 = ["Emil", "Tobias", "Linus"];
    var arr3 = ["Robin", "Morgan"];
    var myChildren = arr1.concat(arr2, arr3);
    document.getElementById("demo6").innerHTML = myChildren.toString();
  }
  myFunction49() {
    var arr1 = ["Cecilie", "Lone"];
    var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
    document.getElementById("demo6").innerHTML = myChildren.toString();

  }

  myFunction50() {
    var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
    var citrus = fruits.slice(3);
    //var citrus = fruits.slice(1,3);

    document.getElementById("demo6").innerHTML = fruits + "<br><br>" + citrus;
  }

  myFunction51() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    document.getElementById("demo6").innerHTML = fruits.toString();
  }
  myFunction52() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.sort();
    fruits.reverse();
    document.getElementById("demo6").innerHTML = fruits.toString();
 
  }
  myFunction53() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return a - b});
    document.getElementById("demo6").innerHTML = points.toString();
  }

  myFunction54() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b - a});
    document.getElementById("demo6").innerHTML = points.toString();
  }

  myFunction55() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return 0.5 - Math.random()});
    document.getElementById("demo6").innerHTML = points.toString();
 
  }

    myFunction56() {
      var points = [40, 100, 1, 5, 25, 10];
      points.sort(function(a, b){return a-b});
      document.getElementById("demo6").innerHTML = points[0].toString();
 
  }
  myFunction57() {
    var points = [40, 100, 1, 5, 25, 10];
    points.sort(function(a, b){return b-a});
    document.getElementById("demo6").innerHTML = points[0].toString();

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

