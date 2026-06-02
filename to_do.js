function addTask(){
    const taskListEl = document.getElementById("taskList")
    const inputEl = document.getElementById("taskInput");

    const li = document.createElement("li");
    li.innerText = inputEl.value;
   

    taskListEl.appendChild(li);
    inputEl.value = "";

    li.style.listStyleType = 'none'
    li.style.display = 'flex'
    li.style.justifyContent ='space-between'
    li.style.padding = '20px'
    li.style.fontSize = '18px'

    let lidlt = document.createElement("button") 
    lidlt.onclick = () => li.remove()

    li.append(lidlt)

    lidlt.innerText = 'X'
    lidlt.style.color = 'red'
    lidlt.style.border = 'none'
    lidlt.style.fontWeight = '800'
    lidlt.style.marginLeft = 'auto'
    lidlt.style.padding = '10px'
    

}
