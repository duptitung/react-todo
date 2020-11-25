import React from "react";

const CompletedTodos = ({ todos, handleComplete, handleClearCompleted }) => {
    return (
        <>
            <div className="text-gray-600 text-xs p-1 bg-gray-100 rounded-sm flex justify-between">
                <p>Completed</p>
                <div
                    style={{ opacity: "0.75", fontSize: "10px" }}
                    className="text-red-600 text-opacity-75 cursor-pointer"
                    onClick={handleClearCompleted}
                >
                    Clear completed
                </div>
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
