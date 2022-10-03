

export const reducer = (state, {type,payload}) => {
    const addLocolStorage = (el) => {
        localStorage.setItem("list", JSON.stringify(el))
    }

    switch (type) {
        case "ADD_POST":
            addLocolStorage ([...state.todos, payload])
            const index = state.todos.findIndex(el => el.label.toLowerCase() === payload.label.toLowerCase())

            if(index < 0) {
                return {
                    ...state,
                    todos: [...state.todos, payload],
                    searchTodo:[...state.todos, payload],
                    addTodoError: "good"
                }
            }
            return {
                ...state,
                addTodoError: "bad"
            }
        case "CLEAR_LIST":
            addLocolStorage ([])
            return{
                ...state,
                todos: [],
                searchTodo:[],
            }
        case "DELETE_ITEM":
            const newTodo = state.todos.filter(el => el.id !== payload)
            addLocolStorage (newTodo)
            return {
                ...state,
                todos: newTodo,
                searchTodo:newTodo,
            } 
        case "COMPLATE_HANDLER":
            const todoHandler =state.todos.map(el => {
                if (el.id === payload){
                    return {...el, complate: !el.complate, }
                }
                return el
            })
            addLocolStorage (todoHandler)
            return {
                ...state,
                todos: todoHandler,
                searchTodo:todoHandler,
            } 
        case "SHOW_EDIT_FORM": 
            return {
                ...state,
                isModalShow: true,
                todoId: payload,
            }
        case "NOT_SHOW_EDIT_FORM": 
            return{
                ...state,
                isModalShow: false,
            }    
        case "EDIT_TODO":
            const editTodo = state.todos.map(el => {
                if(el.id === state.todoId) {
                  return {...el, label: payload}
                }
                return el
            })
            addLocolStorage (editTodo)
            return {
                ...state,
                todos:editTodo,
                searchTodo:editTodo,
                isModalShow: false,

            } 
        case "SEARCH_TODO": 
            return {
                ...state,
                searchTodo: state.todos.filter(el => el.label.toLowerCase().includes(payload.toLowerCase()))
            }
        default :
            return state
    }
}