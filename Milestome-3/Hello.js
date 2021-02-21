// var num1 = 25;
// var num2 = "15.5";
// console.log(num1 + num2);

// var num = 5.7;
// var absuluteNumber = Math.floor(num);
// console.log((Math.random() * 1000).split("."));



// var age = [23, 28, 65, 30];
// age.unshift(45);
// // console.log(age)


// var num = 1;
// while (num < 10) {
//     console.log(num)
//     num = num + 1;
// }

// var num = 0;
// while (num < 100) {
//     console.log(num);
//     num++
// }


// var num = 100;
// while (num > 0) {
//     console.log(num);
//     num--
// }


// for (i = 0; i < 100; i++) {
//     console.log(i)
// }


// for (i = 100; i > 0; i--) {
//     console.log(i)
// }

// var num = 100;
// while (num > 10) {
//     console.log(num);
//     num--
// }


// var userName = 'junaid';
// switch (userName) {
//     case "jwolt":
//         console.log(userName)
//         break;
//     case "junaid":
//         console.log(userName);
//         break;
//     case "ersome":
//         console.log(userName)
//     default:
//         console.log("no name match")
// }


// var carName = "Toyota";
// switch (carName) {
//     case "BMW":
//         console.log("your care name is " + carName);
//         break;
//     case "Mercedice":
//         console.log("your care name is " + carName);
//         break;
//     case "Toyota":
//         console.log("your care name is " + carName);
//         break;
//     default:
//         console.log("your care name is " + carName, " unfortunately this car is not acceptable")
// }

// var car = "bmw";
// if (car.toUpperCase() === "BMW") {
//     console.log(car);
// } else {
//     console.log("valona")
// }


// var student = { name: "jamil", phone: 124653, email: "junaid65859@gmail.com", age: 23 }
// var phone = student;
// student.cenema = "fsdfsd"
// console.log(student)


// function inchToFeet(inch) {
//     return inch / 12;
// }

// console.log(inchToFeet(856))


// function leapYear(year) {
//     var leapYear = (year % 4 === 0) ? year + " is a leap year" : year + " is not a leap year";
//     return leapYear
// }

// var leapYear = leapYear(3947);
// console.log(leapYear);


// var factorial = 1;
// for (i = 0; i < 10; i++) {
//     var element = i * factorial;
//     factorial += element
//     console.log(factorial, i)
// }

// var factorial = 1;
// var work = 0;
// while (work < 10) {
//     var element = work * factorial
//     factorial += element;
//     console.log(work, factorial)
//     work++;
// }


// var factorial = 10;
// for (i = 10; i > 0; i--) {
//     var element = i * factorial;
//     factorial -= element
//     console.log(i, factorial)
// }

// var a = 5;
// var b = 7;
// var c = a;
// a = b;
// b = c;
// console.log("a", a, "b", b);

// let a = 1;
// let b = 2;
// [a, b] = [b, a];
// console.log("a", a, "b", b);

// let a = 1;
// let b = 2;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a", a, "b", b);

// var number = (Math.random() * 1000000).toFixed(0);

// console.log(parseInt(number));

// var minister = [300, 6482395636, 400, 500, 5686];
// var max = 0;
// for (var i = 0; i < minister.length; i++) {
//     var element = minister[i];
//     if (element > max) {
//         max = element;
//     }
// }
// console.log(max);

// var userName = ["jwolt", "jamil", "khurshed ahmed", "ali", "jgdfhgdfhdfguihdfuih"];
// var user = ''
// for (var i = 0; i < userName.length; i++) {
//     element = userName[i];
//     if (element.length > user.length) {
//         user = element
//     }
// }

// console.log(user);

// var userNames = [12, 18, 19, 12, 54, 10, 92, 18, 92];
// var uniqueName = [];
// for (var i = 0; i < userNames.length; i++) {
//     var element = userNames[i];
//     if (uniqueName.indexOf(element) == -1) {
//         uniqueName.push(element)
//     }
// }

// console.log(uniqueName);

var speech = "I am good person,     I don't snore at night.";
var count = 1;
for (var i = 0; i < speech.length; i++) {
    var word = speech[i];
    if (word == " " && speech[i - 1] != " ") {
        count++;
    }
}
console.log(count)