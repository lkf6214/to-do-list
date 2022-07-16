//-------dom--------

// let boxEl = document.querySelector(".box .small__box"); //html에서 .box 가져다줘 라는 의미
// console.log(boxEl);

// let boxEl = document.querySelector(".box"); //맨 앞만 입력됨. 제일 첫번째 요소만 반환
// console.log(boxEl);

// html body에 추가 <!-- <div class="box" id="second-box">2</div> -->
// let boxEl = document.getElementById("second-box"); //~~~~~~~~~~~~~ 라는 의미
// console.log(boxEl);

// --49

// let boxEl = document.querySelector(".box");

// boxEl.classList.add("active");
// console.log(boxEl);

// console.log(boxEl.classList.contains("active"));

//--p50

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   alert("add event lisner");
// });

//--p52
//addEventListener(이벤트, 명령)--

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//   } else if (boxEl.classList.contains("skyblue")) {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//   } else {
//     boxEl.classList.add("orange");
//   }
// });
//---------------------------------------------
// let boxEl = document.querySelector(".box");
// let inputEl = document.getElementById("input");

// boxEl.addEventLisner("click", function () {
//   //   inputEl.setAttribute("placeholder", "아이디를 입력하세요");
//   inputEl.setAttribute("type", "password");
// });

// 왜 또 안도ㅣ니...?

// ------
// let boxEl = document.querySelector(".box");

// boxEl.addEventLisner("click", function () {
//   boxEl.textContent = "KDT";
// });

// searchInputEl.setAttribute("placeholder", "통합검색");
// ----
// let boxEl = document.querySelector(".box");
// console.log(boxEl.textContent);
// boxEl.textContent = "KDT";
// console.log(boxEl.textContent);

//-59실습

// let boxEl = document.querySelector(".box");

// boxEl.addEventListener("click", function () {
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//   } else if (boxEl.classList.contains("skyblue")) {
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//   } else {
//     boxEl.classList.add("orange");
//   }
// });

// // let boxEl = document.querySelector(".box");
// boxEl.classList.add("가나다라마바사");
// console.log(boxEl);
// -
// -
// -
// -
// -
// -
// --------------2-----------
// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log(boxOne);
// console.log(boxTwo);
// console.log(boxThree);

// let boxOneElement = document.querySelector(".box-1 .box-1__element");
// console.log(boxOneElement);

// let boxTwoElement = document.getElementById("boxTwo");
// console.log(boxTwoElement);
// -------3----------

// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log(boxOne);
// console.log(boxTwo);
// console.log(boxThree);

// boxOne.addEventListener("click", function() {

// }) //이름/명령 부여해줘야함

// boxOne.classList.add("orange");
// boxTwo.classList.add("skyblue");
// console.log(boxThree.classList.contains("coral"));
// boxThree.classList.remove("coral");

// -------4----------

// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log(boxOne);
// console.log(boxTwo);
// console.log(boxThree);

// boxOne.addEventListener("click", function () {
//   boxOne.classList.add("orange");
//   boxTwo.classList.add("skyblue");

//   console.log(boxThree.classList.contains("coral"));
//   boxThree.classList.remove("coral");
// }); //이름/명령 부여해줘야함. 클릭하면 어떤 기능이 일어난다

//---5----
// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log(boxOne);
// console.log(boxTwo);
// console.log(boxThree);

// let inputEl = document.querySelector("input"); //처음 만난 인풋만 가져온다.

// boxOne.addEventListener("click", function () {
//   //   --5-- inputEl.setAttribute("placeholder", "패스워드를 입력하세요.");
//   inputEl.setAttribute("value", "패스워드를 입력하세요.");
// });

//--6--
// let boxOne = document.querySelector(".box-1");

// let boxTwo = document.querySelector(".box-2");

// let boxThree = document.querySelector(".box-3");

// console.log(boxOne);
// console.log(boxTwo);
// console.log(boxThree);

// boxOne.addEventListener("click", function () {
//   boxOne.textContent = "KDT";
//   boxTwo.textContent = "뽀로로";
//   boxThree.textContent = "루피";
// });

