let data = {
    Sophia: {
    id: 33,
    study: [
    {
    primary:
    [
    { school_name: "ABC primary school" },
    { location: "Peters burg" }
    ]
    },
    {
    secondary:
    [
    { school_name: "ABC secondary school"
    
    },
    
    { location: "St Lorence" }
    ]
    },
    ]
    }
    };
// 1) How will you access Sophia’s secondary school location?
// solve
// console.log(data.Sophia.study[1].secondary[1].location);


// 02
let data1 =
[
{
"pHeroCourses": {
"course-x": "web development"
}
},
{
"pHeroCourses": {
"course-y": "phitron"
}
},
{
"pHeroCourses": {
"course-z": "acc"
}
},
{
"pHeroCourses": {
"course-xyz": "level-2"
},
"locationField": {
"en-US": {
"lat": 19.28563,
"lon": 72.8691
}
}
}
];
// 1) How will you access the value of the course-xyz field?
// console.log(data1[3].pHeroCourses['course-xyz']);
// outupt : 72.8691
// console.log(data1[3].locationField['en-US'].lon);

// 03
let activities = {
    activity1 : [
    {
    name : "listen on spotify",
    song_list: {
    
    song_1 : "abc",
    song_2 : "bcd"
    
    },
    id : 1
    },
    {
    name : "listen music through bot",
    
    song_list: {
    song_1 : "wxy",
    song_2 : "xyz"
    
    },
    id : 2
    }
    ]
    }
// output (abc)
// console.log(activities.activity1[0].song_list.song_1);
// output (xyz)
// console.log(activities.activity1[1].song_list.song_2);


// 04
let students = {
    2222: {
    
    name: "Jack",
    section: "C",
    class: "IX",
    address: {
    
    "building no": 12,
    "street" : "St. Jonson",
    "city" : "Petersburg",
    "country" : "UK"
    }
    
    },
    3333: {
    
    name: "Herry",
    section: "D",
    class : "X",
    address: {
    "building no" : 85,
    "street" : "DC road",
    "city" : "Kachukhet",
    "country" : "Bangladesh"
    }
    
    }
    }
/*
4) How will you display
a) Petersburg
b) Herry
*/ 
// a 
// console.log(students['2222'].address.city); 
// b
// console.log(students['3333'].name);


// 05
let instructor = {
    name: "Jhankar Mahbub",
    entrepreneur: true,
    additionalData: {
    writer: true,
    favoriteHobbies: ["travelling", "Coding"],
    books: ["programming er bolod to bos", "programming er coddogosti"],
    moreDetails: {
    favoriteBasketballTeam: "XYZ",
    isYoungest: true,
    hometown: {
    city: "ABC",
    state: "VW",
    },
    countriesLivedIn: ["Bangladesh", "New York"]
    }
    }
    };
/*
5) How will you display
a) programming er coddogosti
b) VW
c) Bangladesh
*/
// a--
// console.log(instructor.additionalData.books[1]);
// b--
// console.log(instructor.additionalData.moreDetails.hometown.state);
// c--
// console.log(instructor.additionalData.moreDetails.countriesLivedIn[0]);



// 06
const studentData = [

    {
    class: 10,
    details: [
    {
    studentId: '1',
    gradingDetails: [{ grade: 'A' }]
    },
    {
    studentId: '2',
    gradingDetails: [{ grade: 'B' }]
    }
    ]
    },
    {
    class: 11,
    details: [
    {
    studentId: 3,
    gradingDetails: [{ grade: 'B' }]
    },
    {
    studentId: 4,
    gradingDetails: [{ grade: 'D' }]
    }
    ]
    },
    ];
/*
6) How will you display
a) B
b) D
*/
// a--
// console.log(studentData[0].details[1].gradingDetails[0].grade);
// b--
// console.log(studentData[1].details[1].gradingDetails[0].grade);


// 07
let data3 = {
    data:[
    {
    bookId: 1,
    bookDetails: {
    name: "habluder adda",
    category: "XYZ",
    price: "20$",
    },
    bookCategory: "Basic",
    },
    {
    bookId: 2,
    bookDetails: {
    name: "gobluder adda",
    category: "ABC",
    price: "40$",
    },
    bookCategory: "Beginner",
    }
    ]
    };
/*
7) How will you display
a) habluder adda
b) Beginner
*/
// a--
// console.log(data3.data[0].bookDetails.name);
// b--
// console.log(data3.data[1].bookCategory);