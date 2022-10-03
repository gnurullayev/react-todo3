import { useRef, useState } from "react";
import EditForm from "./components/EditForm";
import FormList from "./components/FormList";
import TodoList from "./components/TodoList";

const initalState = () => {
  const state = JSON.parse(localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : []
  return state
}


function App() {
  const [todos, setTodos] = useState(initalState())
  const [isModalShow, setModalShow] = useState(false)
  const idRef = useRef(null)

  const addLocolStorage = (el) => {
    localStorage.setItem("list", JSON.stringify(el))
  }
  
  const addPost = (obj) => {
    setTodos([...todos, obj])
    addLocolStorage ([...todos, obj])
  }

  const clearList = () => {
    setTodos([])
    addLocolStorage ([])
  }

  const deleteItem = (id) => {
    const newTodo = todos.filter(el => el.id !== id)
    setTodos(newTodo)
    addLocolStorage (newTodo)
  }

  const compateHanler = (id) => {
    const newArr = todos.map(el => {
      if (el.id === id){
        return {...el, complate: !el.complate, }
      }

      return el
    })

    setTodos(newArr)
    addLocolStorage (newArr)
  }

  const ShowEditForm = (id) => {
    setModalShow(true)
    idRef.current = id
  }

  const editTodo = (value) => {
    setModalShow(false)

    const newArr = todos.map(el => {
      if(el.id === idRef.current) {
        return {...el, label: value}
      }
      return el
    })

    setTodos(newArr)
    addLocolStorage (newArr)
  }

  const notShowEditForm = () => {
    setModalShow(false)
  }

  const ShowEditFormChild = (evt) => {
    evt.stopPropagation()
    setModalShow(true)
  }



  // if(isModalShow) return 

  return (
    <>

      <div className="App">
        <div className="container my-5">
          {
            isModalShow 
            ?(
              <EditForm 
              notShowEditForm = {notShowEditForm}
              ShowEditFormChild  = {ShowEditFormChild }
              editTodo = {editTodo} 
              />
            )
            :
            null 
          }

          <div className="row justify-content-center justify-content-md-between gy-4">
            <div className="col-md-6 ">
              <FormList addPost = {addPost} clearList ={clearList}/>
            </div>

            <div className="col-md-6">
              <TodoList todos = {todos} deletTodo = {deleteItem} compateHanler = {compateHanler} ShowEditForm ={ShowEditForm}/>
            </div>
          </div>
        </div>
      </div>

    </>
   
  );
}

export default App;