// // 7  실습 다시!!!!

// let boxEl = document.querySelector(".box");
// console.log(boxEl);

// boxEl.addEventListener("click", function () {
//   //boxEl.classList.add("orange");
//   console.log(boxEl); //확인작업
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//     console.log(boxEl); //확인작업
//   } else if (boxEl.classList.contains("skyblue")) {
//     //스카이블루를 가지고 있니? 그렇다면..
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//     console.log(boxEl); //확인작업
//   } else {
//     boxEl.classList.add("orange");
//   }
// });

// // 7-1  실습 다시!!!!

// let buttonOne = document.getElementById("button-1"); //아이디 이름 들어가면됨
// let buttonTwo = document.getElementById("button-2");
// let inputEl = document.getElementById("input");
// let spanEl = document.querySelector("span");

// buttonOne.addEventListener("click", function () {
//   inputEl.setAttribute("placeholder", "아이디를 입력하세요"); //복잡한걸 바꾸는 셋에트리부트
//   SpanEl.textContent = "아이디를 입력해주세요.";
// });

// buttonTwo.addEventListener("click", function () {
//   let inputText;
//   inputText = inputEl.value;
//   spanEl.textContent = inputText;
// });

// // input.addEventListener("click", function () {
// //   input.textContent = "아이디를 입력하세요.";
// // });

// //내가 한거
// //   if (boxEl.classList.contains("orange")) {
// //     boxEl.classList.remove("orange");
// //     boxEl.classList.add("skyblue");
// //   } else if (boxEl.classList.contains("skyblue")) {
// //     boxEl.classList.remove("skyblue");
// //     boxEl.classList.add("orange");
// //   } else {
// //     boxEl.classList.add("orange");
// //   }
// // });

// // let inputEl = document.querySelector("input");
// // input.addEventListener("click", function () {
// //   input.textContent = "아이디를 입력하세요.";
// // });

//61 querySelectorAll(“요소 선택자“)
// let boxEls = document.querySelectorAll(".box");
// console.log(boxEls);
// boxEls.forEach(function (boxEl, index) {
//   //인수사용 짱 중요
//   boxEl.classList.add(`box_${index + 1}`); //백틱으로 바꾸는 이유? 숫자가 쭉 나와야하니까?
// });

// console.log(boxEls);

//실습9 7개 빨주노초파남보
let boxEls = document.querySelectorAll(".box");
console.log(boxEls);

boxEls.forEach(function (boxEl, index) {
  if (index % 7 === 0) {
    // boxEl.style.backgroundColor = "red"
    boxEl.classList.add(`box_1`);
  } else if (index % 7 === 0) {
    boxEl.classList.add(`box_2`); //인덱스매개변수할꺼니까 벡틱 사용. 왜?
  } else if (index % 7 === 1) {
    boxEl.classList.add(`box_3`);
  } else if (index % 7 === 2) {
    boxEl.classList.add(`box_4`);
  } else if (index % 7 === 3) {
    boxEl.classList.add(`box_5`);
  } else if (index % 7 === 4) {
    boxEl.classList.add(`box_6`);
  } else if (index % 7 === 5) {
    boxEl.classList.add(`box_7`);
  }
});

// buttonOne.addEventListener("click", function () {
//   button.classList.add("red");
// });

// let boxEl = document.querySelector(".box");
// console.log(boxEl);

// boxEl.addEventListener("click", function () {
//   //boxEl.classList.add("orange");
//   console.log(boxEl); //확인작업
//   if (boxEl.classList.contains("orange")) {
//     boxEl.classList.remove("orange");
//     boxEl.classList.add("skyblue");
//     console.log(boxEl); //확인작업
//   } else if (boxEl.classList.contains("skyblue")) {
//     //스카이블루를 가지고 있니? 그렇다면..
//     boxEl.classList.remove("skyblue");
//     boxEl.classList.add("orange");
//     console.log(boxEl); //확인작업
//   } else {
//     boxEl.classList.add("orange");
//   }
// });
