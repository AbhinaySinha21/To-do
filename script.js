var todoInput = document.querySelector(".todo-input");
var btn = document.querySelector(".todo-button");
var todoList = document.querySelector(".todo-list");
var data;
var str="index";
var i=0;
btn.addEventListener("click",function (event) {
    event.preventDefault();
    data = todoInput.value;
    data = data.trim();
    if (data != "") {
      create(data);
      i++;
      localStorage.setItem("index0",i);
      localStorage.setItem(str+i, data);
      todoInput.value = "";
    } else {
      alert("fill the box");
    }
  });
todoList.addEventListener("click",function (event) {
    var it = event.target;
  
    if (it.classList[0] == "comBtn") {
      var p = it.parentElement;
      p.classList.toggle("todo-done");
    }
    if (it.classList[0] == "delBtn") {
      var p = it.parentElement;
      var dataS=p.querySelector("li").innerHTML;
      p.remove();
      removeLocally(dataS);
    } 
  });
window.addEventListener("load",()=>{
    var n= parseInt(localStorage.getItem("index0"));
    for(let i=1;i<=n;i++){
        createAtStart(localStorage.getItem(str+i));
    }
});
function createAtStart(data){
      create(data);
      i=parseInt(localStorage.getItem("index0"));
}
function removeLocally(dataS){
  let l=0;
  let n1=parseInt(localStorage.getItem("index0"));
  for(let o=1;o<=n1;o++){
    if(dataS==localStorage.getItem(str+o))
        l=o;
  }
  for(let j=l;j<n1;j++)
    { var k=j+1;
    localStorage.setItem(str+j,localStorage.getItem(str+k));}
  localStorage.removeItem(str+n1);
  localStorage.setItem("index0",n1-1);
}
function create(data){
  var divNew = document.createElement("div");
  divNew.classList.add("todo");

  var listNew = document.createElement("li");
  listNew.classList.add("todo-item");
  listNew.innerText = data;
  divNew.appendChild(listNew);

  var combtn = document.createElement("button");
  combtn.classList.add("comBtn");
  combtn.innerHTML = '<i class="fa fa-check " aria-hidden="true"></i>';
  divNew.appendChild(combtn);

  var delbtn = document.createElement("button");
  delbtn.classList.add("delBtn");
  delbtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  divNew.appendChild(delbtn);
  todoList.appendChild(divNew);
}



