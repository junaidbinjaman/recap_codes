// const age = [12, 65, 17, 24, 19, 32];
// const age2 = [15, 15, 12];
// const age3 = [25, 36, 22, 29]
// const allAge = age.concat(age2).concat([99]).concat(age3)

// console.log(allAge);


// class Student {
//     constructor(id, id2, name) {
//         this.id = id + id2
//         this.name = name
//     }
// }

// const student1 = new Student(12, 12, 'Rashed')
// const student2 = new Student(32, 8, 'Jual Khan')
// console.log(student1.id)
// console.log(student2.id)


// class Parent {
//     constructor() {
//         this.father = "Ali Ahmer burhan"
//     }
// }


// class Child extends Parent {
//     constructor(name) {
//         super();
//         this.name = name;
//     }
// }

// const baby = new Child("Jwolt");
// console.log(baby)

// const baby2 = new Child('Ersome');
// console.log(baby2)


// const person = { name: "Jack williom", are: 17, job: "facebooking", gfName: "sama", address: "kochu khet", phone: "0189467235", friends: ["tom Hance", "tom Kruse", "Joil", "top yean"] }

// const gfName = person.gfName
// const phone = person.phone;
// console.log(gfName)
// console.log(phone)

// const { phone, gfName, friends } = person;

// console.log(phone)
// console.log(gfName)
// friends.forEach(friend => console.log(friend))


// const friends = ['sakib khan', 'arman kan', 'amir khan', 'shahkukh khan'];
// const [aaa, bbb, ...ccc] = friends
// console.log(aaa, bbb)
// console.log(...ccc)

// const complex = {
//     firstName: 'jwolt',
//     lastName: 'junaid',
//     info: {
//         address: 'uttara',
//         address2: 'Dhaka',
//         phone: '01894638745'
//     }
// }

// const { phone } = complex.info
// console.log(phone);


// const age = undefined;
// if (age) {
//     console.log("condition is true")
// } else {
//     console.log("condition is false")
// }

// let age = undefined;
// console.log(age);

// var age = [];
// console.log(age[0])

// var num = "12";

// if (num === 12) {
//     console.log("i got ya")
// } else {
//     console.log("not clear yet");
// }

// const ages = [12, 18, 30, 20, 14, 17, 12, 30, 20, 30, 909];
// // ages.forEach(age => console.log(age))

// // for (i = 0; i < ages.length; i++) {
// //     const age = ages[i];
// //     console.log(age)
// // }

// // const are = ages.filter(age => age > 29)
// // console.log(are)

// const age = ages.filter(age => age > 29);
// console.log(age)


// const friendsNames = ['rahul', 'kabir', 'AMINNUL', 'RASHED ZAMAN'];
// const largeNames = friendsNames.filter(name => name.length > 4)
// console.log(largeNames);

// function main() {
//     var name = 'jwolt'

//     function get() {
//         console.log(name)
//     }
//     get()
// }

// main();


// function main() {
//     var name = 'ersome';

//     return function get() {
//         console.log(name)
//     }
//     get();
// }

// main();

// function stopWatch() {
//     let count = 0;
//     return function() {
//         count++;
//         return count
//     }
// }

// const watch = stopWatch();
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())

// const stop = stopWatch();
// console.log(stop())
// console.log(stop())
// console.log(stop())
// console.log(watch())


// function stopWatch() {
//     let count = 0;
//     return function() {
//         return count++;
//     }
// }

// const watch = stopWatch();
// console.log(watch())
// console.log(watch())
// console.log(watch())
// console.log(watch())


// const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// // const parts = nums.slice(2, 4)
// const parts = nums.splice(2, 3, 77, 88, 99)
// console.log(parts)
// console.log(nums)


// const str = "Hello everyone I am jwolt. I am a very good person";

// const divider = str.split(" ");
// console.log(divider[1])


// const normalPerson = {
//         firstName: "Rahim",
//         lastName: "Uddin",
//         salary: 16000,
//         getFullName: function() {
//             console.log(this.firstName, this.lastName)
//         },
//         charge: function(amount, tip, tax) {
//             console.log(this)
//             this.salary = this.salary - amount - tip - tax;
//             return this.salary
//         }
//     }
//     // normalPerson.charge(1000)
//     // normalPerson.charge(100)
//     // console.log(normalPerson.salary)

// const heroPerson = {
//     firstName: "Hero",
//     lastName: "Balam",
//     salary: 25000,
// }


// const friendlyPerson = {
//     firstName: "Hero",
//     lastName: "Golam",
//     salary: 2500,
// }

// const heroCharge = normalPerson.charge.bind(heroPerson);
// heroCharge(2000)
// heroCharge(2000)

// console.log(heroPerson.salary)
// console.log(normalPerson.salary)

// normalPerson.charge.apply(heroPerson, 2000, 100, 10);
// normalPerson.charge.call(heroPerson, 9000, 900, 90);
// normalPerson.charge.call(heroPerson, 7000, 700, 70);
// console.log(heroPerson.salary)

// normalPerson.charge.apply(heroPerson, [300, 300, 30])
// console.log(heroPerson.salary)


// class Person {
//     constructor(firstName, lastName, salary) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary
//     }
// }


// const heroPerson = new Person('hero', 'Balam', 25000);
// console.log(heroPerson);

// const friendlyPerson = new Person('hero', 'golam', 3000);
// console.log(friendlyPerson);


// const myObj = {
//         name: 'Kuddus Ali',
//         getFullName: function() {
//             console.log(this)
//             return this.name
//         }
//     }
//     // myObj.getFullName()

// const anotherObj = {
//     name: 'Biddut Ali'
// }

// anotherObj.getFullName = myObj.getFullName
// console.log(anotherObj)
// anotherObj.getFullName


console.log(111)
setTimeout(doSomething, 9000)
console.log(333)


function doSomething() {
    console.log(222)
}