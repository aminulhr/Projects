
// note: array মানে হলো সারি
// 1: Array লিখতে হয় variable এর মতে ।

// ২: Array 3rd barket [] এর মধ্যে রাখতে  হয় । এবং প্রতিটার মাঝে একটা করে কমা (,) িদিতে হয়।

// ৩: Array তে একাধিক জিনিস রাখা যায়।

// ৪: array এর প্রতিটা উপাদান(Elements) এর একেকটা  পজিশন/index  থাতে । যা শুরু হয় শুন্য (0) দিয়ে। 

// এরের এর ভিতরে কয়টা উপাদান আছে সেটা বুঝার জন্য .lenth ব্যবহর করা হয়।
var numbers = [45, 68, 56, 89, 98, 100,300];
console.log(numbers.length);

var numbers = [45, 68, 56, 89, 98];
// 1 get element value by index
var element = numbers[2];
console.log(element);

// *********index*********


// 2 set elements value by index:
numbers[0] = 77;
numbers[1]= 100;
console.log(numbers);

// 3 find index of an element:
var possitionIndex = numbers.indexOf(100);
console.log(possitionIndex);

// # note কোনো একটা এরের মাঝে নতুন উপাদান পুশ করার জন্য। এরের নাম . (ডট) পুশ: numbars1.push(200)  
// note: array এর মধ্যে নতুন উপাদান এড করার জন্য "puse" করতে হয়।
var numbers1 = [45, 56, 89, 56, 52];
var names = ['Aminul','haque' ];
numbers1.push(999);
names.push('Rana');
names.pop();
names.unshift('Rana');
names.shift();
names.unshift('Rana');
console.log(numbers1);
console.log(names);

// note: use "pop" to get element । array এর মধ থেকে কোনো উপাদান বের করার জন্য "pop" ট্যাগ ইউস করতে হয়।
var numbers2 = [100, 200, 300, 400, ];
numbers2.pop();
console.log(numbers2);

// ********************************************Home work***************
// How to remove 1st element in the array



var rostGiven =0;
while(rostGiven < 7) {
    console.log('Rose Den,Plese!!')
    console.log(rostGiven);
    rostGiven++;


}