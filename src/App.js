import React, { useEffect, useState } from "react";
import { uniqueId } from "lodash";
import "./assets/sass/main.scss";
import TodoForm from "./components/TodoForm";
import NoTodo from "./components/NoTodo";
import TodoList from "./components/TodoList";
import CompletedTodos from "./components/CompletedTodos";

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
            <TodoForm
                hideCompleted={hideCompleted}
                handleVisibilityChange={handleVisibilityChange}
                handleSubmit={handleSubmit}
                handleTaskChange={handleTaskChange}
                todo={todo}
            />

            <div className="mt-5">
                {uncompleted.length || !hideCompleted ? (
                    <>
                        <TodoList
                            todos={todos}
                            handleComplete={handleComplete}
                            handleDelete={handleDelete}
                        />

                        {!hideCompleted && (
                            <CompletedTodos
                                todos={todos}
                                handleComplete={handleComplete}
                            />
                        )}
                    </>
                ) : (
                    <NoTodo />
                )}
            </div>
        </div>
    );
};

export default App;
