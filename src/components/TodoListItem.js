import React from 'react';

function TodoListItem({id,label, deleteTodo,complate, compateHanler,ShowEditForm}) {
    
    return (
        <>
            <li className="list-group-item d-flex justify-content-between align-items-center mb-1 bg-transparent shadow-lg">
                
                <p 
                className= {`d-flex align-items-center mb-0 text-secondary `} 
                style = {{textDecorationLine: complate && "line-through", textDecorationColor: "#e68211", textDecorationThickness: "2px"}}
                >
                    <input 
                    className="form-check-input" 
                    type="checkbox"
                    onChange={() => compateHanler(id)}
                    checked = {complate}
                    />
                    <span className="js-list-span ms-4">{label}</span>
                </p>

               <div>
                    <button 
                    className="btn js-list-btn"
                    onClick={() => ShowEditForm(id)} 
                    >
                        <i className="bi bi-pencil text-success"></i>
                    </button>

                    <button 
                    className="btn js-list-btn"
                    onClick={() => deleteTodo(id)} 
                    >
                        <i className="bi bi-trash-fill text-danger"></i>
                    </button>
               </div>
            </li>
        </>
    );
}

export default TodoListItem;