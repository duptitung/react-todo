import React from "react";
import { ReactComponent as TickIcon } from "../assets/images/tick-box.svg";

const NoTodo = () => {
    return (
        <div className="flex justify-center mt-24">
            <div className="text-center">
                <TickIcon className="m-auto" />
                <p className="mt-4 text-gray-700">All tasks are completed.</p>
            </div>
        </div>
    );
};

export default NoTodo;
