// const pororo = {
//   name: "뽀로로",
//   height: 70,
//   weight: 50,
//   gender: "None",
//   //   say: function () {
//   //     console.log("뽀로로가 말을 합니다.");
//   //   },

//   say() {
//     console.log("뽀로로가 말을 합니다.");
//   },
// };

// pororo.say();
// // for (let key in pororo) {
// //   pororo[key];
// //   console.log(pororo[key]);
// // }

// ------------p15this----------------

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`),
//   console.log;
// }

// let boy = {
//   name: "Justin",
//   sayHello,
// };

// let girl = {
//   name: "Anna",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

//------------p19실습------------

// function showHeight() {
//   console.log(this.height);
// }

// function showName() {
//   console.log(this.name);
// }

// const pororo = {
//   name: "뽀로로",
//   height: 77,
//   showName,
//   showHeight,
// };

// const loopy = {
//   name: "루피",
//   height: 80,
//   showName,
//   showHeight,
// };

// pororo.showName();
// pororo.showHeight();
// 왜안돼................

//-----=>화살표함수-------

//---p32 생성자함수-----

// function Fruits(name, price) {
//   this.name = name;
//   this.price = price;
//   this.showPrice = function () {
//     console.log(`${this.name}의 가격은 ${this.price}원 입니다.`);
//   };
// }
// let orange = new Fruits("오렌지", 3000);
// let dragonFruit = new Fruits("용과", 2500);
// let banana = new Fruits("바나나", 2000);
// let pineApple = new Fruits("파인애플", 5000);

// orange.showPrice();
// dragonFruit.showPrice();
// banana.showPrice();
// pineApple.showPrice();

// //----33실습---
// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showInpo = function () {
//     //메소드선언!!
//     console.log(
//       `KDT 참여자의 이름은 ${this.name}이고 성별은 ${this.gender}입니다.`
//     );
//   };
// }

// let EJ = new Kdt("의진", "여성"); //new 꼭쓰기!! 안쓰면 빈값 들어감!!!
// let JH = new Kdt("지현", "여성");

// EJ.showInpo();
// JH.showInpo();

//----Dom
