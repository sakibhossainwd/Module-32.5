/*
২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও।
একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান 
তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। 
*/ 
// 02 - solve
const number1 = 10;
const number2 = 20;
const result = number1 + number2;
const dynamicLineAddition = `Here is the addition ${number1} + ${number2} = ${result}`;
// console.log(dynamicLineAddition);
const user = {
    name: 'Sakib Hossain',
    bacth: 06,
    number: 0170000000
};
const dynamicObject = `This is my Name: ${user.name} and my number: ${user.number}`;
// console.log(dynamicObject);



/*
৩.১ একটা প্যারামিটার ওয়ালা arrow ফাংশন ডিক্লেয়ার করো।
এবং সেই ফাংশনের কাজ হবে তুমি কোন ইনপুট দিলে সেই ইনপুট
সংখ্যাকে ৫ দিয়ে ভাগ করে আউটপুট দিবে। 
*/
// 03.1 - solve
const fiveDivision = (number3) => number3 / 5;
// console.log(fiveDivision(20));

/*
৩.২ তুমি দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে।
সেই ফাংশনের ভিতরে কাজ হবে। প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে
তারপর যোগফল দুইটা গুণ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো|
*/
// 03.2 - solve
const multiplication = (number4, number5) => {
    const sum = number4 + 2;
    const multiplied = sum * (number5 + 2);
    return multiplied;
} ; 
const result1 = multiplication(10, 20);
// console.log(result1);

/*
৩.৩ এইবার তিনটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করো।
যেই ফাংশনের কাজ হবে তিনটা প্যারামিটার নিয়ে সেই তিনটা প্যারামিটারকে 
গুণ করে সেই রেজাল্ট রিটার্ন করবে।
*/
// 03.3 - solve
 const multiplication1 = (num1, num2, num3) => num1 * num2 * num3;
//  console.log(multiplication1(5, 10, 20));

/*
৩.৪ এইবার দুইটা প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন নিবে।
ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা
ইনপুট প্যারামিটার এর সাথে ২ যোগ করবে তারপর যোগফল দুইটা গুণ করবে।
ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
*/
// 03.4 - solve
const multiplication2 = (num4, num5) => {
    const sum1 = num4 + 2;
    const sum2 = num5 + 2;
    const multiplied = sum1 * sum2;
    return multiplied;
}
// console.log(multiplication2(10, 20));

/*
৫. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর 
উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৫ দিয়ে গুন্ করে গুনফল আরেকটা
array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
*/
// 05 - solve
const numberArray = [10, 20, 30, 40, 50];
const multiplication3 = numberArray.map(num => num * 5 );
// console.log(multiplication3);

/*
৬. [ চ্যালেঞ্জিং। গুগলে সার্চ দিয়ে বের করো ] অনেকগুলা সংখ্যার একটা array 
থেকে শুধু বিজোড় সংখ্যা বের করে নিয়ে আসার জন্য filter ইউজ করো 
*/
// 06 - solve
const numberArray1 = [10, 11, 14, 15, 19];
const filterArray = numberArray1.filter(num => num % 2 === 1);
// console.log(filterArray);

/*
৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে।
সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে
find দিয়ে বের করো। 
*/
// 07 - solve
const products = [
    {name: 'Computer', price: 80000},
    {name: 'Laptop', price: 70000},
    {name: 'Mobile', price: 5000}
];
const prices = products[0].price;
// console.log(prices);
const findBigPrice = products.find(product => product.price === 5000);
// console.log(findBigPrice);

/*
৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল
 হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। 
*/
// 08 - solve
const person = { name: 'Sakib Hossain', age: 20, number: 017000000};
const {name, age} = person;
// console.log(name, age);

/*
৯. [চ্যালেঞ্জিং] array এর destructuring করবে আর সেটা করার জন্য তুমি এরে
এর থার্ড পজিশন এর উপাদান কে destructuring করে 'three' নামক একটা
ভেরিয়েবল এ রাখবে। 
*/
// 09 - solve
const numberArray2 = [1, 2, 3, 4, 5];
const [ , , third] = numberArray2;
// console.log(third);

/*
১০. তিনটা প্যারামিটার ওয়ালা একটা ফাংশন লিখবে। যেই ফাংশনের কাজ হবে তিনটা
প্যারামিটার নিয়ে সেই তিনটা প্যারামিটার এর যোগ করে যোগফল রিটার্ন করবে।
আর থার্ড প্যারামিটার এর একটা ডিফল্ট ভ্যালু থাকবে। সেটা হবে ৭। 
*/
// 10 - solve
const addition1 = (num6, num7, num8 = 7) => num6 + num7 + num8;
// console.log(addition1(10, 20));

/*
১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি
এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর
মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো।
এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )
*/
// 11 - solve
const userMe = {
    name: 'sakib Hossain',
    age: 20,
    body:{
        hight: 5.6,
        wight: '80kg',
        type:{
            skin: 'dark',
            personality:{
                hobby: 'football',
                friends: ['shorab', 'jahangir','jakit', 'soboj']
            }
        }
    }
};
console.log(userMe.body.typ?.skin);