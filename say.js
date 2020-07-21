var list = document.getElementById("list");

function addtodo(){
    var todo_item = document.getElementById("todo_item");
    var li = document.createElement('li')
    var litext = document.createTextNode(todo_item.value)
    li.appendChild(litext)
    var delbtn = document.createElement("button")
    var deltext = document.createTextNode("delete")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","deleteItem(this)")
    delbtn.appendChild(deltext)

    var editbtn = document.createElement("button")
    var edittext = document.createTextNode("edit")
    editbtn.appendChild(edittext)
    editbtn.setAttribute("onclick","editItem(this)")


    li.appendChild(delbtn)
    li.appendChild(editbtn)
 
    list.appendChild(li)
    todo_item.value=""
    console.log(li)

}
function deleteItem(e){


    e.parentNode.remove()
}
function deleteall(){
    list.innerHTML=""
}
function editItem(e){
    var val =e.parentNode.firstChild.nodeValue;
    var editValue = prompt ("enter edit value", val)
    e.parentNode.firstChild.nodeValue = editValue
    

}