import React from "react";

const TodoForm = ({
    hideCompleted,
    handleVisibilityChange,
    handleSubmit,
    handleTaskChange,
    todo,
}) => {
    return (
        <>
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
        </>
    );
};

export default TodoForm;
