const input=document.querySelector('input')
const button=document.querySelector('.addbuton')
const mainContainer=document.querySelector('.mainContainer')
const form=document.querySelector('form')

let todos =[]
form.addEventListener('submit',function(event){
    event.preventDefault()
let todo ={
    name:input.value
}

    todos.push(todo)
    displayTodos()
    form.reset()
})

    function displayTodos() {
        mainContainer.innerHTML=""
        todos.forEach((todo,index)=> {
            const mainDiv=document.createElement("div")
            mainDiv.classList.add("smallCard")
            const para =document.createElement("p")

            para.textContent= todo.name
            const deleteBtn=document.createElement("button")
            deleteBtn.textContent="Delete"
            deleteBtn.classList.add("deleteTodo")
            mainDiv.append(para,deleteBtn)
            mainContainer.appendChild(mainDiv)
            deleteBtn.addEventListener('click',function(){
                deleteTodos(index)
            })
        })
    }
    function deleteTodos(index){
        todos.splice(index,1)
        displayTodos()
        
    }
const input=document.querySelector('input')
const button=document.querySelector('.addbuton')
const mainContainer=document.querySelector('.mainContainer')
const form=document.querySelector('form')

let todos =[]
form.addEventListener('submit',function(event){
    event.preventDefault()
let todo ={
    name:input.value
}

    todos.push(todo)
    displayTodos()
    form.reset()
})

    function displayTodos() {
        mainContainer.innerHTML=""
        todos.forEach((todo,index)=> {
            const mainDiv=document.createElement("div")
            mainDiv.classList.add("smallCard")
            const para =document.createElement("p")

            para.textContent= todo.name
            const deleteBtn=document.createElement("button")
            deleteBtn.textContent="Delete"
            deleteBtn.classList.add("deleteTodo")
            mainDiv.append(para,deleteBtn)
            mainContainer.appendChild(mainDiv)
            deleteBtn.addEventListener('click',function(){
                deleteTodos(index)
            })
        })
    }
    function deleteTodos(index){
        todos.splice(index,1)
        displayTodos()
        
    }
