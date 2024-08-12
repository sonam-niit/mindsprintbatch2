class Todo{
    constructor(id,task,status){
        this.id=id;
        this.task=task;
        this.status=status;
    }
}
class TodoList{
    constructor(){
        this.todos=[]
    }
    addTodo(data){
        const num=Math.floor(Math.random()*100);
        const todo= new Todo(num,data,'pending');
        this.todos.push(todo);
    }
    removeTodo(id){
        this.todos= this.todos.filter(item=>item.id!==id)
    }
    getAllTodos(){
        return this.todos;
    }
    updateStatus(name){
        this.todos= this.todos.map(item=>{
            if(item.task===name){
                item.status= item.status==='pending'?'completed':'pending';
            }
            return item;
        })
    }
}
const list= new TodoList();
list.addTodo('checkPapers');
list.addTodo('check Assignments');
console.log(list.getAllTodos());
list.updateStatus('checkPapers');
console.log(list.getAllTodos());
