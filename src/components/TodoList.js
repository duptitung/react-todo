import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleComplete, handleDelete }) => {
    return (
        <ul className="mb-6">
            {todos.map((todo, index) => {
                if (todo.completed !== true) {
                    return (
                        <TodoItem
                            todo={todo}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                            key={index}
                        />
                    );
                }
                return null;
            })}
        </ul>
    );
};

export default TodoList;
