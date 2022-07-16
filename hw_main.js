// console.log("window");

//single element

// console.log(document.getElementById("todo-form")); //가능1
// const form = document.getElementById("todo-list"); //가능2
// console.log(form);
// const form = document.querySelector("todo-form"); //가능3
// console.log(form);

//multiple element
// console.log(document.querySelectorAll(".item")); //가능1
// console.log(document.getElementsByClassName("item")); //가능2 무조건 클래스만 불러옴
// console.log(document.getElementsByTagName("li"));

//--시작
// const todos = document.querySelector("#todo-list");
// console.log(todos);
// todos.remove();
// todos.style.background = "#F5F5F5";
// todos.lastElementChild.remove(); //4.할일 삭제
// todos.firstElementChild.textContent = "단기목표"; // 작성했던 1.할일-> 단기목표 글자 변경
// todos.firstChild.textContent = "목표 달성!"; //작성했던 1.할일 위에 글자 추가

// const button = document.querySelector(".submit");
// console.log(button); //확인작업

//---버튼
// button.addEventListener("click", function () {
//   e - preventDefault(); //실행되지 않고 페이지가 새로고침 되지 않게 함.
//   console.log("clicked!!!"); 누르는 순간 있다가 사라짐
//   e-target.style.color = "red"
// });

//정리하고 다시

const todos = document.querySelector("#todo-list");
const button = document.querySelector(".submit");
const todoInput = document.querySelector("#todo-input");
const msg = document.querySelector("#msg");
button.addEventListener("click", onSubmit);

function onSubmit(e) {
  e - preventDefault();
  if (todoInput.value === "") {
    msg.style.display = "block"; //왜 안나오지? 2
    setTimeout(() => (msg.style.display = "none"), 2000);
    return;
  }
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));
  //   console.log(li); 안된다 왜? 1
  li.classList.add("item");
  todos.appendChild(li);
  todoInput.value = "";
}

// 52줄 - 작성하고 저장했을 때 todolist에 추가하는 방법을 모르겠어요.
// 46줄 msg 안나오는 이유는 무엇인가요..?
