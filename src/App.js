import { useReducer} from "react";
import EditForm from "./components/EditForm";
import FormList from "./components/FormList";
import TodoList from "./components/TodoList";
import { reducer } from "./redux/reucer";
import {addPost,clearList,deleteTodo,complateHandler,showModalForm,notShowModalForm,editTodo,searchTodoItem} from"./redux/actions"


const initalState = {
  todos: JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [],
  searchTodo: JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [],
  isModalShow: false,
  todoId: null,
  addTodoError:"good",
}


function App() {

  const [{isModalShow,searchTodo,addTodoError}, dispatch] = useReducer(reducer,initalState)
  
  const createPost = (obj) => dispatch(addPost(obj));
  const clearTodos = () => dispatch(clearList());
  const deleteItem = (id) => dispatch(deleteTodo(id));
  const complateHanler = (id) => dispatch(complateHandler(id));
  const ShowEditForm = (id) => dispatch(showModalForm(id));
  const editTodos = (value) => dispatch(editTodo(value));
  const notShowEditForm = () => dispatch(notShowModalForm());
  const searchTodos = (value) => dispatch(searchTodoItem(value));
  

  return (
    <>

      <div className="App">
        <div className="container my-5">
          {
            isModalShow 
            ?(
              <EditForm 
              notShowEditForm = {notShowEditForm}
              editTodo = {editTodos} 
              />
            )
            :
            null 
          }

          <div className="row justify-content-center justify-content-md-between gy-4">
            <div className="col-md-6 ">
              <FormList addPost = {createPost} clearList ={clearTodos} searchTodos = {searchTodos} addTodoError = {addTodoError}/>
            </div>

            <div className="col-md-6">
              <TodoList todos = {searchTodo} deletTodo = {deleteItem} compateHanler = {complateHanler} ShowEditForm ={ShowEditForm}/>
            </div>
          </div>
        </div>
      </div>

    </>
   
  );
}

export default App;
