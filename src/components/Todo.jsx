import React, { useEffect, useState } from "react";
import Tasks from "./tasks";
import Addtasks from "./addtasks";

const Todo = () => {
  //  initial value for tasks from local storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  let [inputValue, setinputValue] = useState("");

  // initialize the task
  const addTask = (taskName) => {
    const task = {
      id: Date.now(),
      name: taskName,
      complete: false,
    };
    // add task to array
    const flag = tasks.some((item) => item.name === task.name);
    if (!flag) {
      setTasks([...tasks, task]);
    }
  };
  // add tasks to local storage
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  // set the title of app
  const allTasks = tasks.length;
  let completedTasks = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].complete === true) completedTasks++;
  }
  return (
    <div className="h-screen flex items-center justify-center bg-[#e2d4ff] ">
      <div>
        <h2 className="font-semibold ">{`You have done ${completedTasks} task from ${allTasks}`}</h2>
        <div className="max-w-[500px] max-h-[440px] overflow-y-auto bg-gradient-to-br from-[#2f4680] to-[#500ae4] p-4">
          {/* input section */}
          <Addtasks
            addTask={addTask}
            inputValue={inputValue}
            setinputValue={setinputValue}
          />
          {/* body of list */}
          <Tasks
            tasks={tasks}
            setTasks={setTasks}
            setinputValue={setinputValue}
          />
        </div>
      </div>
    </div>
  );
};

export default Todo;
