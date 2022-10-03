import React from 'react';
import TodoListItem from './TodoListItem';

function TodoList({todos,deletTodo,compateHanler, ShowEditForm}) {
    return (
        <ul className="list-group js-list-group">
            {
                todos.map(el => (
                    <TodoListItem key = {el.id} {...el} deleteTodo = {deletTodo} compateHanler = {compateHanler} ShowEditForm = {ShowEditForm}/>
                ))
            }
        </ul>
    );
}

export default TodoList;