import React from "react";

const CompletedTodos = ({ todos, handleComplete }) => {
    return (
        <>
            <div className="text-gray-600 text-xs p-1 bg-gray-100 rounded-sm">
                Completed
            </div>
            <ul className="opacity-50">
                {todos.map((todo, index) => {
                    if (todo.completed === true) {
                        return (
                            <li className="todo-item" key={index}>
                                <div className="todo-item__wrapper">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() =>
                                                handleComplete(todo.id)
                                            }
                                        />
                                        <span className="todo-item__text">
                                            {todo.task}
                                        </span>
                                    </div>
                                </div>
                            </li>
                        );
                    }
                    return null;
                })}
            </ul>
        </>
    );
};

export default CompletedTodos;
