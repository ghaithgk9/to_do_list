const task=document.getElementById("task");

const list =document.getElementById("list");

const deleteButton=document.querySelector(".delete-btn")

function ajout(){
    const div=document.createElement("div");
    div.className='task';
    const checkbox=document.createElement("input");
    checkbox.type="checkbox";
    const span=document.createElement("span");
    span.textContent=task.value;
    div.append(checkbox);
    div.append(span);
    const deleteButton=document.createElement("button")
    deleteButton.className="delete-btn";
    deleteButton.textContent = "delete";
    const li=document.createElement("li");
    li.append(div)
    li.append(deleteButton)
    list.append(li)
    task.value="";

    deleteButton.addEventListener("click",()=>{
    li.remove()

})
     checkbox.addEventListener("change",()=>{
        if(checkbox.checked){
            span.style.textDecoration='line-through'
        }
        else{
             span.style.textDecoration='none'
        }
     })
    
}





