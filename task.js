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

