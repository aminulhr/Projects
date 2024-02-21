// *******************************Variable************************ 
// # 5 step for variable
//          1. var
//          2. Keyword (name)
//          3. =
//          4. any value
//          5. ; (semicolne)

// # 3 type varible
// 1 numaric: সংখ্যা
// 2 string: বর্ন্ । [ ডাবল কোটেশন ব্যবহার করতে হবে]
// 3 Boolean: True or faslse

// # Variable name:  
// js এর keyword গুলো কে variable name হিসাবে ইউস করা যাবে না ।
// Variable  এর নাম এক শব্দের হবে । 
// নামের আগে সংখ্যা বসবে না । পরে বসবে । 
// একাধিক শব্দ থাকলে ক্যামেলকেইস ( শব্দের ১ম অক্ষর বড় হাতের)  ইউস করবো। 


// -------*********** Type of Variable  *********----------
// ********************1 numaric************************************
//# 2type of numbar: Integar( purno Shonkha), floate/Decimaal ( doshomic shonkha)
var age = 21;
var heitht = 5.6;
var book = 8;
var price = 100;
var totlaPrice = book * price;
console.log(totlaPrice);
var totalBooks = 8000;
var qBooks = 80;
var parBook = totalBooks / qBooks;
console.log(parBook);


// note: 2  String যে নো শব্দ বা বর্ণ ডাবল কোটেশন ব্যবহার করতে হবে।
var name = 'Aminul Haque'
var village = 'surasram'

// 3 Boolean: True or false 
var pass = true
var serious = false

// console.log(age);
// console.log(village);
// console.log(book);
// console.log(name);
// console.log(age+book+village);

// ******** variable declearation******
var penPrice = 10; 
// console.log(penPrice);

// variable value update
penPrice = 30;

// add someting value to the exsting value 
var price1 = 31;
var price2 = 10;
// price1 = price1 + 10;
console.log(price1);

// variable shorthand
// note:  (+=) মানে বুঝায় এই ভেলুর সাথে কোনো যোগ করা 
price1 += 20;
// console.log(price1);

// note:  ++ means adding 1 to the existing value
price1++;

// note: # সংখ্যাকে যদি ডাবল কোটেশনে রাখা হয় তবে সেটা আর সংখ্যা থাকে না string হয়ে যায়।
var price3 = '100'; 
console.log(price3);

//note: কোনো সংখ্যা srting হিসাাব থাকলে, নাম্বারে কনভার্ট করার করার জন্য parseInt() ব্যবহার করতে হবে
var priceNumbar = parseInt(price3);
console.log(priceNumbar);

//note: কোনো দশমিক সংখ্যা srting হিসাাব থাকলে, নাম্বারে কনভার্ট করার করার জন্য parseFloat() ব্যবহার করতে হবে

var gpa = '4.42';
var gpaNumbar = parseFloat(gpa);
console.log(gpa);
console.log(gpaNumbar);


