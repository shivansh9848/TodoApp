import { AiOutlineClose } from "react-icons/ai";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateTask, deleteTask } from "../store/tasksSlice";

const Modal = ({ onClose, isOpen, task, setTask }) => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleUpdateTask = (e) => {
    e.preventDefault();
    dispatch(updateTask(task));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.map((t) => (t.id === task.id ? task : t)))
    );
    toast.success("Task updated successfully", { autoClose: 2000 });
    onClose();
  };

  const handleDeleteTask = (e) => {
    e.preventDefault();
    dispatch(deleteTask(task.id));
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.filter((t) => t.id !== task.id))
    );
    toast.success("Task deleted successfully", { autoClose: 2000 });
    onClose();
  };

  return createPortal(
    isOpen && (
      <div className="fixed top-0 left-0 z-40 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-80">
        <div className="bg-purple-200 rounded-md p-4 w-full h-full flex items-center justify-center ">
          <div className="flex  items-center absolute top-10 right-10">
            <AiOutlineClose
              onClick={onClose}
              className="text-5xl bg-purple rounded-md p-2 flex items-center justify-end text-red hover:text-white hover:bg-rose-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 cursor-pointer "
            />
          </div>
          <div className="w-1/2">
            <form
              className="flex flex-col"
              onSubmit={handleUpdateTask}
            >
              <div className="flex flex-col my-2">
                <label
                  className="text-sm max-sm:text-xs text-black"
                  htmlFor="taskName"
                >
                  Task Name:
                </label>

                <input
                  className="h-10 w-full bg-gray-100 p-3 rounded-md mb-1 my-1 focus:outline-0 hover:bg-gray-200 "
                  type="text"
                  placeholder="Task Title"
                  name="name"
                  value={task.name}
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
              </div>
              <div className="flex flex-col my-2">
                <div className="flex flex-row justify-between">
                  <label
                    className="text-sm max-sm:text-xs text-black"
                    htmlFor="taskName"
                  >
                    Task Status:
                  </label>
                  <label className="text-sm max-sm:text-xs text-purple-200">
                    {" "}
                    NotStarted / InProgress / Completed
                  </label>
                </div>
                <input
                  className="bg-gray-100 p-2 rounded-md mb-2 my-1 focus:outline-0 hover:bg-gray-200"
                  type="text"
                  placeholder="Task Status"
                  name="status"
                  value={task.status}
                  onChange={(e) => setTask({ ...task, status: e.target.value })}
                />
              </div>
              <div className="flex flex-col my-2">
                <label
                  className="text-sm max-sm:text-xs text-black"
                  htmlFor="taskName"
                >
                  Task Description:
                </label>
                <textarea
                  className="bg-gray-100 p-2 rounded-md mb-2 my-1 h-32 w-full resize-none focus:outline-0 hover:bg-gray-200"
                  placeholder="Task Description"
                  name="description"
                  value={task.description}
                  onChange={(e) =>
                    setTask({ ...task, description: e.target.value })
                  }
                ></textarea>
              </div>
              <div className="flex justify-between">
                <button
                  onClick={handleUpdateTask}
                  className="bg-white text-purple-800 text-ls hover:text-white border border-green-700 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Update
                </button>
                <button
                  onClick={handleDeleteTask}
                  className="bg-white text-purple-800 text-ls hover:text-white border border-red-700 hover:bg-red-500 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
                >
                  Delete
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    ),
    document.getElementById("modal-root")
  );
};

export default Modal;
