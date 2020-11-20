import React, { useState } from "react";
import { ReactComponent as IconMore } from "../assets/images/more.svg";

const TodoItem = ({ todo, handleComplete, handleDelete }) => {
    const [showOption, setShowOption] = useState(false);

    const deleteTodo = (id) => {
        handleDelete(id);
        setShowOption(false);
    };
    return (
        <li className="todo-item">
            <div className="todo-item__wrapper">
                <div className="flex items-center">
                    <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleComplete(todo.id)}
                    />
                    <span className="todo-item__text">{todo.task}</span>
                </div>
                <div className="relative flex">
                    <div
                        className="icon-more"
                        onClick={() => setShowOption(!showOption)}
                    >
                        <IconMore />
                    </div>
                    {showOption && (
                        <div
                            style={{
                                bottom: "-15px",
                                left: "-10px",
                            }}
                            className="absolute [ text-xs text-red-600 ] bg-gray-100 rounded-md px-2 py-1 leading-none"
                        >
                            <button
                                className="focus:outline-none"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Delete
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </li>
    );
};

export default TodoItem;
