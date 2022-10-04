import React from 'react';
import TodoListItem from './TodoListItem';
import { TransitionGroup,CSSTransition } from "react-transition-group";
import "./todoList.css"

function TodoList({todos,deletTodo,compateHanler, ShowEditForm}) {
    return (
        <ul className="list-group js-list-group">
            {
                <TransitionGroup className= {"list"}>
                   {
                     todos.map(el => (
                        <CSSTransition 
                        classNames= "item"
                        key = {el.id}
                        timeout = {500}>
                            <TodoListItem key = {el.id} {...el} deleteTodo = {deletTodo} compateHanler = {compateHanler} ShowEditForm = {ShowEditForm}/>
                        </CSSTransition>
                    ))
                   }
                </TransitionGroup>
            }
        </ul>
    );
}

export default TodoList;