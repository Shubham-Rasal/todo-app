//selectors
let btn=document.getElementById("addBtn")

let List=document.getElementById("onlyList")


//eventlistners
btn.addEventListener("click", addLi)



//functions
function deleteLi(event)
{
event.parentNode.remove();
}


function editLi(element)
{
    // let sibLing=(element.previousElementSibling.innerText);

if(element.textContent=="SAVE")
{
    element.textContent="EDIT"
    console.log(element.previousElementSibling)
    let currentHead=document.createElement('h3')
    currentHead.textContent=element.previousElementSibling.value;
    currentHead.className="flex-grow-1"
    element.parentElement.replaceChild(currentHead,element.previousElementSibling)

}

else 
{
element.textContent ="SAVE"
let newTodo=document.createElement('input')
newTodo.textContent=element.value;
element.parentElement.replaceChild(newTodo,element.previousElementSibling)
newTodo.className="form-control"
newTodo.id="checked"
newTodo.type="text"
newTodo.placeholder="enter new task here"
// let newInput=newTodo.value;
}
}


function addLi()
{

// let newDiv=document.createElement("div");
let newLi=document.createElement("li");
// let newBtn=document.createElement("button")
// console.log(newBtn)
newLi.setAttribute('class','list-group-item d-flex justify-content-center  ')

// newBtn.setAttribute("class","btn btn-outline-danger")

// newLi.appendChild(newBtn)
// newDiv.appendChild(newLi);

// // console.log(newDiv)
let Input=document.getElementById("inside").value;
let inButton=document.getElementById("inside")
console.log(inButton.textContent)

// console.log(Input)

newLi.innerText=Input
newLi.innerHTML=` <h3 class=" flex-grow-1">${Input}</h3> 

<button  id="delBtn" class="btn btn-outline-warning" type="button" id="button-addon2" onclick="editLi(this)">EDIT</button>
<button  id="editBtn" class="btn btn-outline-danger" type="button" id="button-addon2"onclick="deleteLi(this)">REMOVE</button>`
List.append(newLi)


// console.log(List.getAttribute("button"))

}

