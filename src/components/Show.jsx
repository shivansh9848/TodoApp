import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal";
import { useDrag, useDrop } from "react-dnd"; // drag and drop feature
import { updateTask } from "../store/tasksSlice";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const statuses = [
    { status: "notstarted", textColor: "text-white", bgColor: " bg-white" },
    {
      status: "inprogress",
      textColor: "text-yellow-100",
      bgColor: "bg-yellow-100 border-solid border-1 border-yellow-600",
    },
    {
      status: "completed",
      textColor: "text-green-100",
      bgColor: "bg-green-100 border-solid border-1 border-green-600",
    },
  ];

  return (
    <>
      {" "}
      <div
        className="bg-purple-100  w-screen 
    flex flex-col items-center justify-between gap-20 pt-16"
      >
        <div className="flex flex-col sm:flex-row">
          {statuses.map(({ status, textColor, bgColor }, index) => (
            <Section
              key={index}
              status={status}
              tasks={tasks}
              onTaskClick={handleTaskClick}
              textColor={textColor}
              bgColor={bgColor}
            />
          ))}
          <Modal
            onClose={() => setSelectedTask(null)}
            isOpen={selectedTask !== null}
            task={selectedTask}
            setTask={setSelectedTask}
          />
        </div>
      </div>
    </>
  );
};

const Section = ({ status, tasks, onTaskClick, textColor, bgColor }) => {
  const dispatch = useDispatch();
  const [{ isOver }, drop] = useDrop({
    accept: "task",
    drop: (item) => {
      dispatch(updateTask({ id: item.id, status }));
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const filteredTasks = tasks.filter((task) => task.status === status);

  return (
    <div
      ref={drop}
      className={`w-full sm:w-64 rounded-md p-2 ${
        isOver ? "bg-opacity-75" : ""
      }`}
    >
      <Header
        text={status}
        count={filteredTasks.length}
        textColor={textColor}
      />
      {filteredTasks.length > 0 &&
        filteredTasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onTaskClick={onTaskClick}
            bgColor={bgColor}
          />
        ))}
    </div>
  );
};

const Header = ({ text, count, textColor }) => {
  return (
    <div className="bg-purple-900 flex-col md:flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white">
      <div className={`flex rounded-md pl-2 pr-2 text-xl ${textColor}`}>
        {text}
      </div>
      <div className=" text-white">{count}</div>
    </div>
  );
};

const Task = ({ task, onTaskClick, bgColor }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      className={`relative p-4 mt-3 shadow-md rounded-md hover:bg-gray-200 ${
        isDragging ? "opacity-10" : "opacity-100"
      } cursor-grab ${bgColor}`}
      onClick={() => onTaskClick(task)}
    >
      <p>{task.name}</p>
    </div>
  );
};

export default TaskList;
