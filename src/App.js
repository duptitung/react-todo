import React, { useEffect, useState } from "react";
import "./assets/sass/main.scss";
import { ReactComponent as IconMore } from "./assets/images/more.svg";
import { ReactComponent as TickIcon } from "./assets/images/tick-box.svg";
import { uniqueId } from "lodash";

const App = () => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [uncompleted, setUncompleted] = useState([]);
    const [hideCompleted, setHideCompleted] = useState(true);

    const handleTaskChange = (e) => {
        setTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { id: uniqueId(), task: todo, completed: false }]);
        setTodo("");
    };

    useEffect(() => {
        setUncompleted(todos.filter((task) => task.completed === false));
    }, [todos]);

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const handleComplete = (id) => {
        setTodos(
            todos.map((item) => {
                if (item.id === id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            })
        );
    };

    const handleVisibilityChange = () => {
        setHideCompleted(!hideCompleted);
    };

    return (
        <div className="container [ p-5 m-auto ]">
            <div className="flex justify-between items-end">
                <div className="header text-2xl">
                    <h3 className="leading-none">Todo</h3>
                </div>
                <div className="text-xs">
                    <input
                        id="hideCompleted"
                        type="checkbox"
                        checked={!hideCompleted}
                        className="mr-1 align-middle"
                        onChange={handleVisibilityChange}
                    />
                    <label htmlFor="hideCompleted" className="align-middle">
                        Show completed
                    </label>
                </div>
            </div>

            <div className="todo-input [ mt-5 ]">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="input [ w-full p-3 bg-gray-200 text-sm text-gray-700 outline-none ] [ border rounded border-transparent focus:border-blue-500 ]"
                        placeholder="Add task"
                        value={todo}
                        onChange={handleTaskChange}
                    />
                </form>
            </div>

            <div className="mt-5">
                {uncompleted.length || !hideCompleted ? (
                    <>
                        <ul className="mb-6">
                            {todos.map((todo, index) => {
                                if (todo.completed !== true) {
                                    return (
                                        <li className="todo-item" key={index}>
                                            <div className="todo-item__wrapper">
                                                <div className="flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        checked={todo.completed}
                                                        onChange={() =>
                                                            handleComplete(
                                                                todo.id
                                                            )
                                                        }
                                                    />
                                                    <span className="todo-item__text">
                                                        {todo.task}
                                                    </span>
                                                </div>
                                                <div className="relative flex">
                                                    <div className="icon-more">
                                                        <IconMore />
                                                    </div>
                                                    <div
                                                        style={{
                                                            bottom: "-15px",
                                                            left: "-10px",
                                                        }}
                                                        className="absolute [ text-xs text-red-600 ] bg-gray-100 rounded-md px-2 py-1 leading-none"
                                                    >
                                                        <button
                                                            className="focus:outline-none"
                                                            onClick={() =>
                                                                handleDelete(
                                                                    todo.id
                                                                )
                                                            }
                                                        >
                                                            Delete
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    );
                                }
                                return null;
                            })}
                        </ul>

                        {!hideCompleted && (
                            <>
                                <div className="text-gray-600 text-xs p-1 bg-gray-100 rounded-sm">
                                    Completed
                                </div>
                                <ul className="opacity-50">
                                    {todos.map((todo, index) => {
                                        if (todo.completed === true) {
                                            return (
                                                <li
                                                    className="todo-item"
                                                    key={index}
                                                >
                                                    <div className="todo-item__wrapper">
                                                        <div className="flex items-center">
                                                            <input
                                                                type="checkbox"
                                                                checked={
                                                                    todo.completed
                                                                }
                                                                onChange={() =>
                                                                    handleComplete(
                                                                        todo.id
                                                                    )
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
                        )}
                    </>
                ) : (
                    <div className="flex justify-center mt-24">
                        <div className="text-center">
                            <TickIcon className="m-auto" />
                            <p className="mt-4 text-gray-700">
                                All tasks are completed.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default App;
