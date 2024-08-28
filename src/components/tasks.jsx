import React, { useState } from "react";
import Task from "./Task";

const Tasks = ({ tasks, setTasks, setinputValue }) => {

  return (
    <div>
      {tasks?.map((task) => (
        <Task
          key={task.id}
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setinputValue={setinputValue}
        />
      ))}
    </div>
  );
};

export default Tasks;
