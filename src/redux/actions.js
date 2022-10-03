export const addPost = (obj) => ({type: "ADD_POST", payload:obj});
export const clearList = () => ({type: "CLEAR_LIST"});
export const deleteTodo = (id) => ({type: "DELETE_ITEM", payload:id});
export const complateHandler = (id) => ({type: "COMPLATE_HANDLER", payload:id});
export const showModalForm = (id) => ({type: "SHOW_EDIT_FORM", payload:id});
export const notShowModalForm = () => ({type: "NOT_SHOW_EDIT_FORM"});
export const editTodo = (value) => ({type: "EDIT_TODO", payload: value});
export const searchTodoItem = (value) => ({type: "SEARCH_TODO", payload: value});
