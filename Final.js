const todos = [];
let list = document.querySelector("ul");
 function renderTodos(){ 
        const template=todos.map((todo, index) => `<li id="item">
        <input type="checkbox"> ${todo.task}<button id="delete" 
        data-index-cancel>X</button></li>`);
        list.innerHTML = template.join('');
    } 
document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
    const input = document.querySelector("input").value;
  
    const task = {
        task: input,
        complete: false
}
    todos.push(task);  
    renderTodos()
});
  
list.addEventListener("click",function(event){
    if(event.target.matches('#delete')) {
        const input = document.querySelector("input");     
        const task = {
        task: input,
        complete: true
    }
    function deleteObject(){
        let tasked = document.getElementById("item");
        tasked.remove();
    }
    deleteObject();
    }
});