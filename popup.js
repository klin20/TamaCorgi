var startTamaCorgi = document.getElementById('start');
var toDoList = document.getElementById('todo');
var walkAnim = document.getElementById('walk');
var giveLove = document.getElementById('love');
var hearts = document.getElementById('hearts');
var animation = document.getElementById('walk-anim')
var counterDisplayElem = document.getElementById('counter');

startTamaCorgi.addEventListener('click', function() {
	document.getElementById('title').style.display = 'none';
    startTamaCorgi.style.display = 'none';
    document.getElementById('intro').style.display ='none';
	alert("welcome to tamacorgi! a digital pet corgi named georgie that you take care of by giving love and completing tasks off your to-do list! for every task that you finish (check), you'll get +3 heart points. if you're having trouble finishing tasks, georgie will give you simple tasks to do (stretch, drink water, etc) for +2 heart points. and lastly, if you give georgie some ~love~ by hovering over them, you get +1 heart points. enjoy! (bark bark!)")
	document.getElementById('heart-counter').style.display = "block";
    walkAnim.style.display = 'block';
	toDoList.style.display = 'block';
},false);

// form.addEventListener('submit', (event) => {
// 	// alert("that's a great name!");
// 	alert("welcome to tamacorgi! a digital pet corgi that you take care of by giving love and completing tasks off your to-do list! for every task that you finish (check), you'll get +3 heart points. if you're having trouble finishing tasks, your corgi will give you simple tasks to do (stretch, drink water, etc) for +2 heart points. and lastly, if you give your corgi some love by hovering over them, you get +1 heart points. enjoy! (bark bark!)")
// },false);

// https://medium.com/clarusway/making-a-todo-list-with-html-css-and-javascript-154839b770b6
var count = 0;

const todoObjectList = [];

class Todo_Class {
    constructor(item){
        this.ulElement =item;
    } 

    add() {
        const todoInput = document.querySelector("#input").value;
        if (todoInput == "") {
            alert("bark! make sure you type in a task!") 
        } else {
            const todoObject = {
                id : todoObjectList.length,
                todoText : todoInput,
                isDone : false,
            }

	        todoObjectList.unshift(todoObject);

	        this.display();
	        document.querySelector("#input").value = '';
        }
    }

    done_undone(x) {
        const selectedTodoIndex = todoObjectList.findIndex((item)=> item.id == x);
        // console.log(todoObjectList[selectedTodoIndex].isDone);
        todoObjectList[selectedTodoIndex].isDone == false ? todoObjectList[selectedTodoIndex].isDone = true : todoObjectList[selectedTodoIndex].isDone = false;
        this.display();
    }

    deleteElement(z) {
        const selectedDelIndex = todoObjectList.findIndex((item)=> item.id == z);

        todoObjectList.splice(selectedDelIndex,1);

        this.display();
    }


    display() {
        this.ulElement.innerHTML = "";

        todoObjectList.forEach((object_item) => {

            const liElement = document.createElement("li");
            const delBtn = document.createElement("i");

            liElement.innerText = object_item.todoText;
            liElement.setAttribute("data-id", object_item.id);

            delBtn.setAttribute("data-id", object_item.id);
            delBtn.classList.add("far", "fa-trash-alt");

            liElement.appendChild(delBtn);
            
            delBtn.addEventListener("click", function(e) {
                const deleteId = e.target.getAttribute("data-id");
                myTodoList.deleteElement(deleteId);
            })
            
            liElement.addEventListener("click", function(e) {
                const selectedId = e.target.getAttribute("data-id");
                myTodoList.done_undone(selectedId);
            })

            if (object_item.isDone) {
                liElement.classList.add("checked");
                count += 3;
               	counterDisplayElem.innerHTML = count;
            }

            this.ulElement.appendChild(liElement);
        })
    }
} 


////-----MAIN PROGRAM------------
const listSection = document.querySelector("#todoList");

myTodoList = new Todo_Class(listSection);


document.querySelector("#add").addEventListener("click", function() {
    myTodoList.add();
})

setInterval(function(){ 
    Array.prototype.random = function () {
      return this[Math.floor((Math.random()*this.length))];
    }

    var newTask = Array("drink water", "go on a walk", "eat a snack", "stretch", "listen to a new song", "message a friend", "watch a move");

    var txt;
    var r = confirm("you have a new task! " + newTask.random() + " to earn +2 heart points if you complete it :)");
    if (r == true) {
      count += 2;
      counterDisplayElem.innerHTML = count;
    } else {
      txt = "whomp whomp :(";
    } }, 50000);

animation.addEventListener('mouseenter', function() {
	walkAnim.style.display = 'none';
	giveLove.style.display = 'block';
	hearts.style.display = 'block';
	count++;
	counterDisplayElem.innerHTML = count;
})

animation.addEventListener('mouseleave', function() {
	walkAnim.style.display = 'block';
	giveLove.style.display = 'none';
	hearts.style.display = 'none';
})