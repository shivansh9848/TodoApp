import React, { useState } from "react"; // react hooks
import { v4 as uuidv4 } from "uuid"; //using uuid for generating random and unique ids for the tasks here version 4 is used for generating ids
import { useDispatch, useSelector } from "react-redux"; // react-redux library is used
import { toast } from "react-toastify"; //tostify is used to generate beautiful notifications when adding,deleting or editing a task
import { addTask } from "../store/tasksSlice";

const TaskInput = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const [task, setTask] = useState({
    name: "",
    status: "notstarted",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.name.length < 3) {
      toast.error("Task name should be at least 3 characters long", {
        autoClose: 2000,
      }); //error notification through toast.error and will stay for 2 sec
      return;
    }

    const newTask = { ...task, id: uuidv4() }; //generating new id for the task using uuid
    dispatch(addTask(newTask));
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask])); //storing the tasks in local storage as well

    setTask({ name: "", status: "notstarted" });
    toast.success("Task added successfully", { autoClose: 2000 });
  };

  return (
    <>
      <div
        className="bg-purple-100  w-screen 
       flex flex-col items-center justify-between gap-20 pt-16"
      >
        <form
          onSubmit={handleSubmit}
          className="flex flex-row items-center "
        >
          <input
            type="text"
            className="relative px-7 py-4 bg-grey rounded-lg leading-none flex items-center divide-x divide-gray-600 rounded-md mr-4 h-12 w-64 px-3 hover:bg-gray-200 focus:outline-0"
            placeholder="Input Task"
            value={task.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <button className="bg-white text-purple-800 text-xl hover:text-white border border-purple-700 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
            +
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskInput;
