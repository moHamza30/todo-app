import React, { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Task = ({ task, tasks, setinputValue, setTasks }) => {
  const handleDelete = () => {
    const updatedTaskes = tasks.filter((item) => {
      return item.id !== task.id;
    });
    setTasks(updatedTaskes);
    if (task.complete) {
      handlecompletedTasks(false);
    }
  };
  const handleEdit = () => {
    setinputValue(task.name);
    handleDelete();
  };

  const handleComplete = () => {
    setTasks(
      tasks.map((item) => {
        if (item.id === task.id) {
          return { ...item, complete: !task.complete };
        } else return item;
      })
    );
  };
  return (
    <div className="flex justify-between items-center bg-white rounded-sm p-2 my-3">
      {/* checkBox && name */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={task.complete}
          onChange={handleComplete}
          className="relative top-[2px]"
        />
        <h2 className={`${task.complete ? "line-through" : ""}`}>
          {task.name}
        </h2>
      </div>
      {/* edit && delete */}
      <div className="flex items-center gap-3">
        <MdEdit onClick={handleEdit} />
        <MdDelete onClick={handleDelete} />
      </div>
    </div>
  );
};

export default Task;
